/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Burst Events in Uttarakhand</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <!-- Include Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        #map {
            flex: 1;
            height: 100%;
        }

        #barChart {
            width: 400px;
            background-color: #f5f5f5;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1;
            overflow-y: auto;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <div id="barChart">
        <canvas id="eventsChart"></canvas>
    </div>

    <script>
        var map = L.map('map').setView([30.8, 79.1], 7);

        // Add OpenStreetMap as a base layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Cloud Burst Locations
        var cloudBurstData = [
            {
                "Location": "Alaknanda valley (between Joshimath and Chamoli)",
                "Date": 20,
                "Month": 7,
                "Year": 1970,
                "Latitude": "29.88°N",
                "Longitude": "79.35°E"
            },
            null,
            {
                "Location": "Dobata Village, Pithoragarh district",
                "Date": "13-19",
                "Month": 7,
                "Year": 1971,
                "Latitude": "29.58286100°N",
                "Longitude": "80.21818500°E"
            },
            // ... Add more locations as needed
        ];

        // Create an object to count events for each unique combination of latitude and longitude
        var eventCounts = {};

        // Add popups for each cloud burst location and keep them open
        cloudBurstData.forEach(function(location) {
            if (location) {
                // Convert latitude and longitude to string for unique key
                var key = location.Latitude + ',' + location.Longitude;

                // Increment the event count for the location
                eventCounts[key] = (eventCounts[key] || 0) + 1;

                var popupContent = `<b>Latitude:</b> ${location.Latitude}<br><b>Longitude:</b> ${location.Longitude}<br><b>Events:</b> ${eventCounts[key]}`;

                L.marker([parseFloat(location.Latitude), parseFloat(location.Longitude)])
                    .addTo(map)
                    .bindPopup(popupContent, { autoClose: false })
                    .openPopup();
            }
        });

        // Create a bar chart using Chart.js
        var ctx = document.getElementById('eventsChart').getContext('2d');
        var eventsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(eventCounts),
                datasets: [{
                    label: 'Number of Events',
                    data: Object.values(eventCounts),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
</body>
</html>
*/