export default function Login() {
  return (
    <div style={styles.box}>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
}

const styles = {
  box: {
    maxWidth: "400px",
    margin: "50px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px"
  }
};
