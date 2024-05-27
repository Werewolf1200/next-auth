import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Nav />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
