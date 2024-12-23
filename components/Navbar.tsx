import Image from "next/image";
import Link from "next/link";
import Logo from '../image/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ThemeToggler";
  
const Navbar = () => {
    return (  
        <div className="bg-primary dark:bg-slate-900 text-white py-2 px-5 flex justify-between">
            <Link href='/'>
                <Image src={Logo} alt="StocksWisper" width={40}/> 
                
            </Link>
            <h2 className="text-xl py-2">StocksWisper</h2>
            
            <div className="flex item-center">
                <ModeToggle/>
                {/* DropDown */}

            <DropdownMenu>
            <DropdownMenuTrigger>
                {/* Avatar */}
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-black">CN</AvatarFallback>
            </Avatar>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/profile'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/auth'>Logout</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>


            </div>

            


        </div>
    );
}
 
export default Navbar;