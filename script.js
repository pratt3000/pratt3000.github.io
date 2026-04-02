function showSection(sectionId) {
    $('.content-section').hide();
    $('.tab-button').removeClass('active');
    $('#' + sectionId).show();
    $('button[onclick="showSection(\'' + sectionId + '\')"]').addClass('active');
    $('#mobile-nav-select').val(sectionId);

    var anchor = document.getElementById('menu-anchor');
    if (anchor) {
        var targetTop = anchor.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY > targetTop) {
            $('html, body').animate({
                scrollTop: targetTop
            }, 800);
        }
    }
}

$(document).ready(function () {
    $('.content-section').hide();
    $('#timeline').show();
    $('.tab-button').first().addClass('active');
});

$(function () {
    $("#timeline").load("timeline.html");
    $("#projects").load("projects.html");
    $("#work-experience").load("workex.html");
    $("#education").load("education.html");
    $("#misc").load("misc.html");
});

$(window).on('scroll', function () {
    var menu = document.querySelector('.menu');
    if (menu && menu.getBoundingClientRect().top <= 1) {
        menu.classList.add('is-sticky');
    } else {
        menu.classList.remove('is-sticky');
    }
});