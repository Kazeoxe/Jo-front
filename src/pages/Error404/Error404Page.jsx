import { Link } from "react-router-dom";
import "./error404.css";

export default function NotFoundPage() {
  return (
    <>
      <div className="error404">
        <p> ERROR 404</p>
        <Link className="btn" to="/">Go back to home</Link>
      </div>
    </>
  );
}
