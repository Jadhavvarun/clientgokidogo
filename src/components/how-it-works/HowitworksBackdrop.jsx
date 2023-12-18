const HowitworksBackdrop = () => {
    return(
        <div className="h-[400px] w-auto relative ">
      <div className="bg-opacity-0  fixed  top-0 left-0 right-0  bg-center bg-cover "></div>
      <div className="  flex-col absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-center">
        <h2 className="text-5xl  font-bold relative">
        So funktioniert‘s
         </h2>
         <p className='text-3xl py-2'>Deine Fragen, unsere Antworten</p>
         <div className='py-12 px-2 items-center mt-4'>
        </div>
      </div>
      <br></br> 
    </div>
    )
}
export default HowitworksBackdrop;