import Image from 'next/image'
import DestinationCard from '../Components/DestinationCard'

function About_Us({regions}){
    return(
        <div className="AboutUs">
          <div className="PrincipalAbout">
            <div className="leftAbout">
              <Image src="/Character-reading.svg" width={270} height={270} />
            </div>

            <div className="rightAbout">
              <h2 className="AboutTitle Info">About</h2>
              <h1 className="AboutTitle Info">Connect Travel Corp.</h1>

              <p className="AboutUsP">As a family Travel Agency we are commited to making our clients feel an excellent experience before, during and after their trips; thus fulfilling our objective; please them.</p>

              <a href="mailto:connectvero@outlook.com">
                <button className="ConnectButton ContactButton">Contact</button>
              </a>
            </div>            
            
          </div>

          <div className="redSection">

            <h1>Find your next destination</h1>

              <div className='DestinationRow'>
              {regions.map(pack=><DestinationCard region={pack} key={pack.id}/>)}
              </div>
          </div>

        </div>
    );
}export default About_Us;

export const getServerSideProps = async()=> {
  
    const res = await fetch(`https://connectravelsetup.com/`)
    const regions = await res.json()
  
    return {
      props: {
        regions
      }
  
      
    }
  }