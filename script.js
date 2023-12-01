function showSection(sectionId) {
    $('.content-section').hide();
    $('.tab-button').removeClass('active');
    $('#' + sectionId).show();
    $('button[onclick="showSection(\'' + sectionId + '\')"]').addClass('active');
}

$(document).ready(function(){
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