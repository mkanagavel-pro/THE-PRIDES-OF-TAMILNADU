# tamil-nadu-map.svg — notes

Interactive Tamil Nadu district map. 38 districts (current, post 2019–2022
splits), one `<path>` per district, plus a solid backdrop `<path
class="tn-map__landmass">` drawn first so the individual district shapes
never show a "gap" at their shared borders.

## Where the boundaries came from

Boundary coordinates are derived from the community-maintained
`datta07/INDIAN-SHAPEFILES` GitHub repository (`TAMIL NADU_DISTRICTS.geojson`),
itself built from public Census of India / Survey of India district
boundaries. That repo has no explicit license file attached.

**Before shipping this commercially, worth doing one of:**
- Confirming redistribution terms directly with the repo maintainer, or
- Swapping in an official Survey of India / data.gov.in licensed boundary
  file (same pipeline below works unchanged — it just needs a different
  input GeoJSON).

Geographic boundary *facts* (where a district line actually sits) aren't
copyrightable — it's specifically this file's redistribution terms that
are unconfirmed.

## How it was generated (so it can be regenerated later)

1. Download the district GeoJSON (`dtname` = district name property).
2. Per district: simplify with Shapely (`simplify(0.0045, preserve_topology=True)`),
   then a small morphological "closing" (`buffer(+x).buffer(-x)`) to erase
   the tiny self-touching slivers that Douglas–Peucker simplification can
   introduce on highly convoluted urban boundaries (Chennai was the worst
   offender), then drop interior holes (this is a decorative map, not a
   cadastral one).
3. Union all 38 cleaned districts, repeat the same closing pass, and use
   only the outer boundary as the `.tn-map__landmass` backdrop layer.
4. Project lon/lat to SVG coordinates with a flat equirectangular
   projection corrected by `cos(mean latitude)` — Tamil Nadu is small
   enough in extent that this introduces no visible distortion.
5. Each `<path>` gets `id` (slug), `data-district` (display name),
   `data-cx` / `data-cy` (projected centroid, for label/marker placement),
   and a `<title>` child for native tooltip + accessibility fallback.

If district boundaries ever need to be re-cut (new district splits, etc.),
redo this pipeline against an updated GeoJSON rather than hand-editing the
SVG paths.
