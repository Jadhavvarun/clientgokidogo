const ImpressumBackdrop = () => {
    return (
        <div className="h-[400px] w-auto relative ">
            <div className="bg-opacity-0  fixed  top-0 left-0 right-0  bg-center bg-cover "></div>
            <div className="  flex-col absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-center">
                <h2 className="text-5xl  font-bold relative">
                Impressum     </h2>
                
            </div>
            <br></br>
        </div>
    )
}
export default ImpressumBackdrop;