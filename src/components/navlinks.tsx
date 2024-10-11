"use client";

import * as React from "react"
import Link from "next/link"

import { cn } from "../lib/utils"
// import { Icons } from "@/components/iconse
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"

const womens: { title: string; href: string; description: string }[] = [
  {
    title: "Tops/Shirts",
    href: "/tops",
    description:
      "Trendy tops that fit your everyday style.",
  },
  {
    title: "Jeans/Pants",
    href: "/jeans",
    description:
      "Comfortable jeans , perfect for you.",
  },
  {
    title: "Jewelry/Accessories",
    href: "/jewlery",
    description:
      "Beautiful accessories to complete your outfit.",
  },
  {
    title: "Makeup/Beauty Products",
    href: "/makeup",
    description: "Enhance your beauty, embrace your glow.",
  },
  {
    title: "shoes",
    href: "/sandal-shoes",
    description:
      "Stylish shoes designed for comfort and fashion.",
  },
  {
    title: "Bags/Purses",
    href: "/bags",
    description:
      "Trendy bags for every occasion and need.",
  },
]


const mens: { title: string; href: string; description: string }[] = [
  {
      title: "Shirts/T-Shirts",
      href: "/shirts",
      description: "Stylish shirts and t-shirts for every occasion.",
  },
  {
      title: "Jeans/Pants",
      href: "/pants",
      description: "Comfortable jeans for all-day wear.",
  },
  {
      title: "Shoes",
      href: "/shoes",
      description: "Trendy shoes for every step.",
  },
  {
      title: "Accessories",
      href: "/accessories",
      description: "Add style with the perfect accessories.",
  },
];

  
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuTrigger >Womens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] bg-myGrayOne text-myBlackOne ">
              {womens.map((womens) => (
                <Link  key={womens.title} href={womens.href}>
                <ListItem
                  title={womens.title}>
                 {womens.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem >
          <NavigationMenuTrigger >Mens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] bg-myGrayOne text-myBlackOne ">
              {mens.map((mens) => (

                <Link key={mens.title} href={mens.href}>
                <ListItem
                  title={mens.title}>
                 {mens.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors  group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myMaroon">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-orange-800">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
