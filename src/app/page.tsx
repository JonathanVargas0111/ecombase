
import BannerWrapper from "@/components/Shared/Banners/BannerWrapperProps";
import { SectionCategories } from "@/components/Shared/SectionCategories/SectionCategories";

import { bannerData } from "@/data/dataBasic";
import { categoriesData } from "@/data/dataBasic";


export default function Home() {


  const carouselSlides = bannerData.carousel.images;

  const staticImage = bannerData.static.image;

  return (
    <div className="flex flex-col gap-32 items-center w-full">

      <div className="w-full">
        {/* Usando el carrusel */}
        <BannerWrapper bannerType="carousel" carouselSlides={carouselSlides} />

        {/* Usando el banner estático */}
        {/* <BannerWrapper bannerType="static" staticImage={staticImage} /> */}

        <SectionCategories categoriesData={categoriesData} />

      </div>
    </div>
  );
}
