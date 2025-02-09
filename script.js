const apiKey = '9b5c58ee725fbfbfdaaffb2be9c8ef42'; // OpenWeatherMap API key
        const map = L.map('map').setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        let marker;
        
        map.on('click', async (event) => {
            const { lat, lng } = event.latlng;
            const data = await getWeather(lat, lng);
            if (data) {
                placeMarker([lat, lng]);
                displayWeather(data);
            }
        });
        
        async function getWeather(lat, lng) {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching weather data:', error);
                return null;
            }
        }
        
        function placeMarker(location) {
            if (marker) {
                marker.setLatLng(location);
            } else {
                marker = L.marker(location).addTo(map);
            }
        }
        
        async function displayWeather(data) {
            const { name, sys, main, weather } = data;
            document.getElementById('location').textContent = `Location: ${name}, ${sys.country}`;
            document.getElementById('temperature').textContent = `Temperature: ${main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${weather[0].description}`;
            
            if (sys.country) {
                document.getElementById('country-name').textContent = `Country: ${sys.country}`;
                document.getElementById('country-flag').src = `https://flagcdn.com/w320/${sys.country.toLowerCase()}.png`;
            }
        }
        
        document.getElementById('search-button').addEventListener('click', async () => {
            const location = document.getElementById('search-bar').value;
            if (location) {
                const data = await searchLocation(location);
                if (data) {
                    const { lat, lon } = data.coord;
                    map.setView([lat, lon], 10);
                    placeMarker([lat, lon]);
                    displayWeather(data);
                }
            }
        });
        
        async function searchLocation(location) {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching location data:', error);
                return null;
            }
        }