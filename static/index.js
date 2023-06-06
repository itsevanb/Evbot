$(document).ready(function() {
    // Initialize the chatbot when the page loads
    $('<div class="message bot-message"><i class="fas fa-robot"></i> Bot: Hello! You are chatting with a BOT.<span class="timestamp"></span></div>').appendTo('#chatbox');

    // Handle the Send button being clicked
    $('#send').click(sendMessage);

    // Handle the Enter key in the text input
    $('#input').on('keypress', function(e) {
        if (e.which == 13) {  // 13 is the code for the Enter key
            e.preventDefault();  // Prevent the default action (form submission)
            sendMessage();  // Send the message
        }
    });

    function sendMessage() {
        var user_input = $('#input').val();  // Get the user input

        // Check if the user has entered something
        if (user_input.trim() === '') {
            // The user didn't enter anything
            return;
        }

        var timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true});  // Get the current time

        // Add the user's message to the chatbox
        $('<div class="message user-message"><i class="fas fa-user"></i> User: ' + user_input + '<span class="timestamp">' + timestamp + '</span></div>').appendTo('#chatbox');

        // Clear the input field
        $('#input').val('');

        // Show the bot is typing
        var botTyping = $('<div class="message bot-message bot-typing"><i class="fas fa-robot"></i> Bot is thinking...<span class="timestamp">' + timestamp + '</span></div>').appendTo('#chatbox');

        // Send the user's message to the Flask backend
        $.get('/get', {msg: user_input})
            .done(function(data) {
                var timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true});  // Get the current time

                // Add the bot's response to the chatbox
                $('<div class="message bot-message"><i class="fas fa-robot"></i> Bot: ' + data + '<span class="timestamp">' + timestamp + '</span></div>').appendTo('#chatbox');

                // Scroll to the bottom of the chatbox
                $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
            })
            .fail(function() {
                // Handle error here
                $('<div class="message bot-message"><i class="fas fa-robot"></i> Bot: Oops, I seem to be having trouble understanding. Could you try rephrasing your question?<span class="timestamp">' + timestamp + '</span></div>').appendTo('#chatbox');
            })
            .always(function() {
                // Remove the bot is typing message
                botTyping.remove();
            });
    }
});