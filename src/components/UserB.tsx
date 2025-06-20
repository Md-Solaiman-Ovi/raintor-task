import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useSignalR } from "../hooks/useSignalR";
import iconUrl from "../assets/marker-icon.png";
import icon2xUrl from "../assets/marker-icon-2x.png";
import shadowUrl from "../assets/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl: icon2xUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const DEFAULT_POSITION = { lat: 23.8103, lon: 90.4125 }; // Dhaka fallback

const UserB = () => {
  const [position, setPosition] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useSignalR((data) => {
    setPosition({ lat: data.lat, lon: data.lon });
  });

  return (
    <div className="p-4 bg-green-100 rounded-lg mt-4">
      <h2 className="font-bold text-lg mb-2">User B - Map Viewer</h2>

      {position ? (
        <MapContainer
          center={
            position
              ? [position.lat, position.lon]
              : [DEFAULT_POSITION.lat, DEFAULT_POSITION.lon]
          }
          zoom={13}
          className="h-96 w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {position && (
            <Marker position={[position.lat, position.lon]} icon={customIcon}>
              <Popup>Live Location from User A</Popup>
            </Marker>
          )}
        </MapContainer>
      ) : (
        <p className="mt-2 text-gray-600 italic">Waiting for location...</p>
      )}
    </div>
  );
};

export default UserB;
