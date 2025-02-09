
import { SectionCategories, SectionPopularProducts } from "@/components";
import {BannerWrapper} from "@/components";

import { bannerData } from "@/seed/seed";
import { popularProducts } from "@/seed/seed";
import { popularCategories } from "@/seed/seed";


export default function Home() {


  const carouselSlides = bannerData.carousel.images;

  /* const staticImage = bannerData.static.image; */

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
