import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <section className="text-gray-600 body-font mb-30">
      <div className="container px-6 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xltitle-font scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl text-myBlackOne mb-4">
            Our Services
          </h1>
          <div className="flex mt-4 justify-center">
            <div className="w-40 h-[0.4rem] rounded-full bg-[#9c1c1c] inline-flex" />
          </div>
        </div>
        
        {/* Service Cards */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center items-stretch">
          
          {/* Free Delivery */}
          <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center pt-6">
            <Image src="/free-shipping.png" alt='free delivery' width={170} height={170} className='rounded-full' />
            <div className="flex-grow">
              <h2 className="text-myBlackOne mb-3 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl capitalize">
                Free Delivery
              </h2>
              <p className="leading-relaxed text-base">
                Enjoy fast, free delivery on all orders above $500. Shop your favorites now and get them delivered straight to your doorstep! We ensure quick and reliable delivery, so you can focus on enjoying your new purchases.
              </p>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center px-8 pt-11">
            <Image src="/money-back.png" alt='money back guarantee' width={170} height={170} className='rounded-full' />
            <div className="flex-grow">
              <h2 className="text-myBlackOne mb-3 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl capitalize">
                Money Back Guarantee
              </h2>
              <p className="leading-relaxed text-base">
                Shop with confidence! We offer a full money-back guarantee on all purchases. If you're not completely satisfied with your order, return it within 30 days for a full refund. Your satisfaction is our priority.
              </p>
            </div>
          </div>
          
          {/* 24-Hour Services */}
          <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center pt-14">
            <Image src="/24-hours-services.png" alt='24-hour services' width={210} height={210} className='rounded-full' />
            <div className="flex-grow">
              <h2 className="text-myBlackOne mb-3 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl capitalize">
                24-Hour Services
              </h2>
              <p className="leading-relaxed text-base">
                We're here for you around the clock! Enjoy 24-hour customer support and services, ensuring your questions and needs are met anytime. Shop with confidence knowing help is just a click away, whenever you need it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
