import Container from "@/components/Container"
import PriceCard from "@/components/PriceCard"

const pricingPlans = [
    {
        "plan": "Basic Plan",
        "price": "₹350/year",
        "features": [
            "Powerful online protection",
            "Access to servers in 20 countries",
            "Unlimited bandwidth",
            "24/7 customer support",
            "No-logs policy",
            "1 device connection",
            "7-day money-back guarantee"
        ]
    },
    {
        "plan": "Standard Plan",
        "price": "₹700/year",
        "features": [
            "All features from the Basic Plan",
            "Ultra-fast server network (50+ countries)",
            "Multi-device support (up to 5 simultaneous connections)",
            "Dedicated streaming servers",
            "Priority customer support",
            "Additional security protocols",
            "Additional security services"
        ]
    },
    {
        "plan": "Premium Plan",
        "price": "₹1200/year",
        "features": [
            "All features from the Standard Plan",
            "Access to an extended server network (80+ countries)",
            "Unlimited device connections",
            "Ad-blocker and malware protection",
            "Port forwarding for advanced users",
            "Advanced customization options",
            "30-day money-back guarantee"
        ]
    }
]

const PricingPlan = () => {
    return (
        <Container id="pricing">
            <div className=" space-y-5">
                <h3 className="font-bold text-lg  md:text-3xl text-center">Choose your plan</h3>
                <p className=" text-grayColor text-sm leading-5 text-center">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            </div>
            <div className="mt-5 flex items-center gap-5 justify-center max-md:flex-col">
                {
                    pricingPlans.map((item) => (
                        <PriceCard key={item.plan} plan={item.plan} features={item.features} price={item.price} />
                    ))
                }
            </div>
            
        </Container>
    )
}

export default PricingPlan