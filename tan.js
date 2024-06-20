// Function to send user message and get bot response
function sendMessage() {
    // Get user input
    var userInput = document.getElementById("user-input").value.trim();

    if (userInput === "") {
        return; // If input is empty, do nothing
    }

    // Clear input field
    document.getElementById("user-input").value = "";

    // Get chat box element
    var chatBox = document.getElementById("chat-box");

    // Create user message element
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = userInput;

    // Append user message to chat box
    chatBox.appendChild(userMessageElement);

    // Get bot response based on user input (dummy responses for demo)
    var botResponse = getBotResponse(userInput);

    // Create bot message element
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("message");
    botMessageElement.classList.add("bot-message");
    botMessageElement.textContent = botResponse;

    // Append bot message to chat box after a short delay for a more natural feel
    setTimeout(function() {
        chatBox.appendChild(botMessageElement);
        // Scroll chat box to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Adjust delay as needed
}

// Function to get bot response based on user input (dummy responses)
function getBotResponse(userInput) {
    var responses = {
        "Farah": "أنتِ تضيئين يومي كلما رأيتكِ، فأنتِ الفرح الذي لا ينتهي.",
        "farah": "أنتِ تضيئين يومي كلما رأيتكِ، فأنتِ الفرح الذي لا ينتهي.",
        "hassna": " كلمتكِ تنمو في قلبي كزهرة نادرة، تزيّن كل يوم من حياتي.",
        "Hassna": " كلمتكِ تنمو في قلبي كزهرة نادرة، تزيّن كل يوم من حياتي.",
        // Add more responses as needed
    };

    // Check if user input exists in responses, otherwise default response
    return responses[userInput] || "آسف، لم أفهم سؤالك. يمكنك المحاولة مرة أخرى؟";
}

// Allow Enter key to send message
document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
