const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const API_KEY = 'YOUR_API_KEY';

// Use the CORS middleware
app.use(cors());

app.get('/weather', async (req, res) => {
  const { city } = req.query;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

