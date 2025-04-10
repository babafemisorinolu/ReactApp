import { Link } from "react-router-dom";

export default function AboutPage(){
    return <> <h1> This is the About Page </h1>
    
    {/* <a href="/"> Go to Homepage </a> */}

    <Link to="/" > Go to Homepage</Link>    
    </>
}