import CountryWall from "../CountryWall";

export default function SwitzerlandPage() {
  return (
    <CountryWall
      title="Switzerland"
      images={[
        { src: "/Switzerland.jpg", alt: "Switzerland" },
        { src: "/Switzerland1.jpg", alt: "Switzerland" },
        { src: "/Switzerland2.jpg", alt: "Switzerland" },
        { src: "/Switzerland3.jpg", alt: "Switzerland" },
        { src: "/Bern1.jpg", alt: "Bern, Switzerland" },
      ]}
    />
  );
}
