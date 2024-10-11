import React from 'react'
import TopRatedCard from '../../components/top-rated-card'

// import TopRatedCard from ""

function Category() {
  const TopRatingWomens = [
    {
      src: "/top-1.webp",
      alt: "sandals",
      title: "CINDERELLA Heal Transparent Heal For Women",
      description: " Transparent Heal For Women & Girls Silver Colour Stone Metal Buckle Metirial Transparent Glass ",
      price: 300,
      oldPrice: 400,
      category:"tops",
      soloProduct:"white-kitten-shirt"
    },
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
      src: "/top-5.webp",
      alt: "sandals",
      title: "CINDERELLA Heal Transparent Heal For Women",
      description: " Transparent Heal For Women & Girls Silver Colour Stone Metal Buckle Metirial Transparent Glass ",
      price: 300,
      oldPrice: 400,
        category:"tops",
      soloProduct:"black-shirt"
    },
    {
      src: "/top-4.webp",
      alt: "ring",
      title: " one diamond ring",
      description: "Perfect for adding a touch of elegance to any outfit, this ring is a must-have for any jewellery collection",
      price: 92,
      oldPrice: 104,
        category:"tops",
      soloProduct:"lining-shirt"
    },
    {
      src: "/top-3.webp",
      alt: "eye shaow",
      title: "Pearly Matte Earth Color Eyeshadow Palette Shiny Sequins Shadow Eye Pigments Long Lasting Makeup",
      description: " Easy to apply, with even color and long-lasting makeup. Rich in color, practical and versatile, making eye makeup more eye-catching. Specification: Suitable for skin type: All skin type.",
      price: 250,
      oldPrice: 300,
        category:"tops",
      soloProduct:"green-shirt"
    },
    {
      src: "/top-2.webp",
      alt: "",
      title: "Printed T-Shirts for Womens",
      description: "comfortable, easy to wear, and come in a range of styles to suit any personal preference or fashion style.",
      price: 105,
      oldPrice: 150,
        category:"tops",
      soloProduct:"white-printed-shirt"
    },
    {
      src: "/overcoat-2.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"leopard-overcoat"
    },

    {
      src: "/top-6.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"pink-shirt"
    },
    {
      src: "/top-7.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"black-summer-shirt"
    },
    {
      src: "/top-8.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"light-pink-shirt"
    },
    {
      src: "/overcoat-5.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"black-jacket-women"
    },
    {
      src: "/top-9.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"gray-soft-shirt"
    },
    {
      src: "/top-10.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"butterfly-shirt"
    },
    {
      src: "/overcoat-1.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"overcoat"
    },
    {
      src: "/top-11.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"white-unicorn-shirt"
    },
    {
      src: "/top-12.webp",
      alt: "mini purse",
      title: "Women Crossbody Bags Fashionable PU Leather Zipper Solid Color ",
      description: "Leather Zipper Solid Color Bag Casual Ladies Bucket Shoulder Shell Handbags.",
      price: 170,
      oldPrice: 185,
        category:"tops",
      soloProduct:"black-T-shirt"
    },
  ]
  return (
    <div className='mt-[50px] mb-[50px]'>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl text-myBlackOne mb-4 capitalize">
          tops/shirts
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-36 h-[0.4rem] rounded-full bg-[#9c1c1c] inline-flex" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 gap-y-8 md:px-auto custom-xl:grid-cols-4 custom-xl:px-28 custom-xxl:px-[12.3rem] px-auto items-center">
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
              category={items.category}
              soloProduct={items.soloProduct}

            />
          ))
        }
      </div>
    </div>
  )
}

export default Category
