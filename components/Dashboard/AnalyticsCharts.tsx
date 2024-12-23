'use client'

import {Line,LineChart,XAxis,YAxis,CartesianGrid,ResponsiveContainer} from 'recharts'
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '../ui/card';
import data from '@/data/Analytics';
const AnalyticsCharts = () => {
    return ( 
        <>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Analytics for the year
                    </CardTitle>
                    <CardDescription>
                        Views of per month 
                    </CardDescription>
                    <CardContent>
                        <div style={{width:'100%',height:'300'}}>
                        <ResponsiveContainer width={'99%'} height={300}>
                            <LineChart width={900} height={350} data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid stroke="#ccc" />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
                    </LineChart>
                        </ResponsiveContainer>
                        
                        
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </>
     );
}
 
export default AnalyticsCharts;