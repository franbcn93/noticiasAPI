import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  // State del custom hook
  const [state, actualizarState] = useState(stateInicial);
  const SelectNoticias = () => (
    <select
      value={state}
      onChange={(e) => actualizarState(e.target.value)}
      name=""
      id=""
      className="browser-default"
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNoticias];
};

export default useSelect;
// bd828bd35d5c4303ab85a78b2871abf2
