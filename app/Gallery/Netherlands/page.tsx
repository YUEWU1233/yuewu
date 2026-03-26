import CountryWall from "../CountryWall";

export default function NetherlandsPage() {
  return (
    <CountryWall
      title="Netherlands"
      images={[
        { src: "/Netherlands.jpg", alt: "Netherlands" },
        { src: "/Netherlands1.jpg", alt: "Netherlands" },
        { src: "/Netherlands2.jpg", alt: "Netherlands" },
        { src: "/Netherlands3.jpg", alt: "Netherlands" },
        { src: "/Netherlands4.jpg", alt: "Netherlands" },
        { src: "/Netherlands5.jpg", alt: "Netherlands" },
      ]}
    />
  );
}
