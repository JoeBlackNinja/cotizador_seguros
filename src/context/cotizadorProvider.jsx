import { createContext, useState } from "react";

import helpers from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

  const [datos,setDatos] = useState({
    marca:'',
    year:'',
    plan:''
  });

  const [error,setError] = useState('');
  const [resultado,setResultado] = useState('');
  const [cargando,setCargando] = useState(false);

  const handleChangeData = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizarSeguro = () => {    
    let resultado = 2000;

    //Rubros de evaluacion
    const marca_ = ((helpers.calcularMarca(datos.marca) / 100) * resultado);
    const years_ = (((helpers.dateDifference(datos.year) * 3) / 100) * resultado);
    const plan_ = ((helpers.calcularPlan(datos.plan) / 100) * resultado); 

    let cantidad = resultado + marca_ + years_ + plan_

    setCargando(true);

    setTimeout(() => {
      setResultado(helpers.formatearDinero(cantidad));
      setCargando(false);
    }, 1000)

  }

  return (
    <CotizadorContext.Provider 
      value={{
          handleChangeData,
          datos,
          error,
          setError,
          cotizarSeguro,
          resultado,
          cargando
      }}>
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
