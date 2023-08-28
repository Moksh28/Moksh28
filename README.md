                        Your Chat Bubble SDK
Welcome to the documentation for Your Chat Bubble SDK! This SDK allows you to easily embed a chat bubble onto your website, enabling real-time communication with your users.

Getting Started
To integrate the chat bubble into your website, follow these steps:

1. Include SDK on Your Website:

   . Copy the contents of the build folder to your project's root directory.
   . Make sure the build folder contains the files output.css, bundle.js, and bundle.js.map.
   
   
2. Add the Integration Container:

    . Open your website's HTML file where you want the chat bubble to appear.
    . Add an empty div with a unique ID, like this:
    <div id="chat-bubble-container"></div>

3. Initialize the Chat Bubble:

    . Just before the closing </body> tag in your HTML file, add the following script tag to include the SDK:
    <script src="bundle.js"></script>
    . Immediately after the script tag, initialize the chat bubble using the provided function:
    <script>
  // Initialize the chat bubble
  initializeChatBubble({
    // Customize options if needed
  });
</script>


4. Customization Options
You can customize the appearance and behavior of the chat bubble by passing options when initializing it:

position: Set the position of the chat bubble (e.g., 'bottom-right', 'bottom-left').
color: Customize the color of the chat bubble icon.
...

        Examples
Here's an example of how your HTML might look after integrating the SDK:
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
  <!-- Include other styles and scripts -->
</head>
<body>
  <!-- Place where the chat bubble will be added -->
  <div id="chat-bubble-container"></div>

  <script src="bundle.js"></script>
  <script>
    // Initialize the chat bubble
    initializeChatBubble({
      position: 'bottom-right',
      color: '#3490dc'
    });
  </script>
</body>
</html>


                                    Support
If you have any questions or need assistance, please contact our support team at moksh.mhjan@gmail.com.







        If you want to directly use this cloned application follow the steps
1. Install node_modules
npm install

2. npx tailwindcss -i ./src/input.css -o ./public/output.css to initilaize css.

3. npm run build

4. npm run start



