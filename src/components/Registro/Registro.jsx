import React, { useState } from 'react'

const Registro = () => {
    const [error, setError] = useState(false)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [ccontraseña, setCContraseña] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(nombre.trim() == '' || apellido.trim() == '' || email.trim() == '' || telefono.trim() == '' || contraseña.trim() == '' || ccontraseña.trim() == '') {
            setError(true)
        } else {
            setError(false)
        }
    }


    return (
        <section className='flex px-4 min-w-[425px] md:w-[640px] lg:px-0'>
            <form onSubmit={handleSubmit} className='flex w-full items-center flex-col font-semibold backdrop-blur-3xl bg-white bg-opacity-10 shadow-slate-800 shadow-xl p-8 rounded-xl'>
                <h1 className='text-[3rem] font-bold'>Registrate!</h1>
                <p className='mb-8 text-gray-700 text-sm'>Registrate completando el siguiente formulario.</p>
                <div className='block sm:flex gap-5 w-full'>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="nombre" className='text-gray-900'>Nombre</label>
                        <input onChange={(e) => setNombre(e.target.value)}
                            value={nombre} type="text" name="" id="nombre"
                            className='p-1 rounded-md shadow' />
                    </div>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="apellido" className='text-gray-900'>Apellido</label>
                        <input onChange={(e) => setApellido(e.target.value)}
                            value={apellido} type="text" name="" id="apellido"
                            className='p-1 rounded-md shadow' />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="email" className='text-gray-900'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                            value={email} type="email" name="" id="email"
                            className='p-1 rounded-md shadow' />
                    </div>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="telefono" className='text-gray-900'>Telefono</label>
                        <input onChange={(e) => setTelefono(e.target.value)}
                            value={telefono} type="number" name="" id="telefono"
                            className='p-1 rounded-md shadow' />
                    </div>
                </div>
                <div className='block sm:flex gap-5 w-full'>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="contraseña" className='text-gray-900'>Contraseña</label>
                        <input onChange={(e) => setContraseña(e.target.value)}
                            value={contraseña} type="password" name="" id="contraseña"
                            className='p-1 rounded-md shadow' />
                    </div>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="segunda-contaseña" className='text-gray-900'>Confirmar contraseña</label>
                        <input onChange={(e) => setCContraseña(e.target.value)}
                            value={ccontraseña} type="password" name="" id="segunda-contaseña"
                            className='p-1 rounded-md shadow' />
                    </div>
                </div>

                {error && <p className='h-5 mt-5 font-mono text-red-600'>Por favor, completa todos los campos.</p>}

                <button className='bg-blue-600 hover:bg-blue-500 w-[150px] shadow transition-all duration-200 p-2 uppercase text-white rounded mt-10'>Registrarse</button>
            </form>
        </section>
    )
}

export default Registro
