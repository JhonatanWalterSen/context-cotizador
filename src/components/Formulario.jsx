import React from 'react'
import { Fragment, useContext } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import CotizadorContext from '../context/CotizadorProvider'


const Formulario = () => {

    const {hola} = useContext(CotizadorContext)
    console.log(hola);
    return (
        <>


            <form action="">
                <div className="my-5">
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                    <select className='w-full bg-white border border-gray-200' name="marca" id="marca">
                        <option value="">-- Seleccionar Marca --</option>
                        {MARCAS.map(marca =>(
                            <option
                                key={marca.id}
                                value={marca.id}
                            >{marca.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>Año</label>
                    <select className='w-full bg-white border border-gray-200' name="marca" id="anio">
                        <option value="">-- Seleccionar Año --</option>
                        {YEARS.map(year =>(
                            <option
                                key={year}
                                value={year}
                            >{year}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>Elige un Plan</label>
                    <div className='flex gap-3 items-center'>
                        {PLANES.map(plan =>(
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input
                                    type={"radio"}
                                    name="plan"
                                    value={plan.id}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input value={"cotizar"} type="submit" className='w-full bg-indigo-600 hover:bg-indigo-900 transition-colors text-white uppercase p-3 rounded cursor-pointer font-bold' />

            </form>
        </>
    )
}

export default Formulario