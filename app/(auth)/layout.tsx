import { ThemeToggle } from "@/components/ThemeToggle";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[100vh] flex items-center justify-center relative'>
			<div className='absolute top-5 right-0'>
				<ThemeToggle />
			</div>
			{children}
		</div>
	);
};

export default layout;
