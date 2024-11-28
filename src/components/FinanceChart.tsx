"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Receitas: 4000,
    Despesas: 2900,
  },
  {
    name: "Fev",
    Receitas: 3800,
    Despesas: 1398,
  },
  {
    name: "Mar",
    Receitas: 4000,
    Despesas: 6800,
  },
  {
    name: "Abr",
    Receitas: 7780,
    Despesas: 4908,
  },
  {
    name: "Mai",
    Receitas: 6890,
    Despesas: 4800,
  },
  {
    name: "Jun",
    Receitas: 4190,
    Despesas: 3800,
  },
  {
    name: "Jul",
    Receitas: 4490,
    Despesas: 4300,
  },
  {
    name: "Ago",
    Receitas: 4490,
    Despesas: 4300,
  },
  {
    name: "Set",
    Receitas: 4990,
    Despesas: 4300,
  },
  {
    name: "Out",
    Receitas: 4690,
    Despesas: 4300,
  },
  {
    name: "Nov",
    Receitas: 4690,
    Despesas: 4300,
  },
  {
    name: "Dez",
    Receitas: 4890,
    Despesas: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Financeiro</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Receitas"
            stroke="#195383cc"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="Despesas" stroke="#ffe864" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
