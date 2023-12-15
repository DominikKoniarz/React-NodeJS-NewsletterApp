/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				color1: "#5f96f5",
				boxColor: "#363A45",
				color2: "#c1bccf",
			},
			fontSize: {
				xxs: "10px",
			},
		},
	},
	plugins: [],
};
