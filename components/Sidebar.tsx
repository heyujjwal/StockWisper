import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link";
import { LayoutDashboard,User,Settings,Newspaper,Folder,BarChart} from 'lucide-react'
const Sidebar = () => {
    return ( 
        <Command className='bg-secondary rounded-none'>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                <CommandItem>
                    <LayoutDashboard className="mr-2 h-4 w-4"/>
                    <Link href='/'>Dashboard</Link>
                </CommandItem>
                <CommandItem>
                    <Newspaper className="mr-2 h-4 w-4"/>
                    <Link href='#'>Posts</Link>
                </CommandItem>
                <CommandItem>
                    <Folder className="mr-2 h-4 w-4"/>
                    <Link href='#'>Categories</Link>
                </CommandItem>
                <CommandItem> 
                    <BarChart className="mr-2 h-4 w-4"/>
                    <Link href='#'>Bar Graph</Link>
                </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                <CommandItem>
                    <User className="mr-2 h-4 w-4"/>
                    <Link href='/profile'>Profile</Link>
                </CommandItem>
                <CommandItem>
                <Settings className="mr-2 h-4 w-4"/>
                    <Link href='/'>Settings</Link>
                </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>

     );
}
 
export default Sidebar;