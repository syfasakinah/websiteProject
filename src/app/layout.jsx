import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css"
import Image from "next/image";
import LogoBni from "../../public/Image/logo.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BNI46",
  description: "Melayani Negeri, Kebanggan Bangsa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-screen-xl mx-auto">
          <div className="font-bold shadow-2xl flex justify-center rounded-b-full hover:h-16 border-2 border-orange-400 bg-orange-700 text-white max-w-screen">
            <Link 
            className="p-2 hover:ease-in"
            href={'/about'}>About</Link>
            <Link 
            className="p-2"
            href={'/product'}>Product</Link>
            <Link 
            className="p-2"
            href={'/teams'}>Teams</Link>
          </div>
          <Link href={"/"}>
            <Image 
              src={LogoBni}
              alt="LogoBni"
              width={200}
              height={200}
              className="shadow-xl rounded-2xl bg-transparent cursor-pointer object-contain ml-auto mr-auto"
            />
          </Link>
          <h2 className=" font-bold text-center text-thin text-orange-700 ">Melayani Negeri, Kebanggan Bangsa</h2>
        </header>
        <main className=" bg-teal-600 shadow-2xl rounded-3xl max-w-screen-xl mx-auto p-6">{children}</main>
        <div>
        <footer className="shadow-2xl rounded-r text-center mt-36">
          <p className="font-bold text-white bg-teal-600 bg-blend-screen p-6">© 2024 BNI46-Project</p>
        </footer>
        </div>
      </body>
    </html>
  );
}
