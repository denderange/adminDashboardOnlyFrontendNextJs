import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
	return (
		<div
			className='bg-primary dark:bg-slate-700 text-white 
  py-2 px-5 flex justify-between'>
			<div>
				<Link href='/'>Logo</Link>
			</div>
			<div className='flex items-center'>
				<ThemeToggle />

				<DropdownMenu>
					<DropdownMenuTrigger className='focus:outline-none'>
						<Avatar>
							<AvatarImage
								src='https://github.com/shadcn.png'
								alt='avatar'
							/>
							<AvatarFallback className='text-black'>Dd</AvatarFallback>
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
};

export default Navbar;
