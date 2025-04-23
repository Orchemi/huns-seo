'use client';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ year: '2020', clients: 5 },
	{ year: '2021', clients: 15 },
	{ year: '2022', clients: 35 },
	{ year: '2023', clients: 70 },
	{ year: '2024', clients: 100 },
];

export const CompanyGrowthChart = () => {
	return (
		<div className="w-full h-[400px] mt-8">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 20,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="year"
						label={{ value: '연도', position: 'bottom', offset: 0 }}
					/>
					<YAxis label={{ value: '고객사 수', angle: -90, position: 'left' }} />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="clients"
						stroke="#0070f3"
						strokeWidth={2}
						dot={{ r: 6 }}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
