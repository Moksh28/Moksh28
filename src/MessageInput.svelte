<script>
  let message = '';
  
  function sendMessage() {
      if (message.trim() !== '') {
          // Logic to send the message
          message = '';
      }
  }
</script>

<div>
  <input type="text" class="p-2 border rounded-lg w-full" placeholder="Type your message..." bind:value={message} on:keydown={event => event.key === 'Enter' && sendMessage()} />
</div>
