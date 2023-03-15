import React from 'react';

export default function BookingForm() {
     return (
          <section className="bg-[#f2f2f2] rounded-xl w-[90%] mx-auto p-10 -mt-16 relative z-20 box-shadow">
               <h2 className='text-3xl text-primary mb-5'>Get Free Estimate</h2>
               <div className="w-full gap-5 grid grid-cols-4">
                    <input type="text"
                         placeholder='Your Name'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Phone Number'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Type of cleaning'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Type of Cleaning'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Number of bedrooms'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Number of bathrooms'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Frequency of Cleaning'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
                    <input type="text"
                         placeholder='Type of Cleaning'
                         className="border border-[#cfcfcf] w-[260px] h-11 rounded-lg text-sm placeholder:text-sm placeholder:text-[#cfcfcf] outline-none px-4 py-3"
                    />
               </div>
               <button type='button'
                    className='mt-5 px-4 py-3 bg-primary rounded-lg font-light text-[#e6e6e6] uppercase'
               >
                    REQUEST A QOUTE</button>
          </section>
     );
}
