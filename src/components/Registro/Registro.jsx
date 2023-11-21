import React from 'react'

const Registro = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("hola muindo!")
    }

    return (
        <section className='flex px-4 min-w-[425px] md:w-[640px] lg:px-0'>
            <form onSubmit={handleSubmit} className='flex w-full items-center flex-col font-semibold backdrop-blur-3xl bg-white bg-opacity-10 shadow-slate-800 shadow-xl p-8 rounded-xl'>
                <h1 className='text-[3rem] font-bold'>Registrate!</h1>
                <p className='mb-8 text-gray-700 text-sm'>Registrate completando el siguiente formulario.</p>
                <div className='block sm:flex gap-5 w-full'>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="nombre" className='text-gray-900'>Nombre</label>
                        <input type="text" name="" id="nombre" className='p-1 rounded-md shadow' />
                    </div>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="apellido" className='text-gray-900'>Apellido</label>
                        <input type="text" name="" id="apellido" className='p-1 rounded-md shadow' />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="email" className='text-gray-900'>Email</label>
                        <input type="email" name="" id="email" className='p-1 rounded-md shadow' />
                    </div>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="telefono" className='text-gray-900'>Telefono</label>
                        <input type="number" name="" id="telefono" className='p-1 rounded-md shadow' />
                    </div>
                </div>
                <div className='block sm:flex gap-5 w-full'>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="contraseña" className='text-gray-900'>Contraseña</label>
                        <input type="password" name="" id="contraseña" className='p-1 rounded-md shadow' />
                    </div>
                    <div className='flex flex-col pt-3 w-full'>
                        <label htmlFor="segunda-contaseña" className='text-gray-900'>Confirmar contraseña</label>
                        <input type="password" name="" id="segunda-contaseña" className='p-1 rounded-md shadow' />
                    </div>
                </div>

                <button className='bg-blue-600 hover:bg-blue-500 w-[150px] shadow transition-all duration-200 p-2 uppercase text-white rounded mt-10'>Registrarse</button>
            </form>
        </section>
    )
}

export default Registro
