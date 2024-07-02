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
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "enter a valid email" }),
	password: z.string().min(1, { message: "password is required" }),
});

const LoginForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleSubmit = (dada: z.infer<typeof formSchema>) => {
		router.push("/");
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>Log into your account</CardDescription>
				<CardHeader>
					<CardContent className='space-y-2'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(handleSubmit)}
								className='space-y-6'>
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

								<Button className='w-full'>Sign in</Button>
							</form>
						</Form>
					</CardContent>
				</CardHeader>
			</CardHeader>
		</Card>
	);
};

export default LoginForm;
