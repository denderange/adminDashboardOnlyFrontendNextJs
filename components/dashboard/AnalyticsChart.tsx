"use client";

import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import data from "@/data/analytics";

const AnalyticsChart = () => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Analytics for this yesr</CardTitle>
					<CardDescription>Views per month</CardDescription>
				</CardHeader>
				<CardContent>
					<div style={{ width: "100%", height: "300px" }}>
						<ResponsiveContainer>
							<LineChart
								width={1100}
								height={300}
								data={data}>
								<Line
									type='monotone'
									dataKey='uv'
									stroke='#8884d8'
								/>
								<CartesianGrid stroke='#cccccc' />
								<XAxis dataKey='name' />
								<YAxis dataKey=' ' />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default AnalyticsChart;
