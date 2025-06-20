import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useSignalR } from "../hooks/useSignalR";
import iconUrl from "../assets/marker-icon.png";
import icon2xUrl from "../assets/marker-icon-2x.png";
import shadowUrl from "../assets/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl: icon2xUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const UserB = () => {
  const [position, setPosition] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useSignalR((data) => {
    setPosition({ lat: data.lat, lon: data.lon });
  });
  console.log("position :", position);
  return (
    <div className="p-4 bg-green-100 rounded-lg mt-4">
      <h2 className="font-bold text-lg mb-2">User B - Map Viewer</h2>
      {position ? (
        <MapContainer
          center={[position.lat, position.lon]}
          zoom={13}
          className="h-96 w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[position.lat, position.lon]} icon={customIcon}>
            <Popup>Live Location from User A</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Waiting for location...</p>
      )}
    </div>
  );
};
export default UserB;
