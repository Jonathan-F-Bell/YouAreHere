$(window).on("scroll touchmove", function () {
    $('#header').toggleClass('shrink', $(document).scrollTop() > 0);
    $('#circle').toggleClass('shrink', $(document).scrollTop() > 0);
    $('#spacer').toggleClass('shrink', $(document).scrollTop() > 0);
});
