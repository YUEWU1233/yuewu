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
    photos: 5,
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
    photos: 2,
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
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
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
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
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
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [8.5, 61.0],
  },
  {
    key: "cyprus",
    iso3: "CYP",
    name: "Cyprus",
    href: "/Gallery/Cyprus",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [33.0, 35.0],
  },
  {
    key: "serbia",
    iso3: "SRB",
    name: "Serbia",
    href: "/Gallery/Serbia",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [20.8, 44.2],
  },
  {
    key: "poland",
    iso3: "POL",
    name: "Poland",
    href: "/Gallery/Poland",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
    center: [19.2, 52.1],
  },
  {
    key: "tunisia",
    iso3: "TUN",
    name: "Tunisia",
    href: "/Gallery/Tunisia",
    photos: 0,
    lastVisit: "Visited",
    note: "Photo collection coming soon.",
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

export default function TravelHistoryMap() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const hasLoadedCountriesRef = useRef(false);

  const countryByIso3 = useMemo(() => {
    const map = new Map<string, CountryShape>();
    countries.forEach((country) => map.set(country.iso3, country));
    return map;
  }, []);

  const countryByName = useMemo(() => {
    const map = new Map<string, CountryShape>();
    countries.forEach((country) => map.set(country.name.toLowerCase(), country));
    return map;
  }, []);

  const visitedGeoJson = useMemo(
    () => ({
      type: "FeatureCollection",
      features: [] as Array<Record<string, unknown>>,
    }),
    []
  );

  const selected = useMemo(
    () => countries.find((country) => country.key === selectedKey) ?? null,
    [selectedKey]
  );

  useEffect(() => {
    const initMap = async () => {
      if (!mapContainerRef.current || mapRef.current) return;

      const maplibregl = (await import("maplibre-gl")).default;

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: LOCAL_MAP_STYLE as never,
        center: [12, 47],
        zoom: 3.2,
        minZoom: 2.5,
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
          source: "visited-countries",
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
                  (props.key ? countries.find((item) => item.key === props.key) : undefined);

                if (!country) return null;

                const originalProperties =
                  feature.properties && typeof feature.properties === "object"
                    ? (feature.properties as Record<string, unknown>)
                    : {};
                return {
                  ...feature,
                  properties: {
                    ...originalProperties,
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
                features: normalizedFeatures,
              });
              hasLoadedCountriesRef.current = true;
            }
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
  }, [countryByIso3, countryByName, visitedGeoJson]);

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
    map.flyTo({ center: [12, 47], zoom: 3.2, duration: 700 });
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
            Boundary style: local GeoJSON with offline-first rendering.
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
                {countries.length} countries and regions highlighted in this travel collection.
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
