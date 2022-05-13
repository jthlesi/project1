$(function () {
    $('.bimg:nth-of-type(1)').hover(function () {
        $("#timg").show();
        $("#timg1").hide();
        $("#timg2").hide();
        $("#timg3").hide();
        $("#timg4").hide();
    });
    $('.bimg:nth-of-type(2)').hover(function () {
        $("#timg").hide();
        $("#timg1").show();
        $("#timg2").hide();
        $("#timg3").hide();
        $("#timg4").hide();
    });
    $('.bimg:nth-of-type(3)').hover(function () {
        $("#timg").hide();
        $("#timg1").hide();
        $("#timg2").show();
        $("#timg3").hide();
        $("#timg4").hide();
    });
    $('.bimg:nth-of-type(4)').hover(function () {
        $("#timg").hide();
        $("#timg1").hide();
        $("#timg2").hide();
        $("#timg3").show();
        $("#timg4").hide();
    });
    $('.bimg:nth-of-type(5)').hover(function () {
        $("#timg").hide();
        $("#timg1").hide();
        $("#timg2").hide();
        $("#timg3").hide();
        $("#timg4").show();
    });
})