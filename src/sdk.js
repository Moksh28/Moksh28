// sdk.js
import App from './App.svelte';
//import { createChatBubble } from './chat-sdk.js'; // Assuming you're using this function to create the chat bubble

const app = new App({
    target: document.body,
});

// Create and append the chat bubble
// const chatBubbleElement = createChatBubble();
// document.body.appendChild(chatBubbleElement);

export default app;
