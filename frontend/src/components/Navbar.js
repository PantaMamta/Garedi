import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>🏠 Gharedi</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/upload" style={styles.link}>Upload</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#0d6efd",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    color: "#fff"
  },
  link: {
    color: "#fff",
    marginLeft: "15px",
    textDecoration: "none"
  }
};
