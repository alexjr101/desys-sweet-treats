export default function WhyUs() {
    return <section>
        <img src="shapes/triangle.svg"/>
        <div className="bg-light-pink pt-8 pb-16">
            <h1 className=" text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Because no one does it like Desy</h1>
            <div className="flex flex-col px-9 sm:flex-row">
                <div className="flex sm:flex-col mb-8">
                    <img src="icons/truck.svg" className="mr-4 w-1/4 aspect-square"></img>
                    <div>
                        <h2 className="font-bold text-xl">Exceptional Delivery</h2>
                        <p className="text-sm text-gray">Delivery? Pickup? Catering? We've got you covered no matter where you are.</p>
                    </div>
                </div>
                <div className="flex sm:flex-col mb-8">
                    <img src="icons/chef.svg" className="mr-4 w-1/4 aspect-square"></img>
                    <div>
                        <h2 className="font-bold text-xl">100% Homemade</h2>
                        <p className="text-sm text-gray">All our treats are made from scratch with high-quality ingredients</p>
                    </div>
                </div>
                <div className="flex sm:flex-col">
                    <img src="icons/menu.svg" className="mr-4 w-1/4 aspect-square"></img>
                    <div>
                        <h2 className="font-bold text-lg">Classic Dishes</h2>
                        <p className="text-sm text-gray">Timeless treats that can be enjoyed by you and your loved ones</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="shapes/triangle.svg" className=" rotate-180"/>
    </section>
}