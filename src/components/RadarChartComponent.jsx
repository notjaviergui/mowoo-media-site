import React, { useState } from 'react';
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const RadarChartComponent = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [groupValues, setGroupValues] = useState({
    performance: 8,
    brand: 7,
    efficiency: 6,
  });

  const groupMap = {
    performance: ['Paid Marketing Speed', 'Paid Marketing Reach', 'Conversion Rate'],
    brand: ['Organic Marketing Reach', 'Brand Awareness Impact'],
    efficiency: ['Creative Testing Velocity', 'Budget Efficiency', 'Lead Quality'],
  };

  const handleGroupChange = (group, newValue) => {
    setGroupValues((prev) => ({ ...prev, [group]: Number(newValue) }));
    const updated = data.map((item) => {
      if (groupMap[group].includes(item.category)) {
        return { ...item, value: Number(newValue) };
      }
      return item;
    });
    setData(updated);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar name="Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2 bg-gray-900 p-4 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-white">Performance Metrics</label>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={groupValues.performance}
            onChange={(e) => handleGroupChange('performance', e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2 bg-gray-900 p-4 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-white">Brand Impact</label>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={groupValues.brand}
            onChange={(e) => handleGroupChange('brand', e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2 bg-gray-900 p-4 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-white">Efficiency & Testing</label>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={groupValues.efficiency}
            onChange={(e) => handleGroupChange('efficiency', e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default RadarChartComponent;