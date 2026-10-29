import {useNavigate} from 'react-router-dom';
import Preview from './Preview';
export default function Layout({title,step,children}){const nav=useNavigate();return <div className="min-h-screen flex bg-[#f9f9f9]">
  <main className="relative w-[57%] min-h-screen px-[8.5%] pt-[47px] pb-16">
    <button onClick={()=>nav(-1)} className="absolute left-12 top-11 w-10 h-10 rounded-full bg-white text-2xl leading-none shadow-sm">‹</button>
    <div className="flex items-end justify-between border-b border-[#1a1a1a] pb-3 mb-10"><h1 className="text-[24px] font-bold">{title}</h1><span className="text-[18px]">{step}/3</span></div>
    {children}
  </main>
  <aside className="w-[43%] min-h-screen bg-white"><Preview/></aside>
</div>}
