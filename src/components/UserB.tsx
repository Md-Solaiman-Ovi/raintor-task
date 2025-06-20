import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSignalR } from "../hooks/useSignalR";
// import { FaMapMarkerAlt } from "react-icons/fa";
import icon from "../assets/marker-icon.png";
import icon2x from "../assets/marker-icon-2x.png";
import shadow from "../assets/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: shadow,
});

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
          center={[position.lat, position.lon]}
          zoom={13}
          className="h-96 w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[position.lat, position.lon]}>
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
