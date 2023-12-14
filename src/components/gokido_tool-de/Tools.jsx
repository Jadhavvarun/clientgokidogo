import Image from 'next/image';

const Tools = () => {
    const titleStyle = {
        background: 'linear-gradient(to right, #bee25a, #357135)',
        transition: 'background 0.7s',
    };
    return (
        <div>
            {/* 1 */}
            <div className="h-auto  bg-white flex px-4 py-8">
                <div className="md:w-1/2 flex items-center justify-center mt-8">
                    <div className="mx-auto md:ml-28">
                        <h1 className="text-green-3 text-4xl font-semibold md:mb-6 mx-auto">Go Kidogo Marktplatz</h1>
                        <p className="text-gray-2 text-2xl mb-8">Der Go Kidogo Marktplatz ist ein neues Zentrum für dein digitales Geschäft. Hier kannst du deine Bestellungen in Echtzeit verwalten. Alle Änderungen sind umgehend für deine Kunden einsehbar. Sind deine Kunden eher spontan oder planen sie lieber voraus? In beiden Fällen ist unser Marktplatz für deine Kunden und deine Gastronomie die richtige Wahl.</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Verwaltung deines Menüs in Echtzeit</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Temporäre oder permanente Aktionspreise</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Gutscheinaktionen für Kunden</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Erstellung mehrerer Menüs</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Leitung mehrerer Restaurants</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Verwaltung des Teams mit Rechtevergabe</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Überblick über Verkäufe und Zahlungen</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Verkaufsstatistiken für optimale Verkaufsstrategien</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Zentrales Management von Kundenreklamationen</p>
                        <p className="text-gray-2 mb-8 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Hilfe unseres Teams bei der Einrichtung</p>
                        <button className="text-white font-semibold py-2 px-4 rounded left-14" style={titleStyle}>Jetzt Demo anfordern</button>
                        <div className="bg-white flex justify-center items-center ml-96">
                            <Image src="/arrow_about.png" alt="arrow" height={80} width={80} priority />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 md:flex hidden items-center justify-center">
                    <div className="mt-28">

                        <Image src="/gokidogotools-01.png" alt="gokidogotools-01" width={600} height={600} priority />
                    </div>
                </div>

            </div>


            {/* 2 */}

            <div className="h-auto bg-white flex px-4">
                <div className="w-1/2 md:flex hidden items-center justify-center mr-16">
                    <div className="mt-28">
                        <Image src="/gokidogotools-02.png" alt="gokidogotools-02" width={600} height={600} priority />
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    <div className="px-6 mr-28">
                        <h1 className="text-green-3 text-4xl font-semibold mb-6">Go Kidogo Terminal</h1>
                        <p className="text-gray-2 md:text-2xl text-lg mb-8">Das Go Kidogo Terminal läuft auf allen mobilen Endgeräten (IOS und Android) und ist das neue Drehkreuz zwischen dir und deinen Kunden. Hier nimmst du die Bestellung an und informierst deine Kunden über den Lieferstatus in Echtzeit.
                            Bist du gerade stark beschäftigt? Verwende den Regler, um die Lieferzeit je nach Situation anzupassen.</p>
                        <p className="text-gray-2 mb-4 flex text-sm md:text-xl items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Anpassbarkeit der Lieferzeit</p>
                        <p className="text-gray-2 mb-4 flex text-sm md:text-xl items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Unterstützung von Rechnungsdrucker (z.B.; Epson TM)</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Verwaltung von Bestellungen (Abholung & Lieferung)</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Verwaltung der Verfügbarkeit individueller Produkte</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Unterstützung von mehreren Terminals gleichzeitig</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Automatisierte digitale Rechnungen für Kunden</p>
                        <button className="text-white font-semibold py-2 px-4 rounded left-14" style={titleStyle}>Jetzt Demo anfordern</button>
                        <div className="bg-white flex justify-center items-center mr-[400px] mt-8">
                            <Image src="/arrow_about.png" alt="arrow" height={80} width={80} priority className="transform scale-x-[-1]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="h-auto bg-white flex px-4">
                <div className="md:w-1/2 flex items-center justify-center mt-8">
                    <div className="mx-auto md:ml-28">
                        <h1 className="text-green-3 text-4xl font-semibold mb-6">Go Kidogo Scan App</h1>
                        <p className="text-gray-2 text-2xl mb-8">Jeder unserer wiederverwendbaren Behälter hat einen einzigartigen QR-Code, den man einfach mit der Go Kidogo App scannen kann. Im Handumdrehen kannst du die Mehrwegbehälter herausgeben und anschließend wieder zurücknehmen. So schließt sich der Kreis.</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Erhalten Sie die wiederverwendbaren Behälter</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Geben Sie die wiederverwendbaren Verpackungen heraus</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Scannen Sie die QR-Codes</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2 mb-5" />
                            Manuelle Eingabe von Kundennummern (z.B.: Für telefonische Bestellungen oder im Kommentarfeld von Drittanbietern)</p>
                        <button className="text-white font-semibold py-2 px-4 rounded left-14" style={titleStyle}>Jetzt Demo anfordern</button>
                        <div className="bg-white flex justify-center items-center ml-96">
                            <Image src="/arrow_about.png" alt="arrow" height={80} width={80} priority />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 md:flex hidden items-center justify-center mr-16">
                    <div className="mt-28">

                        <Image src="/gokidogotools-03.png" alt="gokidogotools-03" width={600} height={600} priority />
                    </div>
                </div>
            </div>

            {/* 4 */}

            <div className="h-auto bg-white flex px-4 py-8">
                <div className="w-1/2 md:flex hidden items-center justify-center mr-16">
                    <div className="mt-28">
                        <Image src="/gokidogotools-04.png" alt="gokidogotools-04" width={600} height={600} priority />
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center mt-8">
                    <div className="mx-auto mr-28">
                        <h1 className="text-green-3 text-4xl font-semibold mb-6">Go Kidogo Pilot App</h1>
                        <p className="text-gray-2 md:text-2xl text-lg mb-8">Bieten Sie Lieferungen an? Dann ist die Go Kidogo Pilot App das neue Tool für dein Bereitstellungsteam - deine Lieferanten. Die App ist so entwickelt, dass ein Login nicht erforderlich ist und auch externe Lieferanten die Bestellungen ebenfalls Essen ausliefern können.</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Einfaches Anmeldeverfahren erleichtert das Onboarding!</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Überblick der wichtigsten Informationen einer Bestellung</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Unterstützung für mehrere parallele Lieferungen</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Navigationsunterstützung</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Statusaktualisierung der Bestellung</p>
                        <button className="text-white font-semibold py-2 px-4 rounded left-14" style={titleStyle}>Jetzt Demo anfordern</button>
                        <div className="bg-white flex justify-center items-center mr-[450px] mt-8">
                            <Image src="/arrow_about.png" alt="arrow" height={80} width={80} priority className="transform scale-x-[-1]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 5 */}

            <div className="h-auto bg-white flex px-4">
                <div className="md:w-1/2 flex items-center justify-center mt-8">
                    <div className="mx-auto md:ml-28">
                        <h1 className="text-green-3 text-4xl font-semibold mb-6">Digitales Menü</h1>
                        <p className="text-gray-2 text-2xl mb-8">Du verfügst über keine Webseite oder möchtest ein ansehnliches digitales Menü haben? Wir können für dich ein Menü mit allen essentiellen Informationen im Handumdrehen erstellen. Ein Vorteil ist, dass das Menü immer auf dem neuesten Stand ist und sich in Echtzeit an die Daten des Go Kidogo-Marktplatzes anpasst. Somit kannst du dich ganz um deine Gäste kümmern und wir erledigen das Digitale.</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Immer auf dem neuesten Stand und in Echtzeit!</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Wahl einer Webadresse mit Marktpräsenz</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Aufnahme in Google Maps, Facebook, Instagram usw.</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Bestellungen über das Menü auf der Webseite initiieren</p>
                        <p className="text-gray-2 mb-4 flex items-center">
                            <Image src="/accept.svg" alt="bullets" height={16} width={16} priority className="mr-2" />
                            Ihre neue Website?</p>
                        <button className="text-white font-semibold py-2 px-4 rounded left-14" style={titleStyle}>Jetzt Demo anfordern</button>
                    </div>
                </div>
                <div className="w-1/2 md:flex hidden items-center justify-center mr-16">
                    <div className="mt-28">

                        <Image src="/gokidogotools-05.png" alt="gokidogotools-05" width={600} height={600} priority />
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Tools;