import React, { useState } from "react";

export default function App() {
  const [device, setDevice] = useState(null);
  const [log, setLog] = useState([]);

  const scanBluetooth = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: []
      });
      setDevice(device);
      setLog((l) => [...l, `Connected to: ${device.name || device.id}`]);
    } catch (error) {
      setLog((l) => [...l, `Error: ${error.message}`]);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Bluetooth PWA Chat Demo</h1>
      <button onClick={scanBluetooth} style={{ padding: "10px 20px", fontSize: 16 }}>
        Scan & Connect
      </button>

      <div style={{ marginTop: 20 }}>
        <h3>Log:</h3>
        <div
          style={{
            border: "1px solid #ccc",
            minHeight: 200,
            padding: 10,
            maxHeight: 300,
            overflowY: "auto",
            backgroundColor: "#f9f9f9"
          }}
        >
          {log.map((line, i) => (
            <p key={i} style={{ margin: 0, fontSize: 14 }}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}