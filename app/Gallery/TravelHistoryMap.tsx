"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { withBasePath } from "../lib/basePath";

type CountryShape = {
  key: string;
  iso3: string;
  name: string;
  href: string;
  photos: number;
  lastVisit: string;
  note: string;
  center: [number, number];
};

type TravelHistoryMapProps = {
  photoCounts: Record<string, number>;
};

type Position = [number, number];

function ringAreaAbs(ring: Position[]): number {
  if (ring.length === 0) return 0;

  let twiceArea = 0;

  for (let i = 0; i < ring.length - 1; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[i + 1];
    const cross = x1 * y2 - x2 * y1;
    twiceArea += cross;
  }

  return Math.abs(twiceArea / 2);
}

function keepMainlandGeometry(
  geometry: Record<string, unknown> | undefined,
  center: Position,
  preserveAllParts = false
): Record<string, unknown> | undefined {
  if (!geometry || typeof geometry !== "object") return geometry;

  if (preserveAllParts) {
    return geometry;
  }

  const type = geometry.type;
  const coords = geometry.coordinates;

  if (type !== "MultiPolygon" || !Array.isArray(coords) || coords.length === 0) {
    return geometry;
  }

  const bestPolygon = coords
    .filter((poly): poly is Position[][] =>
      Array.isArray(poly) && poly.length > 0 && Array.isArray(poly[0])
    )
    .map((poly) => {
      const outerRing = poly[0] as Position[];
      return {
        poly,
        area: ringAreaAbs(outerRing),
      };
    })
    .sort((a, b) => b.area - a.area)[0]?.poly;

  if (!bestPolygon) return geometry;

  return {
    type: "Polygon",
    coordinates: bestPolygon,
  };
}

const countries: CountryShape[] = [
  {
    key: "china",
    iso3: "CHN",
    name: "China",
    href: "/Gallery/China",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [104.2, 35.9],
  },
  {
    key: "united-kingdom",
    iso3: "GBR",
    name: "United Kingdom",
    href: "/Gallery/United-Kingdom",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [-2.6, 54.1],
  },
  {
    key: "united-states",
    iso3: "USA",
    name: "United States",
    href: "/Gallery/United-States",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [-98.6, 39.8],
  },
  {
    key: "north-korea",
    iso3: "PRK",
    name: "North Korea",
    href: "/Gallery/North-Korea",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [127.0, 40.2],
  },
  {
    key: "south-korea",
    iso3: "KOR",
    name: "South Korea",
    href: "/Gallery/South-Korea",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [127.9, 36.4],
  },
  {
    key: "cambodia",
    iso3: "KHM",
    name: "Cambodia",
    href: "/Gallery/Cambodia",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [104.9, 12.6],
  },
  {
    key: "netherlands",
    iso3: "NLD",
    name: "Netherlands",
    href: "/Gallery/Netherlands",
    photos: 6,
    lastVisit: "2025",
    note: "Canals, cycling routes, and modern city rhythm.",
    center: [5.2, 52.2],
  },
  {
    key: "belgium",
    iso3: "BEL",
    name: "Belgium",
    href: "/Gallery/Belgium",
    photos: 3,
    lastVisit: "2025",
    note: "Quiet streets, architecture, and warm evening light.",
    center: [4.7, 50.8],
  },
  {
    key: "france",
    iso3: "FRA",
    name: "France",
    href: "/Gallery/France",
    photos: 5,
    lastVisit: "2025",
    note: "Paris moments and southern color palettes.",
    center: [2.3, 46.3],
  },
  {
    key: "switzerland",
    iso3: "CHE",
    name: "Switzerland",
    href: "/Gallery/Switzerland",
    photos: 10,
    lastVisit: "2026",
    note: "Alpine trains, clear lakes, and mountain air.",
    center: [8.2, 46.8],
  },
  {
    key: "hungary",
    iso3: "HUN",
    name: "Hungary",
    href: "/Gallery/Hungary",
    photos: 1,
    lastVisit: "2024",
    note: "Historic facades and Danube river atmosphere.",
    center: [19.4, 47.1],
  },
  {
    key: "italy",
    iso3: "ITA",
    name: "Italy",
    href: "/Gallery/Italy",
    photos: 5,
    lastVisit: "2025",
    note: "Florence tones and Venice reflections.",
    center: [12.4, 42.8],
  },
  {
    key: "greece",
    iso3: "GRC",
    name: "Greece",
    href: "/Gallery/Greece",
    photos: 1,
    lastVisit: "2023",
    note: "Blue coasts and bright Mediterranean sunlight.",
    center: [23.6, 38.2],
  },
  {
    key: "spain",
    iso3: "ESP",
    name: "Spain",
    href: "/Gallery/Spain",
    photos: 3,
    lastVisit: "Visited",
    note: "Street scenes, architecture, and travel moments.",
    center: [-3.8, 40.2],
  },
  {
    key: "turkey",
    iso3: "TUR",
    name: "Turkey",
    href: "/Gallery/Turkey",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [35.2, 39.0],
  },
  {
    key: "morocco",
    iso3: "MAR",
    name: "Morocco",
    href: "/Gallery/Morocco",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [-7.1, 31.9],
  },
  {
    key: "egypt",
    iso3: "EGY",
    name: "Egypt",
    href: "/Gallery/Egypt",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [30.8, 26.7],
  },
  {
    key: "portugal",
    iso3: "PRT",
    name: "Portugal",
    href: "/Gallery/Portugal",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [-8.2, 39.6],
  },
  {
    key: "germany",
    iso3: "DEU",
    name: "Germany",
    href: "/Gallery/Germany",
    photos: 3,
    lastVisit: "Visited",
    note: "Urban walks and snapshots from daily travel.",
    center: [10.4, 51.0],
  },
  {
    key: "austria",
    iso3: "AUT",
    name: "Austria",
    href: "/Gallery/Austria",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [14.4, 47.6],
  },
  {
    key: "czech-republic",
    iso3: "CZE",
    name: "Czech Republic",
    href: "/Gallery/Czech-Republic",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [15.4, 49.8],
  },
  {
    key: "singapore",
    iso3: "SGP",
    name: "Singapore",
    href: "/Gallery/Singapore",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [103.8, 1.35],
  },
  {
    key: "liechtenstein",
    iso3: "LIE",
    name: "Liechtenstein",
    href: "/Gallery/Liechtenstein",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [9.56, 47.16],
  },
  {
    key: "vatican",
    iso3: "VAT",
    name: "Vatican",
    href: "/Gallery/Vatican",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [12.45, 41.9],
  },
  {
    key: "denmark",
    iso3: "DNK",
    name: "Denmark",
    href: "/Gallery/Denmark",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [9.5, 56.2],
  },
  {
    key: "norway",
    iso3: "NOR",
    name: "Norway",
    href: "/Gallery/Norway",
    photos: 10,
    lastVisit: "Visited",
    note: "Fjords, coastlines, and northern landscapes.",
    center: [8.5, 61.0],
  },
  {
    key: "cyprus",
    iso3: "CYP",
    name: "Cyprus",
    href: "/Gallery/Cyprus",
    photos: 7,
    lastVisit: "Visited",
    note: "Coastal views and historic town textures.",
    center: [33.0, 35.0],
  },
  {
    key: "serbia",
    iso3: "SRB",
    name: "Serbia",
    href: "/Gallery/Serbia",
    photos: 3,
    lastVisit: "Visited",
    note: "City corners and atmosphere in motion.",
    center: [20.8, 44.2],
  },
  {
    key: "poland",
    iso3: "POL",
    name: "Poland",
    href: "/Gallery/Poland",
    photos: 20,
    lastVisit: "Visited",
    note: "A larger collection across cities and landmarks.",
    center: [19.2, 52.1],
  },
  {
    key: "tunisia",
    iso3: "TUN",
    name: "Tunisia",
    href: "/Gallery/Tunisia",
    photos: 8,
    lastVisit: "Visited",
    note: "Medina details, coast, and daily life moments.",
    center: [9.4, 34.2],
  },
  {
    key: "taiwan",
    iso3: "TWN",
    name: "Taiwan",
    href: "/Gallery/Taiwan",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [121.0, 23.7],
  },
];

const LOCAL_COUNTRIES_GEOJSON_URL = withBasePath("/geojsons/visited-countries.geojson");
const LOCAL_WORLD_GEOJSON_URL = withBasePath("/geojsons/world-countries.geojson");
const CYPRUS_RELATED_NAMES = new Set(["northern cyprus", "cyprus no mans area"]);
const CHINA_RELATED_NAMES = new Set([
  "hong kong s.a.r.",
  "hong kong",
  "taiwan",
  "taiwan province of china",
]);
const PRESERVE_ALL_PARTS_KEYS = new Set(["cyprus", "greece", "norway", "italy", "china"]);

const LOCAL_MAP_STYLE = {
  version: 8,
  sources: {},
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#f8fafc",
      },
    },
  ],
};

const COMING_SOON_NOTE = "Photo collection coming soon.";

export default function TravelHistoryMap({ photoCounts }: TravelHistoryMapProps) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const hasLoadedCountriesRef = useRef(false);

  const countriesWithCounts = useMemo(
    () =>
      countries.map((country) => {
        const photos = photoCounts[country.key] ?? 0;

        return {
          ...country,
          photos,
          note:
            photos === 0
              ? COMING_SOON_NOTE
              : country.note === COMING_SOON_NOTE
                ? "Photo collection available."
                : country.note,
        };
      }),
    [photoCounts]
  );

  const countryByIso3 = useMemo(() => {
    const map = new Map<string, CountryShape>();
    countriesWithCounts.forEach((country) => map.set(country.iso3, country));
    return map;
  }, [countriesWithCounts]);

  const countryByName = useMemo(() => {
    const map = new Map<string, CountryShape>();
    countriesWithCounts.forEach((country) => map.set(country.name.toLowerCase(), country));
    return map;
  }, [countriesWithCounts]);

  const countryByKey = useMemo(() => {
    const map = new Map<string, CountryShape>();
    countriesWithCounts.forEach((country) => map.set(country.key, country));
    return map;
  }, [countriesWithCounts]);

  const visitedGeoJson = useMemo(
    () => ({
      type: "FeatureCollection",
      features: [] as Array<Record<string, unknown>>,
    }),
    []
  );

  const selected = useMemo(
    () => countriesWithCounts.find((country) => country.key === selectedKey) ?? null,
    [countriesWithCounts, selectedKey]
  );

  useEffect(() => {
    const initMap = async () => {
      if (!mapContainerRef.current || mapRef.current) return;

      const maplibregl = (await import("maplibre-gl")).default;

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: LOCAL_MAP_STYLE as never,
        center: [12, 47],
        zoom: 1.5,
        minZoom: 1,
        maxZoom: 8,
      });

      mapRef.current = map;

      map.on("load", async () => {
        map.addSource("world-countries", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          } as never,
        });

        map.addLayer({
          id: "world-fill",
          type: "fill",
          source: "world-countries",
          paint: {
            "fill-color": "#dbe4ea",
            "fill-opacity": 0.65,
          },
        });

        map.addLayer({
          id: "world-line",
          type: "line",
          source: "world-countries",
          paint: {
            "line-color": "#9aa9b5",
            "line-width": 0.7,
          },
        });

        map.addSource("visited-countries", {
          type: "geojson",
          data: visitedGeoJson as never,
        });

        map.addSource("visited-label-points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          } as never,
        });

        map.addLayer({
          id: "visited-fill",
          type: "fill",
          source: "visited-countries",
          paint: {
            "fill-color": "#34d399",
            "fill-opacity": 0.52,
          },
        });

        map.addLayer({
          id: "visited-line",
          type: "line",
          source: "visited-countries",
          paint: {
            "line-color": "#047857",
            "line-width": 1.5,
          },
        });

        map.addLayer({
          id: "visited-selected",
          type: "fill",
          source: "visited-countries",
          filter: ["==", ["get", "key"], ""],
          paint: {
            "fill-color": "#059669",
            "fill-opacity": 0.85,
          },
        });

        map.addLayer({
          id: "visited-label",
          type: "symbol",
          source: "visited-label-points",
          layout: {
            "text-field": ["get", "name"],
            "text-size": ["interpolate", ["linear"], ["zoom"], 3, 10, 6, 13],
          },
          paint: {
            "text-color": "#0f172a",
            "text-halo-color": "#ffffff",
            "text-halo-width": 1.2,
          },
        });

        map.on("mouseenter", "visited-fill", () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "visited-fill", () => {
          map.getCanvas().style.cursor = "";
        });

        map.on("click", "visited-fill", (event) => {
          const feature = event.features?.[0];
          const key = String(feature?.properties?.key || "");
          if (!key) return;
          setSelectedKey(key);
        });

        if (!hasLoadedCountriesRef.current) {
          try {
            const worldResponse = await fetch(LOCAL_WORLD_GEOJSON_URL);
            if (!worldResponse.ok) {
              throw new Error(`World GeoJSON request failed: ${worldResponse.status}`);
            }

            const worldData = await worldResponse.json();
            const worldSource = map.getSource("world-countries");
            if (worldSource && "setData" in worldSource) {
              (worldSource as unknown as { setData: (d: unknown) => void }).setData(worldData);
            }

            const response = await fetch(LOCAL_COUNTRIES_GEOJSON_URL);
            if (!response.ok) {
              throw new Error(`GeoJSON request failed: ${response.status}`);
            }

            const data = await response.json();
            const features = Array.isArray(data?.features) ? data.features : [];

            const normalizedFeatures = features
              .map((feature: Record<string, unknown>) => {
                const props = (feature.properties || {}) as Record<string, string>;
                const iso3 =
                  props["ISO3166-1-Alpha-3"] ||
                  props.ISO_A3 ||
                  props.ISO3 ||
                  props.ADM0_A3 ||
                  props.SOV_A3;
                const rawName = String(props.name || "").toLowerCase();
                const country =
                  countryByIso3.get(String(iso3)) ||
                  countryByName.get(rawName) ||
                  (props.key ? countryByKey.get(String(props.key)) : undefined);

                if (!country) return null;

                const mergedIntoChina = country.key === "taiwan";
                const displayKey = mergedIntoChina ? "china" : country.key;
                const displayName = mergedIntoChina ? "China" : country.name;

                const originalProperties =
                  feature.properties && typeof feature.properties === "object"
                    ? (feature.properties as Record<string, unknown>)
                    : {};
                return {
                  ...feature,
                  geometry: keepMainlandGeometry(
                    feature.geometry as Record<string, unknown> | undefined,
                    country.center,
                    PRESERVE_ALL_PARTS_KEYS.has(displayKey)
                  ),
                  properties: {
                    ...originalProperties,
                    key: displayKey,
                    name: displayName,
                  },
                };
              })
              .filter(Boolean);

            const worldFeatures = Array.isArray(worldData?.features) ? worldData.features : [];
            const cyprusExtraFeatures = worldFeatures
              .map((feature: Record<string, unknown>) => {
                const properties =
                  feature.properties && typeof feature.properties === "object"
                    ? (feature.properties as Record<string, unknown>)
                    : {};
                const rawName = String(properties.name || "").toLowerCase();

                if (!CYPRUS_RELATED_NAMES.has(rawName)) {
                  return null;
                }

                return {
                  ...feature,
                  geometry: keepMainlandGeometry(
                    feature.geometry as Record<string, unknown> | undefined,
                    [33.0, 35.0],
                    true
                  ),
                  properties: {
                    ...properties,
                    key: "cyprus",
                    name: "Cyprus",
                  },
                };
              })
              .filter(Boolean);

            const chinaExtraFeatures = worldFeatures
              .map((feature: Record<string, unknown>) => {
                const properties =
                  feature.properties && typeof feature.properties === "object"
                    ? (feature.properties as Record<string, unknown>)
                    : {};
                const rawName = String(properties.name || "").toLowerCase();

                if (!CHINA_RELATED_NAMES.has(rawName)) {
                  return null;
                }

                return {
                  ...feature,
                  geometry: keepMainlandGeometry(
                    feature.geometry as Record<string, unknown> | undefined,
                    [114.2, 22.3],
                    true
                  ),
                  properties: {
                    ...properties,
                    key: "china",
                    name: "China",
                  },
                };
              })
              .filter(Boolean);

            const mergedFeatures = [
              ...normalizedFeatures,
              ...cyprusExtraFeatures,
              ...chinaExtraFeatures,
            ];

            const uniqueKeys = new Set(
              mergedFeatures
                .map((feature) => {
                  const current = feature as Record<string, unknown>;
                  const properties =
                    current.properties && typeof current.properties === "object"
                      ? (current.properties as Record<string, unknown>)
                      : {};
                  return String(properties.key || "");
                })
                .filter((key) => key !== "")
            );

            const labelPointFeatures = Array.from(uniqueKeys)
              .map((key) => {
                const country = countryByKey.get(key);
                if (!country) return null;

                return {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: country.center,
                  },
                  properties: {
                    key: country.key,
                    name: country.name,
                  },
                };
              })
              .filter(Boolean);

            const source = map.getSource("visited-countries");
            if (source && "setData" in source) {
              (source as unknown as { setData: (d: unknown) => void }).setData({
                type: "FeatureCollection",
                features: mergedFeatures,
              });
            }

            const labelSource = map.getSource("visited-label-points");
            if (labelSource && "setData" in labelSource) {
              (labelSource as unknown as { setData: (d: unknown) => void }).setData({
                type: "FeatureCollection",
                features: labelPointFeatures,
              });
            }

            hasLoadedCountriesRef.current = true;
          } catch (error) {
            setLoadError("Unable to load precise country boundaries right now.");
            console.error(error);
          }
        }
      });
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [countryByIso3, countryByKey, countryByName, visitedGeoJson]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.getLayer("visited-selected")) return;

    map.setFilter("visited-selected", ["==", ["get", "key"], selectedKey || ""]);

    if (selected) {
      map.flyTo({
        center: selected.center,
        zoom: 5.2,
        duration: 700,
      });
    }
  }, [selectedKey, selected]);

  const resetMap = () => {
    setSelectedKey(null);
    const map = mapRef.current;
    if (!map) return;
    map.flyTo({ center: [12, 47], zoom: 1.9, duration: 700 });
  };

  return (
    <section className="mb-8 rounded-3xl border border-emerald-100 bg-white/85 p-5 shadow-sm md:mb-10 md:p-7">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-cyan-50 via-emerald-50 to-amber-50 p-4">
          <h2 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">
            My Travel History
          </h2>
          <p className="mb-4 text-sm text-slate-600">
            Click boundaries to explore country details and open the next-level photo gallery.
          </p>

          <div
            ref={mapContainerRef}
            className="h-[340px] w-full overflow-hidden rounded-xl border border-emerald-100 bg-white/60"
            aria-label="Interactive travel map"
          />
          <p className="mt-2 text-xs text-slate-500">
            The political administrative boundaries are provided by the open database geoBoundaries under the CC BY 4.0 license. The use of the boundary data does not represent any political stance of the author. Inspired By{" "}
            <a
              href="https://wenyuliu.ch/journey/travel-history"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
            >
              this page
            </a>
            .
          </p>
          {loadError ? (
            <p className="mt-2 text-xs text-rose-600">{loadError}</p>
          ) : null}
        </div>

        <aside className="rounded-2xl border border-emerald-100 bg-white p-5">
          {selected ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                Selected Country
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{selected.name}</h3>

              <dl className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-slate-500">Photos</dt>
                  <dd className="mt-1 font-semibold text-slate-900">{selected.photos}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-slate-500">Last Updated</dt>
                  <dd className="mt-1 font-semibold text-slate-900">{selected.lastVisit}</dd>
                </div>
              </dl>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">{selected.note}</p>

              <div className="mt-5 flex gap-2">
                <Link
                  href={selected.href}
                  className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Open Country Gallery
                </Link>
                <button
                  type="button"
                  onClick={resetMap}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Back to World View
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                Country Info
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">World View</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Pick a highlighted country on the map. The info card will update with visit details and a direct link to that country page.
              </p>
              <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
                {countriesWithCounts.length} countries and regions highlighted in this travel collection.
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
