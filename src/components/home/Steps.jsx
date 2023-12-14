import Image from 'next/image';

const Steps = () => {
    return (
        <>
            <div className="h-screen bg-white flex-row lg:flex lg:px-28">
                <div className="w-full lg:w-1/2 lg:px-6 px-28 flex justify-center items-center">
                    <div className="flex gap-6">
                        {/* First and Third card in one column */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white h-auto w-60 shadow-xl mt-4 py-4 relative">
                                {/* Green circle */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                                    1
                                </div>

                                {/* Image and text */}
                                <div className="">
                                    <div className="mx-auto">
                                        <Image
                                            src='/step-01-1.svg'
                                            alt='step-01'
                                            width={160}
                                            height={160}
                                            priority
                                            className="mx-auto"
                                        />
                                    </div>
                                    <p className="text-black text-center font-semibold text-xl px-6">Finde nachhaltige Restaurants in deiner Nähe</p>
                                </div>
                            </div>

                            <div className="bg-white h-auto w-60 shadow-xl mt-4 py-4 relative">
                                {/* Green circle */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <div className="">
                                    <Image
                                        src='/step-02-2.svg'
                                        alt='step-02'
                                        width={160}
                                        height={160}
                                        priority
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-black text-center font-semibold text-xl px-6">Wähle aus mehr als 1.000 Speisen</p>
                                </div>
                            </div>
                        </div>

                        {/* Second card in a separate column */}
                        <div className="lg:mt-40">
                        <div className="bg-white h-auto w-60 shadow-xl mt-4 py-4 relative">
                                {/* Green circle */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                                    3
                                </div>
                                <div className="">
                                    <Image
                                        src='/step-03-3.svg'
                                        alt='step-03'
                                        width={160}
                                        height={160}
                                        priority
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-black text-center font-semibold text-xl px-6">Zahle mit der Bezahlmethode deiner Wahl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right-hand side */}
                <div className="w-1/2 flex flex-col justify-center px-20">
                    {/* Right-hand side content */}
                    <h2 className="text-black text-4xl font-bold">Liefern oder Abholen?</h2>
                    <p className="text-black text-lg mt-4">
                        Es ist einfach und bequem Speisen über Go Kidogo Plattform zu bestellen.
                    </p>
                </div>
            </div>

            {/* steps 04-06 */}

            <div className="h-screen bg-white flex-row lg:flex lg:px-28">

                {/* Right-hand side */}
                <div className="w-1/2 flex flex-col justify-center px-14">
                    {/* Right-hand side content */}
                    <h2 className="text-black text-4xl font-bold">Verpackungsmülleinsparen und gemeinnützige Projekte fördern.</h2>
                    <p className="text-black text-lg mt-4">
                    Mit jeder Bestellung unterstützt  Go Kidogo Bildungsprojekte der PROBONO Schulpartnerschaften.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 lg:px-6 px-20 flex justify-center items-center mb-20">
                    <div className="flex gap-6">
                        {/* First and Third card in one column */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white h-auto w-60 shadow-xl mt-4 py-4 relative">
                                {/* Green circle */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                                    4
                                </div>

                                {/* Image and text */}
                                <div className="">
                                    <div className="mx-auto">
                                        <Image
                                            src='/step-04-4.svg'
                                            alt='step-04'
                                            width={160}
                                            height={160}
                                            priority
                                            className="mx-auto"
                                        />
                                    </div>
                                    <p className="text-black text-center font-semibold text-xl px-6">Genieße deine wohlverdiente Mahlzeit</p>
                                </div>
                            </div>

                            <div className="bg-white h-auto w-60 shadow-xl mt-4 py-4 relative">
                                {/* Green circle */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                                    5
                                </div>
                                <div className="">
                                    <Image
                                        src='/step-05-5.svg'
                                        alt='step-05'
                                        width={160}
                                        height={160}
                                        priority
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-black text-center font-semibold text-xl px-6">Gebe den Behälter spätestens nach 14 Tagen zurück</p>
                                </div>
                            </div>
                        </div>

                        {/* Second card in a separate column */}
                        <div className="lg:mt-36">
                        <div className="bg-white h-auto w-60 shadow-xl mt-4 py-4 relative">
                                {/* Green circle */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                                    6
                                </div>
                                <div className="">
                                    <Image
                                        src='/step-06-6.svg'
                                        alt='step-06'
                                        width={160}
                                        height={160}
                                        priority
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-black text-center font-semibold text-xl px-6">Anschließend sorgen unsere Partnergastronomen für eine fachgerechte Reinigung der Behälter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps;