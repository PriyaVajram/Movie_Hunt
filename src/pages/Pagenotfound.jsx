import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

export const Pagenotfound = () => {
  return (
    <div className="container">
      <img src={notfound} className="imd-fluid" />
      <p className="text-center">
        <Link to="/" className="btn btn-danger"> Goto Home Page</Link>
      </p>
    </div>
  );
}

