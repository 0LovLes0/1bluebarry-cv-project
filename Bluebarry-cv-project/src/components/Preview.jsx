import {useSelector} from 'react-redux';
const fmt=d=>d||'';
export default function Preview(){const {personal:p,experiences,education}=useSelector(s=>s.cv);return <div className="relative min-h-screen px-[10%] py-[68px] bg-white">
  <div className="min-h-[900px] relative pb-20">
    {p.image&&<img src={p.image} className="absolute right-0 top-0 w-[246px] h-[246px] rounded-full object-cover"/>}
    <div className={p.image?'pr-[270px]':''}>
      {(p.name||p.surname)&&<h2 className="cv-blue text-[34px] leading-tight font-bold mb-4">{p.name} {p.surname}</h2>}
      {p.email&&<div className="text-[18px] mb-2">✉ &nbsp;{p.email}</div>}
      {p.phone&&<div className="text-[18px] mb-8">☎ &nbsp;{p.phone}</div>}
      {p.about&&<section className="mb-6"><h3 className="cv-blue font-bold text-[18px] mb-3">ჩემ შესახებ</h3><p className="text-[16px] leading-6 whitespace-pre-line">{p.about}</p></section>}
    </div>
    {experiences.some(x=>x.position||x.employer)&&<section className="border-b cv-rule pb-5 mb-5"><h3 className="cv-blue font-bold text-[18px] mb-3">გამოცდილება</h3>{experiences.map((x,i)=>(x.position||x.employer)&&<div key={i} className="mb-5"><div className="font-medium text-[16px]">{x.position}{x.position&&x.employer?', ':''}{x.employer}</div><div className="italic text-[#919191] text-[16px] my-1">{fmt(x.start)} - {fmt(x.end)}</div><p className="text-[16px] leading-6">{x.description}</p></div>)}</section>}
    {education.some(x=>x.school||x.degree)&&<section><h3 className="cv-blue font-bold text-[18px] mb-3">განათლება</h3>{education.map((x,i)=>(x.school||x.degree)&&<div key={i} className="mb-5"><div className="font-medium text-[16px]">{x.school}{x.school&&x.degree?', ':''}{x.degree}</div><div className="italic text-[#919191] text-[16px] my-1">{x.end}</div><p className="text-[16px] leading-6">{x.description}</p></div>)}</section>}
    <div className="absolute bottom-0 left-0 text-[34px] font-black cv-blue">◉</div>
  </div>
</div>}
