'use client';

import { ResponsiveLine } from '@nivo/line';

interface GrowthData {
	id: string;
	data: {
		x: string;
		y: number;
	}[];
}

interface GrowthChartProps {
	data: GrowthData[];
}

export function GrowthChart({ data }: GrowthChartProps) {
	return (
		<ResponsiveLine
			data={data}
			margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
			xScale={{ type: 'point' }}
			yScale={{
				type: 'linear',
				min: 'auto',
				max: 'auto',
				stacked: false,
				reverse: false,
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: '연도',
				legendOffset: 36,
				legendPosition: 'middle',
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: '매출액 (억원)',
				legendOffset: -40,
				legendPosition: 'middle',
			}}
			pointSize={10}
			pointColor={{ theme: 'background' }}
			pointBorderWidth={2}
			pointBorderColor={{ from: 'serieColor' }}
			pointLabelYOffset={-12}
			useMesh={true}
			legends={[
				{
					anchor: 'right',
					direction: 'column',
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 8,
					itemDirection: 'left-to-right',
					itemWidth: 100,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: 'circle',
					symbolBorderColor: 'rgba(0, 0, 0, .5)',
					effects: [
						{
							on: 'hover',
							style: {
								itemBackground: 'rgba(0, 0, 0, .03)',
								itemOpacity: 1,
							},
						},
					],
				},
			]}
			theme={{
				axis: {
					ticks: {
						text: {
							fill: '#6b7280',
						},
					},
					legend: {
						text: {
							fill: '#6b7280',
						},
					},
				},
				grid: {
					line: {
						stroke: '#e5e7eb',
					},
				},
			}}
			colors={['#2563eb', '#22c55e']}
		/>
	);
}
