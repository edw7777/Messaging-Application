import './App.css';

import React, { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ChatWindow from 'C:/Users/wange/Downloads/MessagingApp/messaging/src/Components/ChatWindow';
import MessageInput from 'C:/Users/wange/Downloads/MessagingApp/messaging/src/Components/MessageInput';
import UserList from 'C:/Users/wange/Downloads/MessagingApp/messaging/src/Components/UserList';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(['User1', 'User2']); // Initial list of users

  const handleSendMessage = (text) => {
    const newMessage = {
      sender: 'You', // For simplicity, assume the user is always the sender
      text: text,
    };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    //set up subscriptions, data fetch, set up timers, DOM manipulation, global event lsiteners
  }, []);


  return (
    <div className="app">
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
      <UserList users={users} />
    </div>
  );
};
export default App;
