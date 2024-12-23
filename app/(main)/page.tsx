import DashboardCard from "@/components/Dashboard/DashboardCard";
import { Newspaper,Folder, User,MessageCircle } from "lucide-react"
import AnalyticsCharts from "@/components/Dashboard/AnalyticsCharts";
export default function Home() {
  return (
    <>
      <div className="flex flex-wrap gap-5 mb-5">
        <DashboardCard title="Post" 
          count={100} 
          icon={
        <Newspaper className="text-slate-500" size={50}/>} />
      
        <DashboardCard title="Categories" count={10} icon={
          <Folder className="text-slate-500" size={50}/>} />
      
        <DashboardCard title="Users" count={750} icon={
          <User className="text-slate-500" size={50}/>} />
      
        <DashboardCard title="Review" count={100} icon={
          <MessageCircle className="text-slate-500" size={50}/>} />

       </div>

       <AnalyticsCharts/>
    </>
  );
}
