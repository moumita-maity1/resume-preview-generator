/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      sm : "480px",
      md : "768px",
      lg : "1024px"
    },
    extend: {
      colors: {
        yellowColor: '#e6b800',
        redColor: '#ff3333',
      },
      container : {
                center : true,
                padding : {
                  DEFAULT : '1rem',
                  sm : '1.5rem'
                }  
    },
  },
  plugins: [],
}
}
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./**/*.{html,js}"],
//   darkMode: 'selector',
//   theme: {
//     screens : {
//       sm : "480px",
//       md : "768px",
//       lg : "1024px"
//     },
//     extend: {
//       // custom color
//       colors: {
//         primaryColor: '#010a5e',
//         primiaryColorLight : '#010d78',
//         secondaryColor : '#FFCC00',
//         paragraphColor : '#c0c0c0',
//         whiteColor : '#fff',
//         blackColor : '#000',
//         greenColor : '#007936',
//         redColor : '#cc3433',
//         darkColor : '#000',
//         darlColorLight : '#171717'
//       },

//       keyframes:{
//         move:{
//           "50%": {transform : "translateY(-1rem)"}
//         }
//       },

//       animation:{
//         "movingY": "move 2s linear infinite"
//       },

//       container : {
//         center : true,
//         padding : {
//           DEFAULT : '1rem',
//           sm : '1.5rem'
//         } 
//       },
//       fontFamily: {
//         oswald : ['Oswald', 'sans-serif'],
//         dmsans : ['DM Sans','sans-ser']
//       }
//     },
//   },
//   plugins: [],
// }