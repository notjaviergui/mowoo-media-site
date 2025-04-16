import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
console.log("Loaded API key:", process.env.BEEHIIV_API_KEY);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  console.log('Received email:', email);

  try {
    const response = await fetch('https://api.beehiiv.com/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        publication_id: 'a0080e05-7f0d-452d-a9b0-98f3d5b8adc3',
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: 'moowo_site',
      }),
    });

    const responseBody = await response.text();
    console.log('Beehiiv response:', response.status, responseBody);

    // Try to parse as JSON if possible for better error handling
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(responseBody);
    } catch (e) {
      // Response wasn't valid JSON
    }

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: jsonResponse || responseBody 
      });
    }

    res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required.' });
  }

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages,
      }),
    });

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return res.status(openaiResponse.status).json({ error: data });
    }

    res.status(200).json(data.choices[0].message);
  } catch (error) {
    console.error('ChatGPT API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});