# Weather App with Interactive World Map

## Overview
This project is a weather application integrated with an interactive world map using Leaflet.js. Users can click anywhere on the map to get real-time weather information for that location. Additionally, a search bar allows users to look up weather details for specific cities. The app also displays the country's flag when weather information is retrieved.

## Features
- Interactive world map powered by Leaflet.js
- Click anywhere on the map to get weather updates and view the country flag
- Displays temperature, location name, weather description, and country flag
- Search bar functionality to find weather for a specific city
- Uses OpenWeatherMap API for real-time weather data
- Uses FlagCDN API to display the corresponding country's flag

## Technologies Used
- HTML, CSS, JavaScript
- Leaflet.js for map integration
- OpenWeatherMap API for weather data
- FlagCDN API for country flags

## How It Works
1. The map initializes at a default zoom level centered at `[0, 0]`.
2. Clicking anywhere on the map retrieves the weather data and country flag for that location.
3. A marker is placed at the clicked location.
4. The weather information and the corresponding country flag are displayed.
5. Users can also search for a city, and the map will zoom into that location with weather details and the country flag.


