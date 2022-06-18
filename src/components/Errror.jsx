import useCotizador from "../hooks/useCotizador"

const Errror = () => {
  
  const {error} = useCotizador();

    return (
    <div className="text-red-700 text-center 
    border-red-600 border-2 font-bold text-xl bg-red-100
    rounded-md">
        {error}
    </div>
  )
}

export default Errror;