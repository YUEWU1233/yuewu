import CountryWall from "../CountryWall";

export default function FrancePage() {
  return (
    <CountryWall
      title="France"
      images={[
        { src: "/gallery/france/France.jpg", alt: "France" },
        { src: "/gallery/france/France1.jpg", alt: "France" },
        { src: "/gallery/france/Paris.jpg", alt: "Paris, France" },
        { src: "/gallery/france/Paris1.jpg", alt: "Paris, France" },
        { src: "/gallery/france/Paris2.jpg", alt: "Paris, France" },
      ]}
    />
  );
}
