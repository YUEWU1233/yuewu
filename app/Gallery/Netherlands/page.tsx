import CountryWall from "../CountryWall";

export default function NetherlandsPage() {
  return (
    <CountryWall
      title="Netherlands"
      images={[
        { src: "/gallery/netherlands/Netherlands.jpg", alt: "Netherlands" },
        { src: "/gallery/netherlands/Netherlands1.jpg", alt: "Netherlands" },
        { src: "/gallery/netherlands/Netherlands2.jpg", alt: "Netherlands" },
        { src: "/gallery/netherlands/Netherlands3.jpg", alt: "Netherlands" },
        { src: "/gallery/netherlands/Netherlands4.jpg", alt: "Netherlands" },
        { src: "/gallery/netherlands/Netherlands5.jpg", alt: "Netherlands" },
      ]}
    />
  );
}
