// jQuery code
$(document).ready(function () {
    // Our New Products
    $(".nav-link[href='#accessories-cards']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#accessories-cards").offset().top
        }, 800);
    });

    // laptop
    $(".nav-link[href='#card-laptop']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#card-laptop").offset().top
        }, 800);
    });

    //Desktop computer
    $(".nav-link[href='#card-Desktop']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#card-Desktop").offset().top
        }, 800);
    });


    //IT-component
    $(".nav-link[href='#IT-component']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#IT-component").offset().top
        }, 800);
    });

    //server
    $(".nav-link[href='#card-server']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#card-server").offset().top
        }, 800);
    });
    //#card-peripheral
    $(".nav-link[href='#card-peripheral']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#card-peripheral").offset().top
        }, 800);
    });
});
 




