require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;  
const apiKey = process.env.WEATHERSTACK_API_KEY;
console.log('Loaded API Key:', apiKey);

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    
    if (!city) {
        return res.status(400).json({ error: "Please provide a city" });
    }

    try {
        const response = await axios.get('http://api.weatherstack.com/current', {
            params: {
                access_key: apiKey,
                query: city,
                units: 'm',  
            } 
        }); 

        // Check for API errors or empty results
        if (response.data.error) {
            res.status(404).json({ error: "City not found. Please check the city name and try again." });
        } else {
            res.json({
                location: response.data.location.name,
                temperature: response.data.current.temperature,
                description: response.data.current.weather_descriptions[0],
                humidity: response.data.current.humidity,
                wind_speed: response.data.current.wind_speed
            });
        } 
    } catch (error) {
        // Handling network or other unexpected errors
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'An unexpected error occurred while fetching weather data. Please try again later.' });
    }
});
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
