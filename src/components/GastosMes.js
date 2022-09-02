import { useContext } from "react"
import userContext from "../context/UserContext";

export default function GastoMes(){


const context = useContext(ListContext);
  
  return (
    <ul>
      {context.spend.map ((gasto, index) =>( <li key = {index}>{gasto}</li>))}
    </ul>
  );
}