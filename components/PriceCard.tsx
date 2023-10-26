import { Check } from "lucide-react"
import Image from "next/image"

interface priceProps {
    plan: string,
    features: string[],
    price: string,
}

const PriceCard = (
    {
        plan,
        features,
        price,
    }: priceProps
) => {
    return (
        <div className="shadow-lg p-3 shadow-primary/10 rounded-lg w-full relative">
            <Image src="/celeb.png" alt="celebration" className="absolute top-0 right-2" width={100} height={100} />
            <h4 className=" font-bold ">{price}</h4>
            <ul className="flex flex-col gap-2 mt-4">
                {
                    features.map((feature, index) => (
                        <li key={index} className="text-sm font-semibold flex items-center gap-2"><span className="rounded-full bg-green-400 text-white p-[2px] font-bold" ><Check size={10} /></span>{feature}</li>
                    ))
                }
            </ul>
            <div className="mt-4 text-center font-bold text-grayColor">
                {plan}
            </div>
            <div className="mt-5 flex justify-center items-center ">
                <button className=" p-2 rounded-lg w-fit bg-primary text-white font-bold hover:opacity-80 ">
                    Purchase
                </button>
            </div>
        </div>
    )
}

export default PriceCard