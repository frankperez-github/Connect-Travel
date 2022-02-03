import Form from "../../Components/Form"
import PackageCard from "../../Components/PackageCard"

export const getServerSideProps = async(context) => {

    const res = await fetch(`http://localhost:8000/${context.params.id}`)
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