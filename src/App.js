import React, { useState } from "react";
import Contador from "./components/Contador";
import GastosMes from "./components/GastoMes";
import AgregarGasto from "./components/AgregarGasto";
import './App.css';
import GastosContext from "./context/Context";




function App() {
  
  const [gastos, actualizarGastos] = useState([]);

  function agregarGasto(gasto) {
    actualizarGastos([...gastos,gasto])
  }

  return (
    <GastosContext.Provider value={{
      gastos, 
      agregarGasto
    }}>
      <Contador />
      <h1>hola</h1>
      <AgregarGasto />
      <GastosMes />
    </GastosContext.Provider>
  );
}


export default App;