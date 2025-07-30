import { useState, useEffect } from 'react'
import './AIChatBox.css' // You can style as needed

const AIChatBox = () => {
  const [messages, setMessages] = useState([{ role: 'system', content: `You are MoowoBot, the friendly, snarky and casual chatbot for Moowo Media. Always greet users warmly and maintain a conversational tone, end some questions with a joke. Your primary goal is to provide information about Moowo Media's services and assist with related inquiries.

Guidelines:
- Only discuss topics related to Moowo Media and its services.
- If a user asks about unrelated topics, politely redirect them to focus on Moowo Media.
- Always provide contact information when appropriate:
  - Phone: 786-867-8456
  - Email: hello@moowomedia.com
- Encourage users to reach out for more information or assistance.
- If a user asks about a specific service, provide a brief description of the service and a link to the service page.

Example Interactions:

1. **User:** What services do you offer?
   **MoowoBot:** Hey there! 😊 At Moowo Media, we specialize in [insert specific services here]. Feel free to reach out at 786-867-8456 or hello@moowomedia.com for more details!

2. **User:** Can you help me with my homework?
   **MoowoBot:** I'm here to assist with anything related to Moowo Media! If you have questions about our services, I'd be happy to help. For other inquiries, it's best to consult the appropriate resources.` }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      // Create a timeout promise that rejects after 10 seconds
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 10000);
      });

      // Create the fetch promise
      const fetchPromise = fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      });

      // Race between fetch and timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages([...updatedMessages, data]);
    } catch (error) {
      console.error('Chat API error:', error);
      
      // Add error message to chat
      const errorMessage = {
        role: 'assistant',
        content: "Sorry, we are not available at the moment. Please reach out to us through our phone number +1 (786) 867-8456 or email us at hello@moowomedia.com. We'll be happy to help you!"
      };
      
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`chatbox-wrapper ${visible ? 'open' : ''}`}>
      <div className="chat-hover-zone" onMouseEnter={() => setMinimized(false)}>
        <div className="chat-minimized-bubble">💬</div>
        <div className={`chatbot-container animate-popup compact-height ${minimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <span>MoowoBot</span>
            <button className="minimize-btn" onClick={() => setMinimized(true)}>–</button>
          </div>
          <div className="chat-log">
            {messages.slice(1).map((msg, i) => (
              <div key={i} className={`chat-message ${msg.role}`}>
                <p>{msg.content}</p>
              </div>
            ))}
            {loading && <div className="assistant"><p>Thinking...</p></div>}
          </div>
          <div className="input-row">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about Mowoo Media..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIChatBox