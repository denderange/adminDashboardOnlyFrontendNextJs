"use client";

import * as z from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const formSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "enter a valid email" }),
	password: z.string().min(1, { message: "password is required" }),
	confirmPassword: z.string().min(1, { message: "confirm password" }),
});

const RegisterForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const handleSubmit = (dada: z.infer<typeof formSchema>) => {
		router.push("/");
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Register</CardTitle>
				<CardDescription>Sign up</CardDescription>
				<CardHeader>
					<CardContent className='space-y-2'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(handleSubmit)}
								className='space-y-6'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel
												className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
												Name
											</FormLabel>
											<FormControl>
												<Input
													placeholder='Enter name'
													{...field}
													className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel
												className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
												Email
											</FormLabel>
											<FormControl>
												<Input
													placeholder='Enter email'
													{...field}
													className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel
												className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
												Password
											</FormLabel>
											<FormControl>
												<Input
													placeholder='Enter password'
													type='password'
													{...field}
													className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='confirmPassword'
									render={({ field }) => (
										<FormItem>
											<FormLabel
												className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
												Confirm password
											</FormLabel>
											<FormControl>
												<Input
													placeholder='confirm password'
													type='password'
													{...field}
													className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button className='w-full'>Sign in</Button>
							</form>
						</Form>
					</CardContent>
				</CardHeader>
			</CardHeader>
		</Card>
	);
};

export default RegisterForm;
