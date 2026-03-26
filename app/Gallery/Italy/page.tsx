import CountryWall from "../CountryWall";

export default function ItalyPage() {
  return (
    <CountryWall
      title="Italy"
      images={[
        { src: "/Florence.jpg", alt: "Italy" },
        { src: "/Venise.jpg", alt: "Venice, Italy" },
      ]}
    />
  );
}
