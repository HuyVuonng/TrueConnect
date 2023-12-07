export const sliderSettings = {
  infinite: true,
  speed: 1000,
  autoplaySpeed: 6000,
  slidesToShow: 6,
  slidesToScroll: 2,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 6000,
        // autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 6000,
        // autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 6000,
        // autoplay: true,
      },
    },
  ],
};
