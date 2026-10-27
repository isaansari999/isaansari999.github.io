let messageCount = 4;
let pendingMessage = "";

const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const messageList = document.getElementById("message-list");
const intprompt = document.getElementById("custom-intprompt");
const intpromptEdit = document.getElementById("intprompt-edit");
const intpromptConfirm = document.getElementById("intprompt-confirm");


sendBtn.addEventListener("click", handleUserSend);


inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserSend();
});

function handleUserSend() {
    const text = inputField.value.trim();
    if (!text) return;

    messageCount++;
    pendingMessage = text;


    if (messageCount === 5) {
        intprompt.classList.remove("hidden");
        return;
    }

    dispatchMessage(text);
}

function dispatchMessage(text) {
    
    appendMessage(text, "user-msg");
    inputField.value = "";

    
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
    messageList.scrollTop = messageList.scrollHeight; 
}


intpromptEdit.addEventListener("click", () => {
    intprompt.classList.add("hidden"); 
});

intpromptConfirm.addEventListener("click", () => {
    intprompt.classList.add("hidden");
    dispatchMessage(pendingMessage); 
});