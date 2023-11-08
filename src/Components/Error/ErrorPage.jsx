
import { Link } from "react-router-dom";
import "./ErrorPage.css"



function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-message">We apologize for the inconvenience. Please try again later.</p>
       <Link to="/">
         <button className="btn btn-primary " >
           Go back
         </button>
       </Link>
      
      </div>
    </div>
  );
}

export default ErrorPage;
