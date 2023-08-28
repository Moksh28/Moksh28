// chatSdkConfig.js

// Example customization
ChatSDK.config.bubbleIcon = 'fa-envelope';
ChatSDK.config.bubbleTooltip = 'Start a conversation';

// Initialize the SDK after customization
document.addEventListener("DOMContentLoaded", () => {
    ChatSDK.init();
});
