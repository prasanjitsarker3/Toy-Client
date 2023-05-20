import React from 'react';
import cart from '../../assets/image/cart.png'
import product from '../../assets/image/shopping-bag.png'
import gift from '../../assets/image/giftbox.png'
import devery from '../../assets/image/delivery-truck.png'

const CustomInfo = () => {
    return (
        <div className=' py-12 bg bg-base-200 mb-5 px-5'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 text-center'>
                <div className='mx-auto'>
                    <img src={cart} alt="" className='mx-auto' srcset="" width={'70px'} height={'70px'} />
                    <h1 className='text-2xl font-serif font-bold py-2'>Free Sheeping</h1>
                    <p>Free sheeping delivery goes beyond the simple act of shipping sheep; it embodies a commitment to excellence in service. It signifies..</p>

                </div>
                <div className='mx-auto'>
                    <img src={product} alt="" className='mx-auto' srcset="" width={'70px'} height={'70px'} />
                    <h1 className='text-2xl font-serif font-bold py-2'>100% Original product</h1>
                    <p>Customers often seek out original products to ensure they are purchasing a legitimate item that performs as expected and comes with ..</p>

                </div>
                <div className='mx-auto'>
                    <img src={gift} alt="" className='mx-auto' srcset="" width={'70px'} height={'60px'} />
                    <h1 className='text-2xl font-serif font-bold py-2'>Gift cards</h1>
                    <p> Gift cards can be purchased from various sources, including retail stores, online platforms, or directly from the retailer's website. </p>

                </div>
                <div className='mx-auto'>
                    <img src={devery} alt="" className='mx-auto' srcset="" width={'70px'} height={'70px'} />
                    <h1 className='text-2xl font-serif font-bold py-2'>Tracking & delivery</h1>
                    <p>The shipping carrier, such as UPS, FedEx, or USPS, provides online tracking services. Using the tracking number, customers can visit..</p>

                </div>
            </div>
        </div>
    );
};

export default CustomInfo;