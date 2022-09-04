import { useContext } from "react";
import GastosContext from "../context/Context";

function GastosMes() {

  const { gastos } = useContext(GastosContext);

  return (
    <ul>
      {gastos.map((gasto) => (<li key={gasto}>{gasto}</li>
      ))}
    </ul>
  );
}

export default GastosMes;