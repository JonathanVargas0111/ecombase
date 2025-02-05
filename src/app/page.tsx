
import BannerWrapper from "@/components/Shared/banners/BannerWrapperProps";

import { bannerData } from "@/data/dataBasic";
import { log } from "console";

export default function Home() {


  const carouselSlides = bannerData.carousel.images;
  console.log(carouselSlides);


  const staticImage = bannerData.static.image;

  return (
    <div className="flex flex-col gap-32 items-center w-full">

      <div className="w-full">
        {/* Usando el carrusel */}
        <BannerWrapper bannerType="carousel" carouselSlides={carouselSlides} />

        {/* Usando el banner estático */}
        {/* <BannerWrapper bannerType="static" staticImage={staticImage} /> */}

      </div>
    </div>

  );
}
