import TopRatedCard from "./top-rated-card"


function TopRated() {
    const TopRatingWomens = [
        {
            src: "/overcoat-3.webp",
            alt: "overcoat",
            title: "Soft Womens Over Coat",
            description: "Elegant soft women's overcoat offering warmth and style with a cozy, luxurious feel.",
            price: 230,
            oldPrice: 285,
              category:"tops",
      soloProduct:"soft-overcoat"
        },
        {
            src: "/women-shoes-1.webp",
            alt: "sandals",
            title: "CINDERELLA Heal Transparent Heal For Women",
            description: " Transparent Heal For Women & Girls Silver Colour Stone Metal Buckle Metirial Transparent Glass ",
            price: 300,
            oldPrice: 400,
              category:"sandals-shoes",
      soloProduct:"transparent-sandals"
        },
        {
            src: "/jewlery-7.webp",
            alt: "ring",
            title: " one diamond ring",
            description: "Perfect for adding a touch of elegance to any outfit, this ring is a must-have for any jewellery collection",
            price: 92,
            oldPrice:104,
              category:"jewlery",
      soloProduct:"one-diamond-ring"
        },
        {
            src: "/makeup-3.webp",
            alt: "eye shaow",
            title: "Pearly Matte Earth Color Eyeshadow Palette Shiny Sequins Shadow Eye Pigments Long Lasting Makeup",
            description: " Easy to apply, with even color and long-lasting makeup. Rich in color, practical and versatile, making eye makeup more eye-catching. Specification: Suitable for skin type: All skin type.",
            price: 250,
            oldPrice:300,
              category:"makeup",
      soloProduct:"pearly-eyeshadow"
        },
        {
            src: "/top-2.webp",
            alt: "",
            title: "Printed T-Shirts for Womens",
            description: "comfortable, easy to wear, and come in a range of styles to suit any personal preference or fashion style.",
            price: 105,
            oldPrice:150,
              category:"tops",
      soloProduct:"white-printed-shirt"
        },
        {
            src: "/purse-3.webp",
            alt: "mini purse",
            title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
            description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
            price: 170,
            oldPrice:185,
              category:"bags",
      soloProduct:"cross-body-bags",
        },
        
    ]
    const TopRatingMens = [
        {
            src: "/shirt-3.webp",
            alt: "shirt for boys",
            title: "Men's simple plain casual shirt full sleeve ",
            description: "Summer collection full sleeve plain casual shirt soft fabric , luxurious feel.",
            price: 180,
            oldPrice: 210,
              category:"shirts",
      soloProduct:"blue-mens-shirt"
        },
        {
            src: "/accessories-6.webp",
            alt: "watch for men",
            title: " Heuer Watch For Men, For Personal Use",
            description: " Designed with comfort in mind, this Tag Heuer watch is adorned with a genuine leather strap that molds seamlessly to your wrist, providing a luxurious feel with every wear. ",
            price:500,
            oldPrice: 605,
              category:"accessories",
      soloProduct:"heuer-watch"
        },
        {
            src: "/shoes-6.webp",
            alt: "shoes for men",
            title: " breathable mesh casual shoes",
            description: "Men's shoes, new summer breathable mesh casual shoes, odor resistant soft sole, versatile sports shoes, trendy shoes for men.",
            price: 324,
            oldPrice:356,
              category:"shoes",
      soloProduct:"white-mesh-shoes"
        },
        {
            src: "/pant-2.webp",
            alt: " pant for men ",
            title: "Classic Design Multi Pocket Cargo Pants",
            description: " Men's Casual Loose Fit Drawstring Cargo Pants ",
            price: 150,
            oldPrice:200,
              category:"pants",
      soloProduct:"multi-pocket-pants"
        },
        {
            src: "/accessories-3.webp",
            alt: "glasses",
            title: "Men's Retro Sunglasses for Men",
            description: "Tinted Lens Metal Frame Vintage Rimless Rectangle Glasses UV400 Protection.",
            price: 35,
            oldPrice:46,
              category:"accessories",
      soloProduct:"sun-glasses-black"
        },
        {
            src: "/shirt-6.webp",
            alt: "T-shirt",
            title: "T-Shirt for Men Heather Grey ",
            description: "The T-Shirt & Shirts category path ensures that you are getting a top-quality product",
            price: 154,
            oldPrice:165,
              category:"shirts",
      soloProduct:"heather-gray-shirt"
        },
        
    ]
    return (
        <div className='mt-[50px] mb-[50px]'>
            <div className="text-center mb-20">
                <h1 className="sm:text-3xltitle-font scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl text-myBlackOne mb-4 capitalize">
                    tops rated collection
                </h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-72 h-[0.4rem] rounded-full bg-[#9c1c1c] inline-flex" />
                </div>
            </div>

            <div className="text-center mt-24 mb-8">
                <h2 className="sm:text-3xl title-font scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl text-myBlackThree mb-4 capitalize">
                    women's tops selling items
                </h2>
                
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 gap-y-8 md:px-auto custom-xl:px-64 px-auto items-center">
                {
                    TopRatingWomens.map((items, i) => (
                        <TopRatedCard
                            key={i}
                            src={items.src}
                            alt={items.alt}
                            title={items.title}
                            description={items.description}
                            price={items.price}
                            oldPrice={items.oldPrice}
                            category={items.soloProduct}
                            soloProduct={items.soloProduct}
                        />
                    ))
                }
            </div>
            <div className="text-center mt-24 mb-8">
                <h2 className="sm:text-3xl title-font scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl text-myBlackThree mb-4 capitalize">
                    men's tops selling items
                </h2>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 gap-y-8 md:px-auto custom-xl:px-64 px-auto items-center">
                {
                    TopRatingMens.map((items, i) => (
                        <TopRatedCard
                            key={i}
                            src={items.src}
                            alt={items.alt}
                            title={items.title}
                            description={items.description}
                            price={items.price}
                            oldPrice={items.oldPrice}
                            category={items.soloProduct}
                            soloProduct={items.soloProduct}
                        />
                    ))
                }
            </div>




        </div>
    )
}

export default TopRated

