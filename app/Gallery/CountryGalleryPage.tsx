import ComingSoonCountry from "./ComingSoonCountry";
import CountryWall from "./CountryWall";
import { getCountryGalleryImages } from "../lib/gallery";

type CountryGalleryPageProps = {
  countryKey: string;
  countryName: string;
};

export default function CountryGalleryPage({
  countryKey,
  countryName,
}: CountryGalleryPageProps) {
  const images = getCountryGalleryImages(countryKey, countryName);

  if (images.length === 0) {
    return <ComingSoonCountry countryName={countryName} />;
  }

  return <CountryWall title={countryName} images={images} />;
}
