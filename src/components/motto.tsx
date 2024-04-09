import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export function Motto() {
  return (
    <div className="mx-auto max-w-screen text-center">
      <div>
        <p className="md:text-3xl w-full text-xl font-black_ops_one text-center font-medium md:line-clamp-2 text-[#f9d112] md:border-r-2 md:pr-2 md:border-r-white whitespace-nowrap md:animate-typing">
        {/* <FlashOnIcon className='text-[#f9d112] ' fontSize='large'/> */}
        #BREAK YOUR BARRIERS
        <FlashOnIcon className='text-[#f9d112]' fontSize='large'/>
        </p>
      </div>
        {/* <div className="flex items-center justify-center divide-x-2">
          <cite className="pr-3 font-medium text-white">Dr. Maxwell Maltz's</cite>
        </div> */}
    </div>
  );
}
