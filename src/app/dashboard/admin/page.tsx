import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendenceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* left */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
            {/* user cards */}
            <div className='flex gap-4 justify-between flex-wrap'>
                <UserCard type="Estudantes"/>
                <UserCard type="Professores"/>
                <UserCard type="Pais"/>
                <UserCard type="Diretores"/>
            </div>
            {/* middle charts */}
            <div className='flex gap-4 flex-col lg:flex-row'>
                {/* count chart */}
                <div className='w-full lg:w-1/3 h-[450px]'>
                <CountChart />
                </div>
                {/* attendance chart */}
                <div className='w-full lg:w-2/3 h-[450px]'>
                <AttendanceChart />
                </div>
            </div>
            {/* bottom charts */}
            <div className="w-full h-[500px]">
                <FinanceChart />
            </div>
            </div>
            {/* right */}
            <div className='w-full lg:w-1/3 flex flex-col gap-8'>
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default AdminPage