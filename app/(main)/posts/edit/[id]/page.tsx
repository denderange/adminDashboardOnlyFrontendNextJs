"use client";

import BackButton from "@/components/BackButton";
import * as z from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import posts from "@/data/post";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
	title: z.string().min(1, { message: "Title is required" }),
	body: z.string().min(1, { message: "Body is required" }),
	author: z.string().min(1, { message: "Author is required" }),
	date: z.string().min(1, { message: "Date is required" }),
});

const PostEditPage = ({ params }: { params: { id: string } }) => {
	const { toast } = useToast();
	const post = posts.find((item) => item.id === params.id);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: post?.title || "",
			body: post?.body || "",
			author: post?.author || "",
			date: post?.date || "",
		},
	});

	const handleSubmit = (dada: z.infer<typeof formSchema>) => {
		toast({
			title: "Post has been updated successfully",
			description: `Updated by ${post?.author} on ${post?.date}`,
		});
	};

	return (
		<>
			<BackButton
				text='Back to posts'
				link='/posts'
			/>
			<h3 className='text-2xt mb-4'>Edit post</h3>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className='space-y-8'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel
									className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
									Title
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter title'
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
						name='body'
						render={({ field }) => (
							<FormItem>
								<FormLabel
									className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
									Body
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Enter text'
										{...field}
										className='bg-slate-100 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='author'
						render={({ field }) => (
							<FormItem>
								<FormLabel
									className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
									Author
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter author name'
										{...field}
										className='bg-slate-100 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='date'
						render={({ field }) => (
							<FormItem>
								<FormLabel
									className='uppercase text-xs font-bold 
                text-zink-500 dark:text-white'>
									Date
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter date'
										{...field}
										className='bg-slate-100 border-0 focus-visible:ring-0 
                    focus-visible:ring-offset-0 text-black dark:text-white'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button className='w-full dark:bg-slate-800 dark:text-white'>
						Update post
					</Button>
				</form>
			</Form>
		</>
	);
};

export default PostEditPage;
