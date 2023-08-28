// // chat-sdk.js
// let clickCount = 0;

// export function createChatBubble() {
//     const chatBubble = document.createElement("div");

//     // Add icon using Font Awesome
//     const icon = document.createElement("i");
//     chatBubble.appendChild(icon);

//     // Create a tooltip element
//     const tooltip = document.createElement("div");
//     tooltip.textContent = "Click to open chat";
    
//     // Append the tooltip to the chat bubble
//     chatBubble.appendChild(tooltip);

//     // Event listener to handle interactions
//     chatBubble.addEventListener("click", () => {
//         toggleChatWindow();
//         if (clickCount > 0) {
//             chatBubble.classList.toggle("open-chat");
//         }
//         clickCount++;
//     });

//     return chatBubble;
// }

// export function toggleChatWindow() {
//     const chatWindow = document.getElementById("chat-window");
//     chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
// }

// export function sendMessage() {
//     console.log("sendMessage function called"); 
//     const chatInput = document.querySelector(".chat-input");
//     const messageText = chatInput.value;

//     if (messageText.trim() !== "") {
//         const chatWindowContent = document.getElementById("chat-window-content");
//         const newMessage = document.createElement("div");
//         newMessage.textContent = messageText;

//         chatWindowContent.appendChild(newMessage);
//         chatInput.value = ""; // Clear the input field
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const chatBubbleElement = createChatBubble();
//     document.body.appendChild(chatBubbleElement);
// });

// const sendButton = document.querySelector(".send-button");
// sendButton.addEventListener("click", () => {
//     sendMessage();
// });
