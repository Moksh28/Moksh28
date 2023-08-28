<!-- ChatWindow.svelte -->
<script>
  let messages = [];
  let messageText = '';
  let spaceKeyPressed = false;

  function sendMessage() {
    if (messageText.trim() !== '') {
      messages = [...messages, messageText];
      messageText = ''; // Clear the input field
      spaceKeyPressed = false; // Reset the flag
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === ' ') {
      if (!messageText.trim()) {
        event.preventDefault(); // Prevent chat window from closing if input is empty
        spaceKeyPressed = true;
      }
    }
  }
</script>

<div id="chat-window" class="fixed bottom-32 right-10 p-4 bg-white border-t border-r shadow-md">
  <div class="chat-content">
    {#each messages as message}
      <div class="p-2 border rounded mb-2" style="color: black;">{{ message }}</div>
    {/each}
  </div>
  <div class="flex">
    <input
      type="text"
      class="chat-input flex-1 p-2 border rounded-l"
      style="color: black;"
      placeholder="Type your message"
      on:click|stopPropagation
      bind:value={messageText}
      on:keydown={handleKeyDown}
    />
    <button class="send-button bg-blue-500 text-white p-2 rounded-r" on:click|stopPropagation={sendMessage}>Send</button>
  </div>
</div>
