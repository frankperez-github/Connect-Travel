import Link from 'next/link'
import Image from 'next/image'

const RegionCard = ({region}) => {
 return(
    <Link passHref={true} href={`/region/${region.id}`}>
    <div className="SpecificDestination">
        <Image alt="Destiny" width={1000} height={1000} src={region.icon}/>
    </div>
</Link>
 )
}

export default RegionCard