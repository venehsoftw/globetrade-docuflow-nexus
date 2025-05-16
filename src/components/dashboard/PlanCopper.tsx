
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for charts
const chartData1 = [
  { name: 'Q1', value: 30 },
  { name: 'Q2', value: 40 },
  { name: 'Q3', value: 65 },
  { name: 'Q4', value: 55 },
];

const chartData2 = [
  { name: 'Q1', value: 25 },
  { name: 'Q2', value: 35 },
  { name: 'Q3', value: 60 },
  { name: 'Q4', value: 50 },
];

const PlanCopper = () => {
  const [activeChart, setActiveChart] = useState<string | null>(null);
  
  const chartSets = [
    {
      id: 'set1',
      charts: [
        { id: 'chart1', title: 'Satisfactory transactions by quarter', data: chartData1 },
        { id: 'chart2', title: 'Processing transactions by quarter', data: chartData2 }
      ]
    },
    {
      id: 'set2',
      charts: [
        { id: 'chart3', title: 'Volume of merchandise in transit', data: chartData1 },
        { id: 'chart4', title: 'Cash flow monetary receivable', data: chartData2 }
      ]
    },
    {
      id: 'set3',
      charts: [
        { id: 'chart5', title: 'Unsatisfactory transactions by quarter', data: chartData1 },
        { id: 'chart6', title: 'Transactions with warning status', data: chartData2 }
      ]
    }
  ];

  const [currentSet, setCurrentSet] = useState(0);

  const handleNextSet = () => {
    setCurrentSet((prev) => (prev + 1) % chartSets.length);
  };

  const handlePrevSet = () => {
    setCurrentSet((prev) => (prev - 1 + chartSets.length) % chartSets.length);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between mb-6">
        <Button variant="outline" onClick={handlePrevSet}>Previous</Button>
        <Button variant="outline" onClick={handleNextSet}>Next</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chartSets[currentSet].charts.map((chart) => (
          <Dialog key={chart.id}>
            <Card className="p-4 h-full">
              <h2 className="text-lg font-medium mb-4">{chart.title}</h2>
              <DialogTrigger asChild>
                <div className="h-64 w-full bg-white border border-gray-300 p-2 cursor-pointer">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chart.data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#9ca3af" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </DialogTrigger>
            </Card>
            
            <DialogContent className="sm:max-w-3xl">
              <div className="p-6 bg-gray-200">
                <h2 className="text-xl font-medium mb-6">{chart.title}</h2>
                <div className="h-[400px] bg-white">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chart.data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#9ca3af" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center mt-6">
                  <DialogClose asChild>
                    <Button>CLOSE</Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PlanCopper;
