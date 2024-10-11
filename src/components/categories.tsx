import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Categories() {
  return (

    <div className="container px-6 py-12 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl text-myBlackOne mb-4">
          Categories
        </h1>
        <div className="flex mt-4 justify-center">
        <div className="w-32 h-[0.4rem] rounded-full bg-[#9c1c1c] inline-flex" />
        </div>
      </div>
      <div className="text-center mb-6 lg:mb-10">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-myBlacThree mb-4">
          Womens Categories
        </h1>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6">

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/tops'}>
            <Image src="/category-1.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Tops/Shirts</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Tops/Shirts</div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/jeans'}>
            <Image src="/category-2.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Jeans/Pants</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center  text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Jeans/Pants</div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/makeup'}>
            <Image src="/category-3.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Makeup Products</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Makeup Products</div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/bags'}>
            <Image src="/category-4.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Bags/Purse</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Bags/Purse</div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/sandals-shoes'}>
            <Image src="/category-6.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Sandals/shoes</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Sandals/Shoes</div>
          </Link>
          </div>
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={'/accessories'}>
              <Image src="/category-5.webp" alt="" height={350} width={350}
                className="rounded-xl duration-500 group-hover:scale-125" />
              <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Accessories</div>
              <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Accessories</div>
            </Link>
          </div>
        </div>
        <div className="text-center mb-6 mt-20 lg:mt-24 lg:mb-10">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-myBlacThree mb-4">
          Mens Categories
        </h1>
        </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/shirts'}>
            <Image src="/category-7.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">T-shirts/Shirts</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">T-shirts/Shirts</div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/pants'}>
            <Image src="/category-8.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Jeans/Pants</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center  text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Jeans/Pants</div>
          </Link>
        </div>


        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/accessories'}>
            <Image src="/category-9.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Accessories</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Accessories</div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={'/shoes'}>
            <Image src="/category-10.webp" alt="" height={350} width={350}
              className="rounded-xl duration-500 group-hover:scale-125" />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-myBlackThree/80 text-white w-full ">Shoes</div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-myBlackThree/80 text-white w-full">Shoes</div>
          </Link>
          </div>
         
        </div>
      </div>

      )
}

      export default Categories
