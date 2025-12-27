import { Marker, useMapEvents } from "react-leaflet";

export default function LocationPicker({ setLat, setLng }) {
  useMapEvents({
    click(e) {
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);
    }
  });
  return <Marker position={[27.7, 85.3]} />;
}
