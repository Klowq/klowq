'use client'
import WebLayout from '@/components/layouts/WebLayout'
import Image from 'next/image'
import React from 'react'
import { BsClock } from 'react-icons/bs'
import { LuUser } from 'react-icons/lu'

function page() {
    return (
        <WebLayout>
            <div className="md:flex mx-auto max-w-[90rem] p-3 py-16">
                <div className="flex-auto p-3">
                    <article className="max-w-3xl mx-auto bg-white overflow-hidden">
                        {/* Featured Image */}
                        <div className="relative bg-black/10 overflow-hidden rounded-lg h-72 w-full">
                            <img
                                src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjBkb2N0b3IlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU1ODA3MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Future of Web Development"
                                fill
                                className="object-cover h-full w-full "
                            />
                        </div>

                        {/* Content */}
                        <div className="py-6">
                            {/* Category + Meta */}
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                                    Technology
                                </span>
                                <div className="flex items-center space-x-1">
                                    <BsClock className="w-4 h-4" />
                                    <span>5 min read</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                The Future of Web Development: Trends to Watch in 2025
                            </h1>

                            {/* Excerpt */}
                            <p className="text-lg text-gray-600 mb-4">
                                Explore the latest trends shaping the web development landscape, from AI
                                integration to new frameworks that are revolutionizing how we build applications.
                            </p>

                            {/* Author Info */}
                            <div className="flex border-b pb-4 items-center space-x-3 text-sm text-gray-500 mb-6">
                                <LuUser className="w-4 h-4 text-gray-400" />
                                <span className="font-medium text-gray-800">Sarah Johnson</span>
                                <span>•</span>
                                <span>Jan 15, 2025</span>
                            </div>

                            {/* Body */}
                            <div className="prose space-y-3 prose-lg text-gray-700">
                                <p>
                                    The web development landscape is evolving at an unprecedented pace, with 2025
                                    promising to be a transformative year for developers and businesses alike. As we
                                    navigate through this exciting period of technological advancement, several
                                    key trends are emerging that will shape the way we build and interact with
                                    applications
                                </p>
                                <p>
                                    The web development landscape is evolving at an unprecedented pace, with 2025
                                    promising to be a transformative year for developers and businesses alike. As we
                                    navigate through this exciting period of technological advancement, several
                                    key trends are emerging that will shape the way we build and interact with
                                    applications
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="sm:w-96">
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