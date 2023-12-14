import Image from 'next/image'; 

const Uberuns = () => {
    return (
        <div>
            <div className="h-screen bg-white flex px-4">
                {/* content */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="mx-auto ml-28">
                        <h1 className="text-3xl font-semibold mb-4 text-green-3 mt-14">#Weprotest: Wie alles begann</h1>
                        <p className="mb-4 text-gray-2">
                            Eines Tages trafen wir uns das erste Mal in einer Programmierschule mitten in Bad Vilbel Dortelweil. Eigentlich wollten wir unterhaltsame Spiele programmieren. Nach den ersten 2-3 Treffen sind wir aber auf das Thema Plastik und die „Fridays-For-Future“ Demos gekommen. Wir waren uns alle einig, dass man sein Konsumverhalten überdenken müsse. Hierbei inbegriffen waren Technologien und Dienstleistungen.
                        </p>
                        <p className="mb-4 text-gray-2">
                            Für viele unserer täglichen Bequemlichkeiten würden wir in Zukunft einen hohen Preis zahlen.
                        </p>
                        <p className="mb-4 text-gray-2">
                            Die Diskussion war so bewegend und inspirierend, dass unser Mentor vorgeschlagen hat, wir sollen einen kleinen Schritt in Richtung einer nachhaltigeren Welt machen.
                        </p>
                        <p className="mb-4 text-gray-2">
                            Durch eine intensive Besprechung über Produktvorschläge kam uns die Idee, ein nachhaltiges Bestellportal zu programmieren. Go Kidogo ist ein gutes Beispiel dafür, dass wir nicht nur nach mehr Komfort in Bezug auf Technologien streben sollten, sondern auch nach einer gerechten und nachhaltigen Welt.
                        </p>
                        <p className="mb-4 text-gray-2">
                            Bei Go Kidogo legen wir viel Wert auf Qualität des Essens, Fairness gegenüber unseren Systempartner und nachhaltige Verpackungen.
                        </p>
                    </div>
                </div>

                {/* img */}
                <div className="w-1/2 flex items-center justify-center mr-20">
                    <div className="mt-20">
                        {/* Replace '/your-image.jpg' with the path to your image */}
                        <Image src="/uberuns.jpg" alt="Your Image" width={500} height={600} />
                    </div>
                </div>
            </div>
            <div className="h-auto bg-white">
                <div className="mx-28 text px-4 py-14">
                    <h1 className="text-3xl font-semibold mb-4 text-green-3">Go Kidogo - Kleine Schritte, große Veränderung</h1>
                    <p className="mb-4 text-gray-2 text-2xl">
                        Das Problem
                    </p>
                    <p className="mb-6 text-gray-2">
                        Im Durchschnitt produziert ein Deutscher über 220 Kg Verpackungsmüll im Jahr. Der Verbrauch von Verpackungen (außer-Haus-Verbrauch) in der Gastronomie stieg in den letzten 20 Jahren um 325%. Laut einer Statista-Prognose haben und werden in diesem Jahr mehr als 17.100.000 Menschen in Deutschland Online-Lebensmittellieferdienste nutzen. Im Jahre 2023 soll diese Zahl auf rund 21.600.000 Menschen steigen.
                    </p>
                    <p className="mb-4 text-gray-2 text-2xl">
                        Unsere Vorgehensweise
                    </p>
                    <p className="mb-4 text-gray-2">
                        Wir leben und unterstützen die Nachhaltigkeit; Unsere Restaurantpartner geben das Essen komplett verpackungsfrei raus. Mit unseren hochwertigen Mehrwegbehältern sagen wir billigen Einwegverpackungen den Kampf an. Go Kidogo steht für nachhaltiges Wirtschaften und Konsum. Damit ist unser Unternehmen Teil einer grünen Wirtschaftsbewegung. Mit diesem Versuch wollen wir helfen, unserer Umwelt die schwere Last, die auf ihr liegt, zu nehmen. Go Kidogo unterstützt seine Partnerrestaurants um nachhaltiger zu werden, weniger Verpackungsmüll zu reduzieren und Kosten zu sparen. Zusätzlich bieten wir unseren Partnergastronomien (-gastronomen?) sehr faire und transparente Preisangebote.
                    </p>
                    <p className="mb-4 text-gray-2">
                        Indem wir ein Pfandsystem für Take-Away Essen entworfen haben, ist Go Kidogo zu einem umweltfreundlichen Online-Bestellportal für Speisen geworden. Unsere wiederverwendbaren Behälter sind aus 100% qualitativ hochwertigem Plastik hergestellt und bis zu 22 mal recyclebar. Bei Einhaltung der Nutzungsbedingungen gelangen durch eine gute Hitzebeständigkeit so gut wie keine schädlichen Stoffe in das Essen, anders als bei Einwegverpackungen aus billigem Plastik oder Aluminium.
                    </p>
                    <p className="mb-4 text-gray-2 text-2xl">
                        Unsere Unternehmensphilosophie
                    </p>
                    <p className="mb-4 text-gray-2">
                        Nach den 17 Zielen für nachhaltige Entwicklung der Vereinten Nationen:
                    </p>
                    <ul className="list-disc ml-4">
                        <li className="mb-2 text-gray-900">
                            Hungere nicht: Nach Schätzungen der WHO landen jährlich rund 1.3 Milliarden Tonnen Essen im Müll. Gleichzeitig hungern etwa 821.6 Millionen Menschen. Ein Skandal! Wir möchten Essen vor dem Müll retten und so den Hunger bekämpfen.
                        </li>
                        <li className="mb-2 text-gray-900">
                            Weniger Ungleichheit: Wir wollen Gastronomen zu marktgerechten und fairen Konditionen ermöglichen, an der digitalen Wirtschaft teilzuhaben.
                        </li>
                        <li className="mb-2 text-gray-900">
                            Nachhaltiger Konsum: Mit Go Kidogo wollen wir Verbraucher dazu animieren, ihren Konsum zu überdenken. Bewusst genießen und Ressourcen schonen ist unsere Devise.
                        </li>
                        <li className="mb-4 text-gray-900">
                            Maßnahmen zum Klimaschutz: Unser Planet braucht Hilfe, so viel ist klar. Mit unserem Unternehmen versuchen wir, den stetig wachsenden Wirtschaftszweig der Essenlieferdienste klimaneutraler zu gestalten. Die Wissensvermittlung zum Thema Klimaschutz ist daher ein wichtiger Bestandteil unserer Arbeit.
                        </li>
                    </ul>
                    <p className="mb-4 text-gray-2 text-2xl">
                        Unser Team & Visionen
                    </p>
                    <p className="mb-4 text-gray-2">
                        Rinku und Alexander sind Geschäftsführer und Gesellschafter von Go Kidogo. Luis ist ebenfalls Gründer und leitet den Bereich Netzwerk und Partnerschaften. Angestellte von unserem Unternehmen. Joel, Luisa, Nico, Vincent, Ami, Valerie und Vinay sind die geistigen Mitbegründer von Go Kidogo. Insgesamt sind wir eine ambitionierte und passionierte Gruppe von jungen Leuten, welche die Gesellschaft zum Umdenken im Bezug auf Konsum anregen möchte. Unsere Mission ist es, die Welt zu einem nachhaltigeren und fairen Ort zu machen.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Uberuns;