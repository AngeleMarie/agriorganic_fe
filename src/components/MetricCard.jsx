import React from 'react'

const MetricCard = ({ icon, title, value, subtext, color }) => (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className={`rounded-full p-3 mr-4 ${color}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-500">{subtext}</p>
      </div>
    </div>
  );
export default MetricCard