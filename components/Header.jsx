import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-1 xl:py-2 text-white bg-pink-50/20 px-20">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo/sign */}
            <Link href = "/">
            <h1 className="text-4xl font-semibold"> 
            HK <span className="text-accent">.</span></h1>
            </Link>
             {/* desktop nav & hire button */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
                <Button>
                   Hire me
                </Button>

                
            </Link>
            </div>
            {/* mobile nav */}
           <div className="xl:hidden">
            <MobileNav/>
           </div>
           
        </div>


        </header>
  )
}

export default Header