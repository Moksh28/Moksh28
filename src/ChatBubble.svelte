<script>
  import { createEventDispatcher } from 'svelte';
  import { messageStore } from './messageStore.js';

  let isOpen = false;
  const dispatch = createEventDispatcher();

  function toggleChatWindow() {
  isOpen = !isOpen;
  dispatch('toggle', isOpen);
  showWelcomeMessage=true;
  if (isOpen && showWelcomeMessage) {
    messageStore.set([...messages, { id: messages.length, text: welcomeMessage, isIncoming: true, style: 'text-gray-800 justify-start' }]);
    showWelcomeMessage = false;
  }
}
  let inputText = "";
  let showWelcomeMessage = false;
  let showInitialMessages = false;
  let welcomeMessage = "Hi, how can I help you?";
  let initialMessages = [
  { id: 0, text: "Your order will be delivered in 15 minutes.", isIncoming: false, style: 'text-gray-800 justify-start' },
  { id: 1, text: "Anything else you want to ask?", isIncoming: false, style: 'text-gray-800 justify-start' },
  { id: 2, text: "Thank you!", isIncoming: false, style: 'text-gray-800 justify-start' }
];

function handleKeydown(event) {
    // Check if the pressed key is a space
    if (event.key === ' ') {
      console.log('Space added');
      event.stopPropagation();
      // You can perform additional actions here
    }
    //event.stopPropagation();
  }
let initialMessageIndex = 0;

  $: messages = $messageStore;

 // let inputText = "";

  function handleInput(event) {
    event.stopPropagation();

    inputText = event.target.value;
  }
  // onMount(() => {
  //   if (isOpen) {
  //     messageStore.update(messages => [...messages, { id: messages.length, text: "Hello, how can I help you?", isOutgoing: false }]);
  //   }
  // });
  async function sendMessage() {
  if (inputText.trim() !== "") {
    messageStore.update(messages => [...messages, { id: messages.length, text: inputText, isOutgoing: true }]);
    inputText = "";

    // Show the initial messages after sending a user message
   
    if (initialMessageIndex < initialMessages.length && !showInitialMessages) {
       // showInitialMessages = true;

        // Add the initial message to the messages array
        messageStore.update(messages => [...messages, {id: messages.length, text:initialMessages[initialMessageIndex].text, isIncoming:true}]);
        initialMessageIndex++;
      }
      //initialMessages[initialMessageIndex-2].isIncoming = false;
  }
}

  // $: if (showInitialMessages && initialMessageIndex < initialMessages.length) {
  //   messageStore.update(messages => [...messages, initialMessages[initialMessageIndex]]);
  //   initialMessageIndex++;
  // }
</script>

<button
  class="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 cursor-pointer shadow-lg"
  on:click={toggleChatWindow}
  on:keydown={(event) => event.key === 'Enter' }
  tabindex="0"
>
  {#if isOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="bg-white rounded-lg shadow-lg w-80 p-4 absolute bottom-16 right-4" on:click={(event) => event.stopPropagation()}>
      <div class="h-64 overflow-y-auto">
        <div class="flex flex-col space-y-2">
          {#each messages as message (message.id)}
            <div class={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'} space-x-2`}>
              <div class={`p-2 rounded-lg ${message.isOutgoing ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                <p class={`${message.isOutgoing ? 'text-white' : 'text-gray-800'}`}>
                  {message.text}
              </div>
            </div>
            
          {/each}
         
        </div>
      </div>
      
      
      
      
      <div class="flex mt-4">
        <input
          type="text"
          class="flex-1 border rounded-lg p-2 mr-2"
          placeholder="Type your message..."
          style="color: black;"
          on:input={handleInput
          }
          bind:value={inputText}
          on:click|capture={() => {}}
          on:keydown|capture={(event) => {event.stopPropagation()}}
          
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" on:click={(sendMessage)}
       
        
        >
          Send
        </button>
      </div>
    </div>
  {:else}
  <p class="absolute bottom-3 left-[-6rem] bg-whitesmoke p-2 rounded-lg text-black whitespace-nowrap">Click to open chat</p>
  {/if}
</button>

<style>
  /* Add your styles for the chat bubble here */
</style>
