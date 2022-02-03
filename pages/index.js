import Head from 'next/head'
import Form from '../Components/Form'
import DestinationCard from '../Components/DestinationCard'
import Image from 'next/image'

export default function Home({regions}) {
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
              <h1>Book your next <br/>travel experience <br/>with us!</h1>

              <p>Search for flights, hotels, cruisers and more!</p>

              <button className='BookLabel'>
                <p>Click and Book</p>
                
                <div className='Arrow'>
                  <Image alt="" width={1000} height={1000} src ="/Arrow.svg"  />
                </div>
              </button>
            </div>

            <h1 className='Info'>Useful information</h1>

            <div className="Buttons">
              <a href="https://weather.gov"  rel="noreferrer" target="_blank" className="LinkButton">
                <div>
                  Weather
                </div>
              </a>
            
              
              <a href="https://travel.state.gov/content/travel/en/passports/how-apply.html"  rel="noreferrer" target="_blank" className="LinkButton">
                <div>
                  Passports
                </div>
              </a>
            
              
              <a href="https://x-rates.com/table/?from=USD&amount=1"  rel="noreferrer" target="_blank" className="LinkButton">
                <div>
                  Currencies
                </div>
              </a>
              
              
              <a href="https://www.time.gov"  rel="noreferrer" target="_blank" className="LinkButton">
                <div>
                  U.S. Time Zone
                </div>
              </a>
            </div>

            <div id='InsuranceMob' className="Insurance-div">
              <a href="https://www.usa-assist.com/en/id/826" rel="noreferrer" title="Get your Travel Insurance" target="_blank">
                <img src="https://www.usa-assist.com/images/banner_urgent_en.gif" alt="Get your Travel Insurance" border="0"/>
              </a>
            </div>
            <div id='InsuranceDesk' className="Insurance-div">
              <a href="https://www.usa-assist.com/en/id/826" rel="noreferrer" title="Get your Travel Insurance" target="_blank">
                <img src="https://www.usa-assist.com/images/banner_wonderful_en.gif" alt="Get your Travel Insurance" border="0"/>
              </a>
            </div>
            
            <div className="redSection">

            <h1>Find your next destination</h1>

            <div className='DestinationRow'>
            {regions.map(pack=><DestinationCard region={pack} key={pack.id}/>)}
            </div>
           
        </div>
            
        </div>
      </main>

      
    </div>
  )
}


export const getServerSideProps = async()=> {
  
  const res = await fetch(`http://localhost:8000/`)
  const regions = await res.json()

  return {
    props: {
      regions
    }

    
  }
}

