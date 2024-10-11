import type { Config } from "tailwindcss";

const config: Config = {
	daisyui: {
	  themes: ["light"],
	},
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  myBlackOne: "#000000",
		  myBlackTwo: "#171717",
		  myBlackThree: "#232323",
		  myMaroon: "#630000",
		  myMaroonRed: "#9C1C1C",
		  myBeige: "#EEEBDD",
		  myPeach: "#D8B6A4",
		  myGrayOne: "#E5E5E5",
		  myGrayTwo: "#EEEBDD",
		  myOrange: "#FB923C",
		  myGold: "#F89D13",
		},
		screens: {
			'custom-xl': '1540px',
		  'custom-xxl': '1740px', 
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
  };
  
  export default config;
  