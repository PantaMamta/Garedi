import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapView({ posts }) {
  return (
    <MapContainer center={[27.7172, 85.324]} zoom={12} style={{ height: 400 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {posts.map(post => (
        <Marker
          key={post._id}
          position={[post.lat || 27.7, post.lng || 85.3]}
        >
          <Popup>
            <img
              src={post.images?.[0] || "https://source.unsplash.com/200x150/?land,nepal"}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <b>{post.title}</b><br />
            NPR {post.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
