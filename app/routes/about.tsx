import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>About Page</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
}
