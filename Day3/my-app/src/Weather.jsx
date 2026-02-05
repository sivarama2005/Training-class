import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({ city: name, ...weatherData.current_weather });
    } catch {
      setError("Error fetching weather");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🌍 City Weather</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button style={styles.button} onClick={getWeather}>
          Get Weather
        </button>

        {error && <p style={styles.error}>{error}</p>}

        {weather && (
          <div style={styles.result}>
            <h3>{weather.city}</h3>
            <p style={styles.temp}>{weather.temperature}°C</p>
            <p>💨 Wind: {weather.windspeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #74ebd5, #9face6)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  heading: {
    marginBottom: "15px",
  },
  input: {
    width: "90%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    background: "#4a69bd",
    color: "white",
    cursor: "pointer",
  },
  temp: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Weather;
