					Weather-App

A simple Node.js application that fetches and displays weather information using an external API.
Key Links:
	•Before using the Weather API, register for an API key.
	•Before using the Weather API, read the API Documentation.

Documentation
	•Installation
	•Dependencies
	•Usage
	•API Configuration
	•Running the App

Installation
bash

$ npm install weather-app
# OR
$ yarn add weather-app

Dependencies
This application relies on the following dependencies:
	•Node.js (v12 or later)
	•Express (for handling server requests)
	•axios (for making HTTP requests to the weather API)
	•dotenv (for managing environment variables)

Fetch
The application uses axios to make requests to the Weather API. Ensure that you have it installed and properly configured in your project.

API Configuration
To use the Weather API, you need to obtain an API key from Weatherstack.
	1.Register on Weatherstack to get your API key.
	2.Create a .env file in the root directory of your project.
	3.Add your API key to the .env file:
                WEATHER_API_KEY=your_api_key_here


Setting up .env File
The application relies on environment variables to securely manage sensitive information like the API key. Make sure to create a .env file in the root directory with the following content:
bash
	WEATHER_API_KEY=your_api_key_here
	PORT=3000

Usage
Starting the Server
To start the server, use the following command:

$ npm start
# OR
$ yarn start

This will start the server on the port specified in the .env file (default is 3000). You can access the application by navigating to http://localhost:3000 in your web browser.

Fetching Weather Data
The app fetches weather data based on user input (e.g., city name). It makes a request to the Weather API and displays the current weather conditions.

Example Request
axios .get(`http://api.weatherstack.com/current`,
 { params: { access_key: process.env.WEATHER_API_KEY, query: 'New York', }, 
})
 .then(response => { console.log(response.data); 
}) 
.catch(error => { console.error('Error fetching weather data:', error);
 });


Example 
Response

{ "location": "London", 
"temperature": 15,
 "description": "Partly cloudy",
 "humidity": 82, 
"wind_speed": 13 }

Handling Errors
•	If the city query parameter is missing:
{
  "error": "Please provide a city"
}
•	If the API returns an error (e.g., invalid city name):
{
  "error": "Unable to find the city. Please try with a different city name."
}
•	If there's a network issue or the API is down:
{
  "error": "Error fetching weather data. Please try again later."
}

Running the App
After setting up the environment variables and installing the dependencies, you can run the app using:
bash
$ npm start
This will start the application, and you can begin fetching weather information by entering a city name on the app's interface.