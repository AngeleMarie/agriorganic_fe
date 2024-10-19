import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';

const data = [
    { name: 'Jan', sales: 400 },
    { name: 'Feb', sales: 300 },
    { name: 'Mar', sales: 500 },
    { name: 'Apr', sales: 200 },
    { name: 'May', sales: 600 },
    { name: 'Jun', sales: 700 },
    { name: 'Jul', sales: 800 },
    { name: 'Aug', sales: 400 },
    { name: 'Sep', sales: 300 },
    { name: 'Oct', sales: 500 },
    { name: 'Nov', sales: 200 },
    { name: 'Dec', sales: 200 },

];

const SummaryChart = () => (
    <div className="bg-white rounded-lg shadow p-8 ">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Summary Sales</h3>
            <select className="border rounded px-2 py-1">
                <option value="month">Month</option>
                <option value="year">Year</option>
            </select>
        </div>
        <div className="h-64 rounded">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <defs>
                        
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#266937" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#266937" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* Add an Area to represent the shadow with the gradient */}
                    <Area type="monotone" dataKey="sales" stroke={false} fill="url(#colorSales)" />
                    <Line type="monotone" dataKey="sales" stroke="#266937" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default SummaryChart;
