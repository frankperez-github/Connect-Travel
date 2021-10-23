import Form from "../../Components/Form"

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
    <div className="Destination">
            
    <div className="PicSection">
        <h1>{region.name}</h1>
    </div>

    <div className="container">
       
    </div>
    <Form />
    

</div> 
}

export default Region