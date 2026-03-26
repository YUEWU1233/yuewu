import CountryWall from "../CountryWall";

export default function BelgiumPage() {
  return (
    <CountryWall
      title="Belgium"
      images={[
        { src: "/Belgium.jpg", alt: "Belgium" },
        { src: "/Belgium1.jpg", alt: "Belgium" },
        { src: "/Belgium2.jpg", alt: "Belgium" },
      ]}
    />
  );
}
