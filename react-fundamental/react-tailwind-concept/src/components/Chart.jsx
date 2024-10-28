import { LineChart, Line,XAxis,YAxis,Tooltip } from 'recharts';

const Chart = () => {

    const data = [
        { name: 'Student 1', math: 78, physics: 82, chemistry: 75 },
        { name: 'Student 2', math: 85, physics: 79, chemistry: 88 },
        { name: 'Student 3', math: 92, physics: 91, chemistry: 84 },
        { name: 'Student 4', math: 67, physics: 76, chemistry: 70 },
        { name: 'Student 5', math: 74, physics: 83, chemistry: 79 },
        { name: 'Student 6', math: 88, physics: 85, chemistry: 90 },
        { name: 'Student 7', math: 90, physics: 89, chemistry: 92 },
        { name: 'Student 8', math: 76, physics: 80, chemistry: 78 },
        { name: 'Student 9', math: 82, physics: 87, chemistry: 85 },
        { name: 'Student 10', math: 94, physics: 92, chemistry: 91 }
    ];
    return (
        <div>
            <LineChart width={600} height={400} data={data}>
                <Line type='monotone' dataKey='math' stroke='#F05A7E'></Line>
                <Line type='monotone' dataKey='physics' stroke='#125B9A'></Line>
                <Line type='monotone' dataKey='chemistry' stroke='#0B8494'></Line>
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;