function showSection(sectionId) {
    // Hide all sections
    $('.content-section').hide();

    // Remove 'active' class from all buttons
    $('.tab-button').removeClass('active');

    // Show the specific section
    $('#' + sectionId).show();

    // Add 'active' class to the button that's been clicked
    $('button[onclick="showSection(\'' + sectionId + '\')"]').addClass('active');
}

// A jQuery ready function to set the initial state of your page
$(document).ready(function(){
    // Assuming you want the first tab content to be displayed initially
    $('.content-section').hide(); // Hide all content sections
    $('#timeline').show(); // Show the first tab content
    $('.tab-button').first().addClass('active'); // Set the first tab button as active
});


$(function () {
    $("#timeline").load("timeline.html");
    $("#projects").load("projects.html");
    $("#work-experience").load("workex.html");
    $("#education").load("education.html");
});