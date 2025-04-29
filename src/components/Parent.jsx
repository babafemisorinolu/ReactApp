import { useContext } from "react";
import Child from "./Child";
import { myContext } from "../pages/DemoPage";


export default function Parent(){
   const {number, setNumber}= useContext(myContext)

   function changeNumber(){
    setNumber(100);
   }

    return <>
        <h1> Parent {number} </h1>
     <button onClick={changeNumber}>change it ...</button>   
           </>
}