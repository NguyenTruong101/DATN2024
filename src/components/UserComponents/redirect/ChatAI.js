
// Import React
import React from 'react';

// Import Dialogflow Messenger component
//import 'dialogflow-fulfillment';

// Define a functional component
const MyChatComponent = () => {
  return (
    <df-messenger
      intent="WELCOME"
      chat-title="AI_Chat"
      agent-id="da37af64-fd93-443c-aadc-ae7051cbc94e"
      language-code="en"
    ></df-messenger>
  );
};

// Export the component
export default MyChatComponent;