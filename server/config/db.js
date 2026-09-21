/**
 * TPOTN — server/config/db.js
 *
 * Connects to MongoDB using MONGO_URI from .env — works with either a
 * local MongoDB or an Atlas cluster; the connection string is all that
 * changes, this file doesn't care which one it's given.
 *
 * Deliberately does NOT crash the process if the connection fails.
 * The static frontend (public/) has no dependency on the database, so a
 * down/misconfigured DB should only affect the /api routes, not take
 * the whole site offline. Routes that need the DB check
 * isDbConnected() themselves and respond with a clear 503 instead of
 * hanging or throwing.
 */

const dns = require('dns');
const mongoose = require('mongoose');

/**
 * Node's SRV/TXT lookups (used by mongodb+srv:// URIs) go through a
 * separate internal resolver (c-ares) that, on Windows especially,
 * sometimes ignores whatever DNS server is configured at the OS level —
 * so switching DNS in Windows settings alone doesn't always fix
 * "querySrv ECONNREFUSED". Forcing Node itself to use a public DNS
 * resolver sidesteps that entirely. Harmless if DNS was already fine.
 */
dns.setServers(['8.8.8.8', '1.1.1.1']);

/**
 * Turns a raw connection error into a short, actionable hint instead of
 * just the raw driver message — the SRV-lookup failure in particular
 * (mongodb+srv:// URIs) is a very common Windows/network DNS issue with
 * a known fix, so it's worth calling out specifically rather than
 * leaving someone to guess from "querySrv ECONNREFUSED".
 */
function explainConnectionError(err) {
  const msg = err.message || '';

  if (msg.includes('querySrv') || msg.includes('ECONNREFUSED') && msg.includes('_mongodb._tcp')) {
    return (
      'DNS could not resolve your Atlas cluster (SRV lookup failed). This is usually ' +
      'the network\u2019s DNS server refusing SRV records, not a problem with your URI. Try: ' +
      '(1) set your DNS to 8.8.8.8 / 1.1.1.1 in network settings, (2) run "ipconfig /flushdns" ' +
      '(Windows) and retry, or (3) use the non-SRV connection string from Atlas → Connect → ' +
      'Drivers (starts with mongodb:// instead of mongodb+srv://) as a fallback.'
    );
  }

  if (msg.includes('ECONNREFUSED')) {
    return 'Could not reach the database at that address. If this is a local MongoDB, check it\u2019s actually running.';
  }

  if (msg.includes('Authentication failed') || msg.includes('bad auth')) {
    return 'MongoDB rejected the username/password in MONGO_URI — double-check them in Atlas → Database Access.';
  }

  if (msg.includes('ETIMEDOUT') || msg.includes('timed out')) {
    return 'Connection timed out — for Atlas, check Network Access → IP Access List includes your current IP (or 0.0.0.0/0 for testing).';
  }

  return null;
}

async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn('[db] MONGO_URI is not set — skipping database connection. API routes will return 503 until it is configured in .env.');
    return;
  }

  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log(`[db] Connected to MongoDB (${mongoose.connection.name})`);
  } catch (err) {
    console.error('[db] MongoDB connection failed:', err.message);
    const hint = explainConnectionError(err);
    if (hint) console.error('[db] Hint:', hint);
    console.warn('[db] Continuing without a database — the static site will still work, but /api routes will return 503.');
  }

  mongoose.connection.on('error', (err) => {
    console.error('[db] MongoDB connection error:', err.message);
  });
  mongoose.connection.on('disconnected', () => {
    console.warn('[db] MongoDB disconnected.');
  });
}

/** True once Mongoose reports an active connection (readyState 1). */
function isDbConnected() {
  return mongoose.connection.readyState === 1;
}

module.exports = { connectDB, isDbConnected, explainConnectionError };
