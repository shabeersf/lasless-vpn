"use client"
import Container from "@/components/Container"
import TestCard from "@/components/TestCard"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};



const testimonials = [
    {
        "id": 1,
        "name": "Cart Ellwand",
        "city": "Paris",
        "country": "France",
        "rating": 5,
        "review": "I recently visited Paris and used this VPN. It made my online experience hassle-free and secure. The interface is incredibly user-friendly, and I was able to access content without any issues. Highly recommended for anyone traveling to France or elsewhere!",
        "image": "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-06-03 08:26:27"
    },
    {
        "id": 2,
        "name": "Nanni MacKereth",
        "city": "Rome",
        "country": "Italy",
        "rating": 4,
        "review": "I've tried several VPN apps during my travels in Italy, but this one stands out. It's lightning-fast and helped me bypass geo-restrictions with ease. It made my online experience much smoother.",
        "image": "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2022-11-22 03:12:11"
    },
    {
        "id": 3,
        "name": "Iseabal Luparti",
        "city": "Rome",
        "country": "Italy",
        "rating": 4,
        "review": "My trip to Italy was made even better thanks to this VPN. Its user-friendly interface and reliability were a big plus. Highly recommended for your Italian adventures!",
        "image": "https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-06-09 18:18:30"
    },
    {
        "id": 4,
        "name": "Sophey Sorro",
        "city": "Los Angeles",
        "country": "Tunisia",
        "rating": 4,
        "review": "During my stay in Los Angeles, I used this VPN. It's impressively fast and helped me access content without any hiccups. It's a standout choice for fast and reliable online experiences.",
        "image": "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-03-31 00:17:18"
    },
    {
        "id": 5,
        "name": "Darcey Derill",
        "city": "Moscow",
        "country": "Nigeria",
        "rating": 1,
        "review": "Although I was in Moscow, I used this VPN for a while. It didn't meet my expectations, and the speed was disappointing. I'd recommend exploring other options for better performance.",
        "image": "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2022-11-19 08:18:19"
    },
    {
        "id": 6,
        "name": "Donielle Gillebride",
        "city": "Los Angeles",
        "country": "China",
        "rating": 2,
        "review": "I used this VPN during my stay in Los Angeles, and it was disappointing. The speed was sluggish, and I encountered connectivity issues. I'd suggest looking for a more reliable option.",
        "image": "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2022-11-19 17:23:29"
    },
    {
        "id": 7,
        "name": "Eugenius Muckian",
        "city": "Berlin",
        "country": "Germany",
        "rating": 5,
        "review": "I've been using this VPN in Berlin, and it's been a game-changer. The connection is always reliable, and I feel much more secure online. It's a must-have for anyone concerned about online privacy.",
        "image": "https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-10-06 17:12:41"
    },
    {
        "id": 8,
        "name": "Ange Meeson",
        "city": "London",
        "country": "United Kingdom",
        "rating": 2,
        "review": "I've used this VPN in London, and while the interface is user-friendly, it didn't meet my expectations in terms of speed and performance. There might be better options available.",
        "image": "https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-05-08 22:00:55"
    },
    {
        "id": 9,
        "name": "Kalle Dicke",
        "city": "Toronto",
        "country": "Canada",
        "rating": 5,
        "review": "This VPN is my go-to in Toronto. The interface is user-friendly, and it has never let me down. Highly recommended for a seamless and secure online experience.",
        "image": "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-07-09 00:34:17"
    },
    {
        "id": 10,
        "name": "Ron Drain",
        "city": "New York",
        "country": "USA",
        "rating": 1,
        "review": "I've been using this VPN for a while during my time in New York. Unfortunately, it didn't meet my expectations, and the speed was quite slow. I would recommend exploring other options for better performance.",
        "image": "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "date": "2023-07-18 06:25:13"
    }
];


const items = testimonials.map((item) => (
    <TestCard
        key={item.id}
        image={item.image}
        review={item.review}
        rating={item.rating}
        city={item.city}
        country={item.country}
        name={item.name}
        date={item.date}
    />
));

const Testimonial = () => {
    return (
        <Container id="maps">
            <div className=" space-y-5">
                <h3 className="font-bold text-lg  md:text-3xl text-center">Trusted by thousands of
                    happy customers</h3>
                <p className=" text-grayColor text-sm leading-5 text-center">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            </div>
            <div className="mt-5 flex  gap-5 items-center justify-center">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={2000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    disableButtonsControls
                    responsive={responsive}
                />
            </div>

        </Container>
    )
}

export default Testimonial