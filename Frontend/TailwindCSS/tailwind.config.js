/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		fontFamily: {
			epilogue: ["Epilogue"],
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1048px",
			xl: "1440px",
		},
		extend: {
			colors: {
				almostWhite: " hsl(0, 0%, 98%)",
				mediumGray: "hsl(0, 0%, 41%)",
				almostBlack: "hsl(0, 0%, 8%)",
				overlay: "rgba(0,0,0,0.6)",
			},
		},
	},
	plugins: [],
};
