import { useContext } from "react"
import { myContext } from "../pages/DemoPage"


export default function Child(){
   const {number, setNumber} = useContext(myContext)
    return <>
     <h1> Child {number} </h1>
    </>
}