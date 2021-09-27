import Head from 'next/head'
import Form from './Components/Form'
import RedSection from './Components/RedSection'

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

            <div className="Insurance-div">
              <a href="https://www.usa-assist.com/en/id/826" rel="noreferrer" title="Get your Travel Insurance" target="_blank">
                <img src="https://www.usa-assist.com/images/banner_urgent_en.gif" alt="Get your Travel Insuranc" border="0"/>
              </a>
            </div>
            
            <RedSection />
            
        </div>
      </main>

      
    </div>
  )
}
