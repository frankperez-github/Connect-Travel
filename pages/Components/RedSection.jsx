import Image from 'next/image'
import Link from 'next/link'

function RedSection (){
    return(
        <div className="redSection">

            <h1>Find your next destination</h1>

            <div className="Destinations">

                <Link href="/Destination">
                    <div className="SpecificDestination">
                        <Image alt="Destiny" width={1000} height={1000} src="/South_America.svg" />
                    </div>
                </Link>

                <Link href="/Destination">
                    <div className="SpecificDestination">
                    <Image alt="Destiny" width={1000} height={1000} src="/Caribbean.svg" />
                    </div>
                </Link>

                <Link href="/Destination">
                    <div className="SpecificDestination">
                    <Image alt="Destiny" width={1000} height={1000} src="/Mexico_City.svg" />
                    </div>
                </Link>

                <Link href="/Destination">
                    <div className="SpecificDestination">
                    <Image alt="Destiny" width={1000} height={1000} src="/Europe.svg" />
                    </div>
                </Link>

                <Link href="/Destination">
                    <div className="SpecificDestination">
                    <Image alt="Destiny" width={1000} height={1000} src="/Asia.svg" />
                    </div>
                </Link>

            </div>

            <div className="DestinationsName">

                <div className="SpecificName">
                    <p>
                    South America
                    </p>
                </div>

                <div className="SpecificName">
                    <p>
                    Caribbean
                    </p>
                </div>

                <div className="SpecificName">
                    <p>
                    Mexico City
                    </p>
                </div>

                <div className="SpecificName">
                    <p>
                    Europe
                    </p>
                </div>

                <div className="SpecificName">
                    <p>
                    Asia
                    </p>
                </div>

            </div>

        </div>

    );
}export default RedSection;