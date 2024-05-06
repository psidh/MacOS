import React from 'react';

export default function Dock() {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div
          className='mb-4 bg-white backdrop-blur-md bg-opacity-40 
          rounded-2xl px-2 py-2 flex justify-between items-center space-x-3 pr-3'
        >
          <img src='/finder.png' alt='' className='object-cover w-14 h-14 ' />
          <img src='/launch.png' alt='' className='object-cover w-14 h-14' />
          <img src='/messages.png' alt='' className='object-cover w-12 h-12 ' />
          <img src='/facetime.png' alt='' className='object-cover w-12 h-12 ' />
          <img src='/music.png' alt='' className='object-cover w-12 h-12 ' />
          <img src='/mail.png' alt='' className='object-cover w-12 h-12 ' />
          <img src='/calendar.png' alt='' className='object-cover w-14 h-14 ' />
          <img src='/mail.png' alt='' className='object-cover w-12 h-12' />
          <img src='/act.png' alt='' className='object-cover w-12 h-12' />
          <img src='/figma.png' alt='' className='object-cover w-14 h-14' />
          <img src='/pic.png' alt='' className='object-cover w-12 h-12' />
        </div>
      </div>
    </>
  );
}
