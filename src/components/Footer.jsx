import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <section className='py-5 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div>
                    <p className='font-semibold text-gray-100 text-xs'>More ways to shop: {' '}
                        <a href="#root" className='text-blue underline'>Find an Apple Store</a>{' '}
                        or {' '}
                        <a href="#root" className='text-blue underline'>other reailer</a>{' '}
                        near you.
                    </p>
                    <p className='font-semibold text-gray-100 text-xs'>Or call 000800-00-1966</p>
                </div>

                <div className='bg-neutral-700my-5 h-[1px] w-full'>
                    <div className='flex md:flex-row flex-col md:items-center justify-between'>
                        <p className='font-semibold text-gray-100 text-xs'>&copy; 2024 Apple Inc. All rights reserved.</p>
                        <div className='flex'>
                            {footerLinks.map((link, i) => (
                                <p key={link} className="font-semibold text-gray text-xs">
                                    {link}{' '}
                                    {i !== footerLinks.length - 1 && (
                                        <span className="mx-2"> | </span>
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer