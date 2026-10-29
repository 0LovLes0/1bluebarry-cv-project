import {useNavigate} from 'react-router-dom';
export default function Home(){const nav=useNavigate();return <div className="min-h-screen relative bg-[#f4f4f4] overflow-hidden">
  <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(#bdbdbd 1px, transparent 1px)',backgroundSize:'7px 7px'}}/>
  <header className="relative mx-[4.5%] pt-7 pb-6 border-b border-black"><div className="font-black text-[26px] tracking-tight text-blue-600">BLUEBERRY</div></header>
  <div className="relative flex flex-col items-center justify-center h-[75vh]">
    <div className="absolute w-[300px] h-[300px] rounded-full border-[70px] border-[#d9d9d9] rotate-12 translate-x-44 -translate-y-6 opacity-70"/>
    <button onClick={()=>nav('/profile')} className="relative z-10 w-[464px] py-[18px] bg-[#1a1a1a] text-white rounded-[8px] text-[20px] font-medium">რეზიუმეს დამატება</button>
  </div>
</div>}
