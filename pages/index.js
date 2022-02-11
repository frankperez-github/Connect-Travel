import Head from 'next/head'
import Form from '../Components/Form'
import DestinationCard from '../Components/DestinationCard'
import Image from 'next/image'



export default function Home({regions}) {
  

  function animationArrow(){
    document.getElementById("Arrow").classList.add('ArrowMove')
  }
  function ReturnArrow(){
    document.getElementById("Arrow").classList.remove('ArrowMove')
  }

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
              <a href='https://connecttravelcorp.clickandbook.com/' rel="noreferrer" target="_blank">

                <button onMouseLeave={ReturnArrow} onMouseOver={animationArrow} className='BookLabel'>
                    <p >Click and Book</p>
                    
                    <div id='Arrow' className='Arrow'>
                      <Image alt="" width={1000} height={1000} src ="/Arrow.svg"  />
                    </div>
                </button>

              </a>
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
            <img src="https://www.usa-assist.com/images/banner_en_300x250.gif" alt="Get your Travel Insuranc" border="0"/>
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
  
  const res = await fetch(`https://connectravelsetup.com/`)
  const regions = await res.json()

  return {
    props: {
      regions
    }
  }
}

