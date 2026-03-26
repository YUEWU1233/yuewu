import CountryWall from "../CountryWall";

export default function BelgiumPage() {
  return (
    <CountryWall
      title="Belgium"
      images={[
        { src: "/gallery/belgium/Belgium.jpg", alt: "Belgium" },
        { src: "/gallery/belgium/Belgium1.jpg", alt: "Belgium" },
        { src: "/gallery/belgium/Belgium2.jpg", alt: "Belgium" },
      ]}
    />
  );
}
