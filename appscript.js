let messageCount = 0;
let pendingMessage = "";

const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const messageList = document.getElementById("message-list");
const intprompt = document.getElementById("custom-intprompt");
const intpromptEdit = document.getElementById("intprompt-edit");
const intpromptConfirm = document.getElementById("intprompt-confirm");

// Send on button click
sendBtn.addEventListener("click", handleUserSend);

// Send on 'Enter' key
inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserSend();
});

function handleUserSend() {
    const text = inputField.value.trim();
    if (!text) return;

    messageCount++;
    pendingMessage = text;

    // Trigger custom prompt on the 5th message
    if (messageCount === 5) {
        intprompt.classList.remove("hidden");
        return;
    }

    dispatchMessage(text);
}

function dispatchMessage(text) {
    // 1. Add User Message
    appendMessage(text, "user-msg");
    inputField.value = "";

    // 2. Simulate match response after a brief delay
    setTimeout(() => {
        const replies = [
            "This is where our script would go",
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        appendMessage(randomReply, "match-msg");
    }, 1000);
}

function appendMessage(text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", className);
    msgDiv.textContent = text;
    messageList.appendChild(msgDiv);
    messageList.scrollTop = messageList.scrollHeight; // Auto-scroll to bottom
}

// Intervention Prompt Actions
intpromptEdit.addEventListener("click", () => {
    intprompt.classList.add("hidden"); // Close intervention Prompt, let user keep editing text
});

intpromptConfirm.addEventListener("click", () => {
    intprompt.classList.add("hidden");
    dispatchMessage(pendingMessage); // Send the message anyway
});