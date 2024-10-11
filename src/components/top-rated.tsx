import TopRatedCard from "./top-rated-card"

function TopRated() {
    const TopRatingWomens = [
        {
            src: "/overcoat-3.webp",
            alt: "overcoat",
            title: "Soft Women's Overcoat",
            description: "Elegant soft women's overcoat offering warmth and style with a cozy, luxurious feel.",
            price: 230,
            oldPrice: 285,
            category: "tops",
            soloProduct: "soft-overcoat"
        },
        {
            src: "/women-shoes-1.webp",
            alt: "sandals",
            title: "Cinderella Heal Transparent Heal For Women",
            description: "Cinderella Heal Transparent Heal For Women &amp; Girls Silver Colour Stone Metal Buckle Metirial Transparent Glass.",
            price: 300,
            oldPrice: 400,
            category: "sandals-shoes",
            soloProduct: "transparent-sandals"
        },
        {
            src: "/jewlery-7.webp",
            alt: "ring",
            title: "One Diamond Ring",
            description: "Perfect for adding a touch of elegance to any outfit, this ring is a must-have for any jewellery collection.",
            price: 92,
            oldPrice: 104,
            category: "jewelry",
            soloProduct: "one-diamond-ring"
        },
        {
            src: "/makeup-3.webp",
            alt: "eye shadow",
            title: "Pearly Matte Earth Color Eyeshadow Palette",
            description: "Easy to apply, with even color and long-lasting makeup. Suitable for all skin types.",
            price: 250,
            oldPrice: 300,
            category: "makeup",
            soloProduct: "pearly-eyeshadow"
        },
        {
            src: "/top-2.webp",
            alt: "Printed T-Shirt for Women",
            title: "Printed T-Shirts for Women",
            description: "Comfortable, easy to wear, and available in a variety of styles.",
            price: 105,
            oldPrice: 150,
            category: "tops",
            soloProduct: "white-printed-shirt"
        },
        {
            src: "/purse-3.webp",
            alt: "mini purse",
            title: "Women's Crossbody Bag PU Leather",
            description: "Fashionable PU Leather crossbody bag with solid color and casual style.",
            price: 170,
            oldPrice: 185,
            category: "bags",
            soloProduct: "cross-body-bags"
        },
    ]

    const TopRatingMens = [
        {
            src: "/shirt-3.webp",
            alt: "shirt for boys",
            title: "Men's Simple Plain Casual Shirt Full Sleeve",
            description: "Summer collection full sleeve plain casual shirt with soft fabric and luxurious feel.",
            price: 180,
            oldPrice: 210,
            category: "shirts",
            soloProduct: "blue-mens-shirt"
        },
        {
            src: "/accessories-6.webp",
            alt: "watch for men",
            title: "Heuer Watch For Men",
            description: "Tag Heuer watch with genuine leather strap, designed for comfort and luxury.",
            price: 500,
            oldPrice: 605,
            category: "accessories",
            soloProduct: "heuer-watch"
        },
        {
            src: "/shoes-6.webp",
            alt: "shoes for men",
            title: "Breathable Mesh Casual Shoes",
            description: "Men's new summer breathable mesh casual shoes, odor-resistant with soft soles.",
            price: 324,
            oldPrice: 356,
            category: "shoes",
            soloProduct: "white-mesh-shoes"
        },
        {
            src: "/pant-2.webp",
            alt: "pants for men",
            title: "Classic Multi-Pocket Cargo Pants",
            description: "Men's casual loose fit drawstring cargo pants.",
            price: 150,
            oldPrice: 200,
            category: "pants",
            soloProduct: "multi-pocket-pants"
        },
        {
            src: "/accessories-3.webp",
            alt: "glasses",
            title: "Men&#39;s Retro Sunglasses",
            description: "Vintage rimless rectangle glasses with UV400 protection.",
            price: 35,
            oldPrice: 46,
            category: "accessories",
            soloProduct: "sun-glasses-black"
        },
        {
            src: "/shirt-6.webp",
            alt: "T-shirt",
            title: "Heather Grey T-Shirt for Men",
            description: "Top-quality T-shirt for men in heather grey.",
            price: 154,
            oldPrice: 165,
            category: "shirts",
            soloProduct: "heather-gray-shirt"
        },
    ]

    return (
        <div className="mt-[50px] mb-[50px]">
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl title-font scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl text-myBlackOne mb-4 capitalize">
                    Top Rated Collection
                </h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-72 h-[0.4rem] rounded-full bg-[#9c1c1c] inline-flex" />
                </div>
            </div>

            <div className="text-center mt-24 mb-8">
                <h2 className="sm:text-3xl title-font scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl text-myBlackThree mb-4 capitalize">
                    Women&#39;s Top Selling Items
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 gap-y-8 items-center">
                {TopRatingWomens.map((item, i) => (
                    <TopRatedCard
                        key={i}
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        category={item.soloProduct}
                        soloProduct={item.soloProduct}
                    />
                ))}
            </div>

            <div className="text-center mt-24 mb-8">
                <h2 className="sm:text-3xl title-font scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl text-myBlackThree mb-4 capitalize">
                     Men&#39;s Top Selling Items
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 gap-y-8 items-center">
                {TopRatingMens.map((item, i) => (
                    <TopRatedCard
                        key={i}
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        category={item.soloProduct}
                        soloProduct={item.soloProduct}
                    />
                ))}
            </div>
        </div>
    )
}

export default TopRated
