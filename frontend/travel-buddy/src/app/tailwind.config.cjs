/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 safelist: [],
 theme: {
     extend: {
         colors: {
            "branded": {
                "600": "#C6AFEE",
                 "900": "#7D43E1",
            },
         },
       
    }
 },
}