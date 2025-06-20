import { useNavigate } from "react-router-dom";
import UserA from "../components/UserA";
import UserB from "../components/UserB";
import "leaflet/dist/leaflet.css";

export default function Task2() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>This is Task 2 Page</h2>
      <button
        className="px-4 bg-red-500 rounded py-2 text-center text-white hover:bg-red-600"
        onClick={() => navigate("/")}
        style={{ marginTop: "20px" }}
      >
        Back to Home
      </button>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Real-Time Location Sharing
        </h1>
        <UserA />
        <UserB />
      </div>
    </div>
  );
}
