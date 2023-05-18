$(document).ready(function() {
    // Initialize the chatbot when the page loads
    $('<div class="message bot-message"><i class="fas fa-robot"></i> Bot: Hello! You are chatting with a BOT.</div>').appendTo('#chatbox');

    // Handle the Send button being clicked
    $('#send').click(function(event) {
        event.preventDefault();  // Prevent the form from being submitted
        var user_input = $('#input').val();  // Get the user input

        // Check if the user has entered something
        if (user_input.trim() === '') {
            // The user didn't enter anything
            return;
        }

        // Add the user's message to the chatbox
        $('<div class="message user-message"><i class="fas fa-user"></i> User: ' + user_input + '</div>').appendTo('#chatbox');

        // Clear the input field
        $('#input').val('');

        // Show the bot is typing
        var botTyping = $('<div class="message bot-message bot-typing"><i class="fas fa-robot"></i> Bot is thinking...</div>').appendTo('#chatbox');

        // Send the user's message to the Flask backend
        $.get('/get', {msg: user_input})
            .done(function(data) {
                // Remove the bot is typing message
                botTyping.remove();

                // Add the bot's response to the chatbox
                $('<div class="message bot-message"><i class="fas fa-robot"></i> Bot: ' + data + '</div>').appendTo('#chatbox');

                // Scroll to the bottom of the chatbox
                $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
            })
            .fail(function() {
                // Remove the bot is typing message
                botTyping.remove();

                // Handle error here
                $('<div class="message bot-message"><i class="fas fa-robot"></i> Bot: I\'m sorry, there was an error processing your request.</div>').appendTo('#chatbox');
            });
    });
});
