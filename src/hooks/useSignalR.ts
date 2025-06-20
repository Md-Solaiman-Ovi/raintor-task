
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";

export type LocationPayload = {
  userName: string;
  lat: number;
  lon: number;
};

export const useSignalR = (onReceive: (data: LocationPayload) => void) => {
  const connectionRef = useRef<signalR.HubConnection | null>(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://tech-test.raintor.com/Hub")
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveLatLon", (data) => {
      console.log("📡 SignalR received:", data);
      onReceive(data);
    });

    connection
      .start()
      .then(() => console.log("✅ SignalR connected"))
      .catch((err) => console.error("❌ SignalR connection failed:", err));

    connectionRef.current = connection;

    return () => {
      connection.stop();
    };
  }, [onReceive]);
};
