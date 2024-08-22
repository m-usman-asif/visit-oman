"use client"




import React, {useState} from 'react';
const LatestNewsPagination = ({locale}:{locale:string}) =>
{
   let [num, setNum] = useState(1)
   let [cur, setCur] = useState(1)

   const pages = [
      { page: num },
      { page: num + 1 },
      { page: num + 2 },
      { page: num + 3 },
      { page: num + 4 },
      { page: num + 5 },
      { page: num + 6 },

   ]
   function Next ()
   {
      setNum(++num)
   }
   function back ()
   {
      num > 1 && setNum(--num)
   }
   return (
      <div className={`flex ${locale === "en" ? "flex-row":"flex-row-reverse"} justify-between sm:h-[48px]`}>
         <button onClick={back} className="prev pagination-btn-nav sm:w-[48px] sm:h-[48px] xs:w-[25px] xs:h-[25px] flex justify-center items-center rounded-full bg-[#F5F6F6] hover:text-[#8B8B8B]">
            <svg className={`w-4 h-4 fill-current `} viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
         </button>
         <div className={`flex sm:gap-[10px] gap-[6px] ${locale === "en" ? "flex-row" : "flex-row-reverse"}`}>
         {
            pages.map((pg, i) => (
               <button key={i} onClick={() => setCur(pg.page)} className={`pagination-btn-nav pagination-btn-num sm:h-[48px] rounded-full flex justify-center items-center 
               sm:w-[48px] w-[25px] h-[25px] sm:text-[17px] xs:text-[9px] leading-[11px] md:leading-[21px] ${cur === pg.page ? 'bg-white text-[#202020] font-bold border-[#EEEEEE] border-[1px] font-Montserrat' : 'text-[#848484] font-medium sm:text-[17px] xs:text-[9px]'}`}>{pg.page}</button>
            ))
         }
         </div>
        
         <button onClick={Next} className="next pagination-btn-nav sm:w-[48px] sm:h-[48px] w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#F5F6F6] hover:text-[#8B8B8B]">
            <svg className={`w-4 h-4 fill-current `} viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
         </button>
      </div>
   )
}

export default LatestNewsPagination