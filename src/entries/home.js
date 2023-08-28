import "../scss/home.scss";

import $ from "jquery";
import "slick-carousel";

$("#home-grid")
    .find("section")
    .click(function () {
        window.location.href = jQuery(this).data("href");
    });

const gallery = $("#gallery");
const gallery_count = gallery.find(".media").length;

gallery.slick({
    slidesToShow: gallery_count,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
            },
        },
    ],
});

const products_slider = $(".top-products-container");
products_slider.slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: "20px",
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: "20px",
                slidesToShow: 2,
            },
        },
    ],
});

$(".slick-prev").html(
    '<img src="/src/assets/left-arrow.svg" alt="arrow-left">'
);

$(".slick-next").html(
    '<img src="/src/assets/right-arrow.svg" alt="arrow-right">'
);
