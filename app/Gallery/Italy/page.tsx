import CountryWall from "../CountryWall";

export default function ItalyPage() {
  return (
    <CountryWall
      title="Italy"
      images={[
        { src: "/gallery/italy/Florence.jpg", alt: "Italy" },
        { src: "/gallery/italy/Venise.jpg", alt: "Venice, Italy" },
      ]}
    />
  );
}
