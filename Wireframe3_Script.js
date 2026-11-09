let messageCount = 4;
let pendingMessage = "";
let matchIndex = 0;

const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const messageList = document.getElementById("message-list");
const intprompt = document.getElementById("custom-intprompt");
const intpromptEdit = document.getElementById("intprompt-edit");
const intpromptConfirm = document.getElementById("intprompt-confirm");
const optionsBtn = document.getElementById("meatball-menu");
const dropdownMenu = document.getElementById("dropdown-menu");
const switchMatchBtn = document.getElementById("switch-match-btn")
const profileName = document.getElementById("match-name")
const profilePfp = document.getElementById("match-pfp")
const profiles = [
    {
        name: "Karen",
        image: "https://images.unsplash.com/photo-1636548646163-a14de6514ce0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        name: "Alex",
        image: "https://images.unsplash.com/photo-1761821676234-c3c3b643b5ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }
]

optionsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (thing) => {
    if (!dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.add("hidden");
    }
})


function SwitchMatch(click) {
    /*click.stopPropagation();*/

    matchIndex = (matchIndex + 1) % profiles.length

    const nextProfile = profiles[matchIndex]
    profileName.textContent = nextProfile.name;
    profilePfp.src = nextProfile.image;

}

switchMatchBtn.addEventListener("click", SwitchMatch);


sendBtn.addEventListener("click", handleUserSend);

function appendMatchTimestamp() {
    const matchedTime = new Date();
    matchedTime.setMinutes(matchedTime.getMinutes() - 63);
    const dateStr = matchedTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric'});
    const timeStr = matchedTime.toLocaleDateString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true});
    console.log(`Matched on ${dateStr} at ${timeStr}`);
    const timestampDiv = document.createElement("div");
    timestampDiv.classList.add("match-timestamp");
    timestampDiv.textContent = `Matched on ${dateStr} at ${timeStr}`;
    const messageList = document.getElementById("message-list");
    messageList.insertBefore(timestampDiv, messageList.firstChild);
}
appendMatchTimestamp();

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