import { Link } from "react-router-dom";
import Hobbies from "../components/Hobbies";

export default function HomePage(){
    return <> <h1> This is the Homepage </h1>
    
    <Hobbies />

    <Link to="/about"  > Go to Aboutpage</Link>   
    
    </>
}