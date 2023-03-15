import React from 'react';
import bannerImg from '../../../assets/image/bucketgirl.png';

export default function Banner() {
     return (
          <section className="flex flex-col md:flex-row md:items-center justify-center gap-5 h-[85vh] md:h-[65vh] bg-[#FFEDD5] px-4 md:px-24">
               <div className="text-gray w-full md:w-1/2">
                    <h6 className="text-gray mb-1 text-sm">Best Quality</h6>
                    <h3 className='text-3xl md:text-5xl font-semibold mb-3'>Professional Cleaning Service</h3>
                    <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <button type="button"
                         className="px-4 py-3 bg-primary uppercase rounded-md text-[#e6e6e6]"
                    >
                         get started</button>
               </div>
               <div className="w-full md:w-1/2">
                    <img src={bannerImg}
                         alt="banner-mg"
                         className="w-[80%]"
                    />
               </div>
          </section>
     );
}
