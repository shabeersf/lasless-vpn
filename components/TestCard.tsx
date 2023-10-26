import { Star } from "lucide-react"
import Image from "next/image"
const dateFns = require('date-fns');

interface ReviewProps {
    image: string,
    review: string,
    rating: number,
    city: string,
    country: string,
    name: string,
    date: string,

}
const TestCard = ({
    image,
    review,
    rating,
    city,
    country,
    name,
    date,
}: ReviewProps) => {
    const formattedDate = dateFns.format(new Date(date), "do MMMM yyyy hh:mm a");
    return (
        <div className="w-full   p-3 hover:scale-105 duration-300 space-y-5">
            <div className="border p-3 rounded-md space-y-5 min-h-[150px]">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3 ">
                        <div  >
                            <Image src={image} alt={name} width={52} height={52} className=" object-cover h-12 w-12 rounded-md" />
                        </div>
                        <div className="flex flex-col justify-start text-sm gap-1">
                            <h5 className=" font-semibold">{name}</h5>
                            <p>{city}, {country}</p>
                        </div>
                    </div>
                    <div className="text-sm flex gap-1 items-center">
                        <span className=" font-semibold">{rating}</span> <Image src={"/star.svg"} alt={name} width={52} height={52} className=" object-cover h-3 w-3 rounded-md" />
                    </div>
                </div>
                <div className=" text-sm text-grayColor">
                    {review.length > 120 ? review.slice(0, 120) + '...' : review}
                </div>
                <div className=" text-xs">
                    {formattedDate}
                </div>
            </div>
        </div>
    )
}

export default TestCard