import React from 'react';

export default function ToolBackdrop() {
  // Use records in your Backdrop component

  return (
    <div className="h-[400px] w-auto relative flex ">
      <div className="bg-opacity-0 fixed top-0 left-0 right-0 bg-center bg-cover "></div>
      <div className="flex-col absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-center">
        <div className="flex-none mr-4">
          <img src='/headergokidogotools.png' alt='gokidogo' className="h-62 w-62 object-cover" />
        </div>
        <div className='py-12 px-2 items-center mt-4'>
        </div>
      </div>
    </div>
  );
}
