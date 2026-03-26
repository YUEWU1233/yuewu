import CountryWall from "../CountryWall";

export default function SwitzerlandPage() {
  return (
    <CountryWall
      title="Switzerland"
      images={[
        { src: "/gallery/switzerland/Switzerland.jpg", alt: "Switzerland" },
        { src: "/gallery/switzerland/Switzerland1.jpg", alt: "Switzerland" },
        { src: "/gallery/switzerland/Switzerland2.jpg", alt: "Switzerland" },
        { src: "/gallery/switzerland/Switzerland3.jpg", alt: "Switzerland" },
        { src: "/gallery/switzerland/Bern1.jpg", alt: "Bern, Switzerland" },
      ]}
    />
  );
}
