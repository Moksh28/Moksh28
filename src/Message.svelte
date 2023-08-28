<script>
  export let message;
</script>

<div class="bg-gray-100 p-2 m-1 rounded">
  {#if message.type === 'system'}
    <p class="text-gray-600">{message.text}</p>
  {:else}
    <p class="text-blue-500">{message.text}</p>
  {/if}
</div>
