import useCotizador from "../hooks/useCotizador";

const Resultado = () => {

    const { resultado, datos } = useCotizador();

    if(resultado === 0) return null;

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {datos.marca}
            </p>
            <p className="my-2">
                <span className="font-bold">Modelo: </span>
                {datos.year}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {datos.plan}
            </p>
            <p className="my-2">
                <span className="font-bold">Monto aproximado: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado