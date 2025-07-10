import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, LabelList
} from 'recharts';

const COLORS = ['#38bdf8', '#0ea5e9', '#2563eb'];

const LeetCodeCharts = ({ data }) => {
  if (!data) return null;

  const solvedData = [
    { name: 'Easy', value: data.easySolved },
    { name: 'Medium', value: data.mediumSolved },
    { name: 'Hard', value: data.hardSolved },
  ];

  const totalVsSolvedData = [
    {
      name: 'Easy',
      Total: data.totalEasy,
      Solved: data.easySolved,
    },
    {
      name: 'Medium',
      Total: data.totalMedium,
      Solved: data.mediumSolved,
    },
    {
      name: 'Hard',
      Total: data.totalHard,
      Solved: data.hardSolved,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10 mt-6">
      {/* Solved Questions Pie Chart */}
      <div className="bg-white shadow-xl rounded-3xl p-4 border-t-2 border-cyan-500/50 border-r-2">
        <h3 className="text-center font-semibold text-sky-600">Solved Questions</h3>
        <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 250}>
          <PieChart>
            <Pie
              data={solvedData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              labelLine={false}
              label={({ name }) => name}
              className="focus:outline-none"
              style={{ outline: 'none' }}
            >
              {solvedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="focus:outline-none"
                  style={{ outline: 'none' }}
                />
              ))}
              <LabelList dataKey="name" position="inside" fill="#fff" fontWeight={700} />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Total vs Solved Questions Bar Chart */}
      <div className="bg-white border-t-2 border-cyan-500/50 border-r-2 shadow-xl rounded-3xl p-4">
        <h3 className="text-center font-semibold text-sky-600">Total vs Solved Questions</h3>
        <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 250}>
          <BarChart data={totalVsSolvedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="Total"
              fill="#cbd5e1"
              name="Total"
              className="focus:outline-none"
              style={{ outline: 'none' }}
            />
            <Bar
              dataKey="Solved"
              fill="#38bdf8"
              name="Solved"
              className="focus:outline-none"
              style={{ outline: 'none' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Contribution Points Chart */}
      <div className="bg-white border-t-2 border-cyan-500/50 border-r-2 shadow-xl rounded-3xl p-4">
        <h3 className="text-center font-semibold text-sky-600">Contribution Points</h3>
        <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 250}>
          <BarChart data={[{ name: 'Contribution', value: data.contributionPoints }]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#0ea5e9"
              className="focus:outline-none"
              style={{ outline: 'none' }}
              barSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white border-t-2 border-cyan-500/50 border-r-2 shadow-xl rounded-3xl p-4">
        <h3 className="text-center font-semibold text-sky-600">Global Ranking</h3>
        <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 200 : 250}>
          <BarChart data={[{ name: 'Ranking', value: data.ranking }]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#0ea5e9"
              className="focus:outline-none"
              style={{ outline: 'none' }}
              barSize={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeetCodeCharts;
