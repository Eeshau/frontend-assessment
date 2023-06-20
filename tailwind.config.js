/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'backgroundGrey': "#F3F4F6",
      'blueishBlack' : "#111827",
      'sidebarBlue' : "#1F2937",
      'sidebarGrey': "#9CA3AF",
      'sidebarWhite': "#F6F7F7",
      'sidebarProfileGrey': "#CACFD5",
      'sidebarProfileBgGrey': "#374151",
      'cardButtonGrey':  "#E5E7EB",
      'cardButtonRed': "#FF0000",
      'cardGreenBg':  "#DCFCE7",
      'cardGreen': "#206D3D",
      'white': "#FFFFFF",
      'cardGreyText': "#4E4E4E",
      'black': "#000000",
      'itemGreyText': "#6B7280",
      'itemBlueBlackText': "#1E2533",
      'itemGreyBlackText': "#474747",
      'itemGreyLine': "#E5E7EB",
      'listBoxGreyText': "#626060",
      'navButtonBlue': "#111827",
      'buttonNeonBlue': "#4F46E5"
    }
    
  },
  plugins: [],
}
