import CarouselBanner from "./CarouselBanner";
import StaticBanner from "./StaticBanner";

type Slide = {
    image: string;
    link: string;
    text: string;
};

type BannerWrapperProps = {
    bannerType: "carousel" | "static"; // Tipo de banner (puede venir de WordPress)
    carouselSlides?: Slide[]; // Solo si es un carrusel
    staticImage?: Slide; // Solo si es un banner estático
};

const BannerWrapper = ({ bannerType, carouselSlides, staticImage }: BannerWrapperProps) => {
    return bannerType === "carousel" ? (
        <CarouselBanner slides={carouselSlides || []} />
    ) : (
        <StaticBanner slide={staticImage || { image: "", link: "", text: "" }} />
    );
};

export default BannerWrapper;
