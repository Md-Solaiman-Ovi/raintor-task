import { useState, useEffect } from "react";
import { useSignalR } from "../hooks/useSignalR";

const UserA = () => {
  const [lat, setLat] = useState(25.737);
  const [lon, setLon] = useState(90.364);
  const { sendLocation } = useSignalR(() => {});

  useEffect(() => {
    const interval = setInterval(() => {
      const newLat = lat + (Math.random() - 0.5) * 0.01;
      const newLon = lon + (Math.random() - 0.5) * 0.01;
      setLat(newLat);
      setLon(newLon);
      sendLocation(newLat, newLon, "mdsolaimanovi@gmail.com");
    }, 3000);

    return () => clearInterval(interval);
  }, [lat, lon]);

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="font-bold text-lg">User A - Sender</h2>
      <p>Sending Latitude: {lat.toFixed(5)}</p>
      <p>Sending Longitude: {lon.toFixed(5)}</p>
    </div>
  );
};
export default UserA;
