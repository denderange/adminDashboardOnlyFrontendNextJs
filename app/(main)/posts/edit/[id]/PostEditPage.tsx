"use client";
import BackButton from "@/components/BackButton";
import * as z from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import posts from "@/data/post";
import { formSchema } from "./page";

export const PostEditPage = ({ params }: { params: { id: string } }) => {
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

	const handleSubmit = (dada: z.infer<typeof formSchema>) => {};

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
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										placeholder='shadcn'
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</>
	);
};
