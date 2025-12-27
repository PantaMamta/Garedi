import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationPicker from "../components/LocationPicker";

export default function UploadProperty() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Property</h2>
      <input placeholder="Title" />
      <input placeholder="Location" />
      <input placeholder="Price" />
      <input placeholder="Distance from main road (m)" />

      <MapContainer center={[27.7, 85.3]} zoom={13} style={{ height: 300 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationPicker setLat={setLat} setLng={setLng} />
      </MapContainer>

      <p>Selected: {lat}, {lng}</p>
      <button>Submit</button>
    </div>
  );
}
