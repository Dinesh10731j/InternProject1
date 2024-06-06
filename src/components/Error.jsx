import React from 'react'

function Error() {
  return (
    <>
    <section className='h=[500px] w-[500px] flex flex-col 
    justify-center  items-center px-15 py-8  mt-10'>
    <h3 className='text-2xl '>ERROR!</h3>
    <h1 className="text-8xl font-bold">500</h1>
    <h4 className='text-lg'><span className='font-bold text-3xl'>Oops! </span>Site didn't found </h4>
    <p className='text-lg text-auto tracking-tighter'>We are experiencing an internal server problem,</p>
    <p className='text-lg'>please try again later.</p>
    <button className="rounded-3xl bg-black text-white px-5 py-2 mt-7 text-center">Reload</button>

    </section>

    </>
  )
}

export default Error