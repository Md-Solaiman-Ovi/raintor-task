import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";

export const useSignalR = (
  onReceive: (data: { userName: string; lat: number; lon: number }) => void
) => {
  const connectionRef = useRef<signalR.HubConnection | null>(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://tech-test.raintor.com/Hub")
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveLatLon", onReceive);

    connection
      .start()
      .then(() => console.log("SignalR Connected"))
      .catch((err) => console.error("SignalR Connection Error:", err));

    connectionRef.current = connection;

    return () => {
      connection.stop();
    };
  }, [onReceive]);

  const sendLocation = (lat: number, lon: number, userName: string) => {
    connectionRef.current?.invoke("SendLatLon", lat, lon, userName);
  };

  return { sendLocation };
};