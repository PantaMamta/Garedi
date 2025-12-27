export default function Register() {
  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Register</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Register</button>
    </div>
  );
}
