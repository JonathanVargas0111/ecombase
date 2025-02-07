
import BannerWrapper from "@/components/Shared/Banners/BannerWrapperProps";
import { SectionCategories } from "@/components/Shared/SectionCategories/SectionCategories";
import { SectionPopularProducts } from "@/components/Shared/SectionPopularProducts";

import { bannerData } from "@/data/dataBasic";
import { categoriesData } from "@/data/dataBasic";
import { popularProducts } from "@/data/dataBasic";
import { popularCategories } from "@/data/dataBasic";
import { products } from "@/data/dataBasic";


export default function Home() {


  const carouselSlides = bannerData.carousel.images;

  const staticImage = bannerData.static.image;

  return (
    <div className="flex flex-col items-center w-full">

      <div className="w-full">
        {/* Usando el carrusel */}
        <BannerWrapper bannerType="carousel" carouselSlides={carouselSlides} />

        {/* Usando el banner estático */}
        {/* <BannerWrapper bannerType="static" staticImage={staticImage} /> */}
      </div>

      <SectionCategories categoriesData={popularCategories} />

      <SectionPopularProducts products={popularProducts} />

    </div>
  );
}
