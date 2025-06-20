import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";

const SIGNALR_HUB_URL = "https://tech-test.raintor.com/Hub";

const UserA = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("Disconnected");
  const [currentPos, setCurrentPos] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(SIGNALR_HUB_URL)
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => setStatus("Connected"))
      .catch((err) => setStatus("Connection failed: " + err.message));

    connectionRef.current = connection;

    return () => {
      connection.stop();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startSending = () => {
    if (
      !connectionRef.current ||
      connectionRef.current.state !== signalR.HubConnectionState.Connected
    ) {
      alert("SignalR not connected yet!");
      return;
    }
    setIsSending(true);

    intervalRef.current = setInterval(() => {
      const lat = 23.8103 + (Math.random() - 0.5) * 0.02;
      const lon = 90.4125 + (Math.random() - 0.5) * 0.02;
      const userName = "userA@example.com";

      connectionRef.current
        ?.invoke("SendLatLon", lat, lon, userName)
        .then(() => {
          setCurrentPos({ lat, lon }); // Update current position here
          console.log(`Sent: ${lat}, ${lon}`);
        })
        .catch((err) => console.error("Send error:", err));
    }, 3000);
  };

  const stopSending = () => {
    setIsSending(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="p-4 bg-blue-100 rounded-lg mt-4 max-w-md mx-auto">
      <h2 className="font-bold text-lg mb-2">User A - Location Sender</h2>
      <p>Status: {status}</p>

      {currentPos && (
        <div>
          <p>Sending Latitude: {currentPos.lat.toFixed(5)}</p>
          <p>Sending Longitude: {currentPos.lon.toFixed(5)}</p>
        </div>
      )}

      {!isSending ? (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={startSending}
        >
          Start Sending Location
        </button>
      ) : (
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={stopSending}
        >
          Stop Sending Location
        </button>
      )}
    </div>
  );
};

export default UserA;
