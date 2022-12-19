import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { obtenerDiferenciaYear, calcularMarca } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{

    const [datos, setDatos] = useState({
        marca: '',
        year:'',
        plan:''
    })

    const handleChangeDato = (e) =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState('')

    const cotizarSeguro=()=>{
        let resultado = 200
        console.log(datos.year);
        const diferencia = obtenerDiferenciaYear(datos.year)
        resultado -= ((diferencia * 3) * resultado)/100

        resultado *= calcularMarca(datos.marca)
        console.log(resultado);
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDato,
                error,
                setError,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext