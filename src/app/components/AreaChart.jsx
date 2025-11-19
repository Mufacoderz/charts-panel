'use client'; 

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Data 
const productSales = [
  { name: 'Jan', product1: 400, product2: 400, product3:450 },
  { name: 'Feb', product1: 300, product2: 220, product3:650 },
  { name: 'Mar', product1: 200, product2: 220, product3:450 },
  { name: 'Apr', product1: 278, product2: 200, product3:330 },
  { name: 'May', product1: 189, product2: 218, product3:640 },
  { name: 'Jun', product1: 239, product2: 25, product3:656 },
];

// Komponen utama untuk menampilkan Area Chart
const AreaChartComponent = () => {
  return (
    // ResponsiveContainer memastikan chart fleksibel mengikuti ukuran parent
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500} // ukuran default (tidak terlalu ngaruh jika pakai ResponsiveContainer)
        height={400}
        data={productSales} // data untuk grafik
        margin={{ right: 30 }} // jarak margin bagian kanan
      >
        {/* Sumbu Y (nilai) */}
        <YAxis />

        {/* Sumbu X (bulan) */}
        <XAxis dataKey="name" />

        {/* Grid garis-garis background */}
        <CartesianGrid strokeDasharray="5 5" />

        {/* Tooltip custom ketika hover */}
        <Tooltip content={<CustomTooltip />} />

        {/* Legend (keterangan warna) */}
        <Legend />

        {/* Area pertama: product1 */}
        <Area
          type="monotone" // bentuk garis yang halus
          dataKey="product1" // ambil data dari key product1
          stroke="#2563eb" // warna garis
          fill="#3b82f6" // warna fill area
          stackId="1" // stackId sama untuk menggabungkan area
        />

        {/* Area kedua: product2 */}
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
        />
        {/* produk ke 3 */}
        <Area
          type="monotone"
          dataKey="product3"
          stroke="#059669"
          fill="#10b981"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// Komponen tooltip custom yang muncul saat hover
const CustomTooltip = ({ active, payload, label }) => {
  // active = true ketika mouse hover pada titik data
  // payload = array berisi nilai product1 & product2
  // label = nama bulan
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        {/* Bulan */}
        <p className="text-medium text-lg">{label}</p>

        {/* Nilai product 1 */}
        <p className="text-sm text-blue-400">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>

        {/* Nilai product 2 */}
        <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
        {/* Nilai product 3 */}
        <p className="text-sm text-indigo-700">
          Product 3:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
