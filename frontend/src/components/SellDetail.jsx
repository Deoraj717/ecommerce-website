import React from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SellDetail() {

    const [barType, setBarType] = React.useState('pie');

    const data = [{ product_type: 'shirt', quantity: 200 }, { product_type: 'shoe', quantity: 50 }, { product_type: 'pant', quantity: 100 }];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div>
            {barType == 'pie' ?
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        dataKey="quantity"
                        nameKey="product_type"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
                :
                <BarChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="product_type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity" fill="#8884d8" />
                </BarChart>
            }
        </div>
    )
}

export default SellDetail