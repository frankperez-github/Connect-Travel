import DestinationCard from '../Components/DestinationCard'

function About_Us({regions}){
    return(
        <div className="AboutUs">
            <h1 className="AboutTitle">About CONNECT</h1>

            <p className="AboutUsP">As a family Travel Agency we are commited to making our clients feels an excellent experience before, during and after their trips; thus fulfilling our objective; please them.</p>

            <button className="ConnectButton ContactButton">Contact</button>

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
  
    const res = await fetch(`http://localhost:8000/`)
    const regions = await res.json()
  
    return {
      props: {
        regions
      }
  
      
    }
  }