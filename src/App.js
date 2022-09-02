import React from "react";
import { useContext } from "react";
import Contador from "./components/Contador";
import GastosMes from "./components/GastoMes";
import AgregarGasto from "./components/AgregarDato";
import gastosContext from "./components/context";

function App() {
  
  const newGasto = useContext(gastosContext);

  return (
    <gastosContext.Provider value={newGasto}>
      <Contador />
      <h1>hola</h1>
      <AgregarGasto />
      <GastosMes />
    </gastosContext.Provider>
  );
}


export default App;