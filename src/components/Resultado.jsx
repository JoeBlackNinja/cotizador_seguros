import useCotizador from "../hooks/useCotizador"

const Resultado = () => {

    const {resultado, datos } = useCotizador();

  return (
    <>
    <div className='bg-slate-200 w-3/6 mx-auto mt-4 shadow
    rounded-lg p-10 hover:bg-slate-300'>
        <div className=" flex flex-row justify-around w-full mb-4">
            <label className="mb-3 text-2xl">Marca del fabricante: </label>
            <p className="text-center font-bold text-3xl">{datos.marca}</p>
        </div>

        <div className=" flex flex-row justify-around w-full mb-4">
            <label className="mb-3 text-2xl">Modelo del vehículo: </label>
            <p className="text-center font-bold text-3xl">{datos.year}</p>
        </div>

        <div className=" flex flex-row justify-around w-full mb-4">
            <label className="mb-3 text-2xl">Total estimado del seguro: </label>
            <p className="text-center font-bold text-3xl">{datos.plan}</p>
        </div>
        
        <div className=" flex flex-row justify-around w-full mb-4" >
            <label className="mb-3 text-2xl">Total estimado del seguro: </label>
            <p className="text-center font-bold text-3xl">{resultado}</p>
        </div>
    </div>
    </>
  )
}

export default Resultado