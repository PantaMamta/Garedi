import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import MapView from "../components/MapView";
import { getPosts } from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <MapView posts={posts} />
      <div style={styles.grid}>
        {posts.map(p => <PropertyCard key={p._id} post={p} />)}
      </div>
    </>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    padding: "20px"
  }
};
