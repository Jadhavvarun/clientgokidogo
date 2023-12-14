import React from 'react';

export default function ToolBackdrop() {
  const titleStyle = {
    background: 'linear-gradient(to right, #bee25a, #357135)',
    transition: 'background 0.7s',
};
  return (
    <div className="flex items-center justify-center h-[450px]">
      <div className="flex flex-col md:flex-row">
        <img
          src='/headergokidogotools.png'
          alt='gokidogo'
          className="h-62 w-62"
        />
        <div className="text-white text-center mt-24 md:text-left">
          <h3 className="text-5xl font-bold text-center mt-4 md:mt-0">
            Ihre smarten<br />Begleiter<br/>in eine digitale<br/>Zukunft
          </h3>
          <div className='py-6 text-center'>
            <button className="text-white font-semibold py-2 px-4 rounded left-14" style={titleStyle}>Jetzt Demo anfordern</button>
          </div>
        </div>
      </div>
    </div>
  );
}