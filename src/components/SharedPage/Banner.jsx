import React from 'react';
import banner from '../../assets/image/banner2.avif'
const Banner = () => {
    return (
        <div className='bg-base-100 py-6'>
            <section class="rounded py-12">
                <div class="container mx-auto px-4 rounded">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div class="text-black text-center md:text-left p-3">
                            <h1 class="text-3xl font-semibold font-serif mb-4">Explore the Wonders of Science!</h1>
                            <p class="text-base font-medium   mb-8">Toy science kits play a vital role in introducing children to STEM (Science, Technology, Engineering, and Mathematics) education. By fostering a sense of curiosity and discovery, they inspire young minds and lay the foundation for future scientific exploration and learning.</p>
                            <button className="btn btn-success">Explore </button>
                        </div>
                        <div class="md:text-right">
                            <img src={banner} alt="" srcset="" class="max-w-full mx-auto md:max-w-md mt-8 md:mt-0 rounded" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;