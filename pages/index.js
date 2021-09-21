import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Form from './Components/Form'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Connect Travel Corp. </title>
        <meta name="description" content="Generated using create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="Main">

          <Form />
            
            <div className="formSection">

              <div className="form-div">

              </div>

              <div className="Buttons">
                
                  
                  <a href="#" className="LinkButton">
                    <div>
                      Weather
                    </div>
                  </a>
                
                  
                  <a href="#" className="LinkButton">
                    <div>
                      Passports
                    </div>
                  </a>
                
                  
                  <a href="#" className="LinkButton">
                    <div>
                      Currencies
                    </div>
                  </a>
                  
                  
                  <a href="#" className="LinkButton">
                    <div>
                      U.S. Time Zone
                    </div>
                  </a>
                
              </div>

            </div>
            
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

        </div>
      </main>

      
    </div>
  )
}
