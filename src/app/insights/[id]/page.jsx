'use client'
import WebLayout from '@/components/layouts/WebLayout'
import React from 'react'

function page() {
    return (
        <WebLayout>
            <div className="flex mx-auto max-w-[90rem] p-3 py-16">
                <div className="flex-auto p-3">
                    
                </div>
                <div className="w-96 pr-6">
                    <div className="sticky top-20 space-y-3 p-3">
                        <div className='font-bold text-lg md:text-2xl'>Related Insights</div>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex items-center justify-between bg-slate-100 p-2 rounded">
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default page