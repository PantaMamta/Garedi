export default function PropertyCard({ post }) {
  const image =
    post.images?.[0] ||
    "https://source.unsplash.com/400x300/?kathmandu,land";

  return (
    <div style={styles.card}>
      <img src={image} alt="property" style={styles.img} />
      <div style={styles.body}>
        <h3>{post.title}</h3>
        <p>📍 {post.location}</p>
        <p>💰 NPR {post.price}</p>
        <p>🛣️ {post.distance}m from main road</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  img: { width: "100%", height: "200px", objectFit: "cover" },
  body: { padding: "10px" }
};
