import { useContext } from "react";
import { createContext } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{

    const hola = 'Hola mundo'
    return(
        <CotizadorContext.Provider
            value={{
                hola
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