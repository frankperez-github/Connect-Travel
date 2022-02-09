import Link from "next/link"
import Image from "next/image"


function DestinationCard ({region}){
    return(
        <div className="Destinations">

            <Link href={`/Region/${region.id}`} passHref={true}>
                <div className="SpecificDestination">
                    <Image alt="Destiny" width={1000} height={1000} src={region.icon}/>
                
                    <div className="SpecificName">
                        <p>
                            {region.name}
                        </p>
                    </div>
                </div>
            </Link>

        </div>
    )
}
export default DestinationCard;