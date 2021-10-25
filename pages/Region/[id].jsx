import Form from "../../Components/Form"
import PackageCard from "../../Components/PackageCard"

export const getServerSideProps = async(context) => {

    const res = await fetch(`http://connect-venv.eba-ftshhm2s.us-west-2.elasticbeanstalk.com/${context.params.id}`)
    const region = await res.json()
    return {
        props: {
            region
        }
    }
}

const Region = ({region}) => {
    return (
    <div className="Destination">
            
    <div className="PicSection" style={{backgroundImage:`url(${region.cover})`}}>
        <h1>{region.name}</h1>
    </div>

    <div className="container">
       {region.packages.map(pack=><PackageCard pack={pack} key={pack.id}/>)}
    </div>
    <Form />
    

</div> 
    )
}

export default Region