import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface IssuesChartProps {
  openCount: number;
  closedCount: number;
}

export function IssuesChart({ openCount, closedCount }: IssuesChartProps) {
  const data = [
    { name: 'Open Issues', value: openCount, color: '#22c55e' },
    { name: 'Closed Issues', value: closedCount, color: '#9333ea' },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}