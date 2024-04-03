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


document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const overlay = document.getElementById('overlay');
    let sanityOn = true;

    // Load messages from local storage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Function to save messages to local storage
    const saveMessages = () => {
        localStorage.setItem('messages', JSON.stringify(messages));
    };

    // Render existing messages
    const renderMessages = () => {
        // Clear previous messages
        overlay.innerHTML = '';
        messages.forEach(message => {
            const newText = document.createElement('div');
            newText.textContent = message.text;
            newText.classList.add('saved-text');
            newText.style.position = 'absolute';
            newText.style.left = message.x + 'px';
            newText.style.top = message.y + 'px';
            overlay.appendChild(newText); // Append the message to the overlay
        });
    };

    toggle.addEventListener('change', function () {
        sanityOn = toggle.checked;
        if (sanityOn) {
            overlay.classList.add('hidden');
        } else {
            renderMessages();
            overlay.classList.remove('hidden');
        }
    });

    overlay.addEventListener('click', function (event) {
        if (!sanityOn) {
            const textArea = document.createElement('div');
            textArea.classList.add('message-textarea');
            textArea.style.position = 'absolute';
            textArea.style.left = (event.clientX + window.scrollX) + 'px';
            textArea.style.top = (event.clientY + window.scrollY) + 'px';
            textArea.contentEditable = true;
            textArea.focus();
            overlay.appendChild(textArea);
            
            textArea.addEventListener('blur', function () {
                const text = textArea.textContent.trim();
                if (text !== '') {
                    const newMessage = {
                        text: text,
                        x: parseInt(textArea.style.left),
                        y: parseInt(textArea.style.top)
                    };
                    messages.push(newMessage);
                    saveMessages();
                    renderMessages();
                }
            });
        }
    });
});
