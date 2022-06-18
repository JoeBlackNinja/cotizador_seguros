import { useState } from "react";

import marcas from "../constants/marcas";
import years from "../constants/years";
import plans from "../constants/plans";
import Errror from "../components/Errror";

import useCotizador from "../hooks/useCotizador";

const Formulario = () => {
  const { 
    handleChangeData, 
    datos, 
    setError, 
    error, 
    cotizarSeguro,
    resultado } = useCotizador();

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError("Todos los campos obligatorios");
      return;
    }
    cotizarSeguro();
    
    setError('')
  };

  return (
    <>
      {error && <Errror />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            className="block mb-3 font-bold
            text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200
            rounded-md"
            onChange={(e) => handleChangeData(e)}
            value={datos.marca}
          >
            <option value="">--Seleccione marca--</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            className="block mb-3 font-bold
            text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200
            rounded-md"
            onChange={(e) => handleChangeData(e)}
            value={datos.year}
          >
            <option value="">--Seleccione Modelo--</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            className="block mb-3 font-bold
            text-gray-400 uppercase"
          >
            Plan
          </label>
          <select
            name="plan"
            className="w-full p-3 bg-white border border-gray-200
            rounded-md"
            onChange={(e) => handleChangeData(e)}
            value={datos.plan}
          >
            <option value="">--Seleccione Plan--</option>
            {plans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="w-full  bg-indigo-600 hover:bg-blue-500 transition-colors
            text-white cursor-pointer p-3 uppercase font-bold rounded-md"
          value="cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
