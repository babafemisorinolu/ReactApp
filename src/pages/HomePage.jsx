import { Link, useNavigate } from "react-router-dom";
import Hobbies from "../components/Hobbies";
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap";
import UncontrolledExample from "../components/UncontrolledExample";
import BasicExample from "../components/BasicExample";

export default function HomePage(){

    const navigate = useNavigate();
    const data= {fname:"John", lname:"Thomas"}
    function handleLogin(){
        navigate('/about', {state: data})
    }

    return <> 
    <BasicExample/>
    
    <h1> This is the Homepage </h1>
    <UncontrolledExample/>
    <button onClick={handleLogin}> Login </button>

    <Hobbies />

    <Link to="/about"  > Go to Aboutpage</Link>   

    
<Button variant="primary">Hello jj</Button>
<Button variant="outline-primary">Primary</Button>

<Alert key="primary" variant="primary">
          This is ajjd alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
    
    </>
}