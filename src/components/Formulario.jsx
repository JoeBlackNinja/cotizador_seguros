import marcas from "../constants/marcas";
import years from "../constants/years";
import plans from "../constants/plans";

import { useState } from 'react';

const Formulario = () => {

  const [marca,setMarca] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(marca);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-5">
        <label
          className="block mb-3 font-bold
            text-gray-400 uppercase"
        >
          Marca
        </label>
        <select
          className="w-full p-3 bg-white border border-gray-200
            rounded-md"
        >
          <option value="">--Seleccione marca--</option>
          {marcas.map((marca) => (
            <option 
                key={marca} 
                value={marca}
                onSelect={() => (console.log('asd'))}
            >
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
          className="w-full p-3 bg-white border border-gray-200
            rounded-md"
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
          className="w-full p-3 bg-white border border-gray-200
            rounded-md"
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
  );
};

export default Formulario;
