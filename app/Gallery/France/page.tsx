import CountryWall from "../CountryWall";

export default function FrancePage() {
  return (
    <CountryWall
      title="France"
      images={[
        { src: "/France.jpg", alt: "France" },
        { src: "/France1.jpg", alt: "France" },
        { src: "/Paris.jpg", alt: "Paris, France" },
        { src: "/Paris1.jpg", alt: "Paris, France" },
        { src: "/Paris2.jpg", alt: "Paris, France" },
      ]}
    />
  );
}
