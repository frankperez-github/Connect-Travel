import Link from 'next/link'
import Image from 'next/image'

const RegionCard = ({region}) => {
    return (
        <Link href="/Destination" passHref={true}>
            <div className="SpecificDestination">
                <Image alt="Destiny" width={1000} height={1000} src ={region.image}  />
            </div>
        </Link>
    )
}

export default RegionCard