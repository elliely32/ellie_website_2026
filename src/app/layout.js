import { Roboto } from "next/font/google";
import "./styles/globals.css";

import NavBar from "./components/navBar";
//import Footer from "./components/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ellie "Sketchie" Ly',
  description: "Ellie's Portfolio Website",
  icons: {
    icon: [
      {
        url: "/portfolioAssets/icons/icon.png",
        href: "/portfolioAssets/icons/icon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
