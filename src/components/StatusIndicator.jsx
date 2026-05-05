import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatusIndicator = ({ theme }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
    hour12: true
  });

  const isWorkingHours = time.getHours() >= 9 && time.getHours() < 22;

  return (
    <div className="flex items-center gap-4">
      <div className="hidden sm:flex flex-col items-end">
        <span className={`text-[9px] font-black uppercase tracking-widest ${theme === 'light' ? 'text-slate-400' : 'text-white/30'}`}>
          Local Time (IST)
        </span>
        <span className={`text-[10px] font-bold ${theme === 'light' ? 'text-slate-600' : 'text-white/70'}`}>
          {formattedTime}
        </span>
      </div>
      
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/2 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isWorkingHours ? 'bg-green-400' : 'bg-orange-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isWorkingHours ? 'bg-green-500' : 'bg-orange-500'}`}></span>
        </span>
        <span className={`text-[9px] font-black uppercase tracking-wider ${theme === 'light' ? 'text-slate-500' : 'text-white/60'}`}>
          {isWorkingHours ? 'Active' : 'Working'}
        </span>
      </div>
    </div>
  );
};

export default StatusIndicator;
