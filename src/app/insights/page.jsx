'use client'
import WebLayout from '@/components/layouts/WebLayout'
import { Badge } from '@/components/organisms/Badge'
import { Card, CardContent } from '@/components/organisms/Card'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuStethoscope } from 'react-icons/lu'

function page() {
    return (
        <WebLayout>
            <section id="blog" className="pb-28 pt-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-24">
                        <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">Mobile Experience</Badge>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                            Healthcare Innovation<br />& Insights
                        </h2>
                        <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Stay informed with the latest developments in anonymous healthcare, telemedicine trends,
                            and insights from leading medical professionals
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">

                        {
                            Array.from({ length: 15 }).map((_, index) => (
                                <Link href="/insights/The-Future-of-Anonymous-Healthcare" key={index}>
                                    <div className="md:col-span-2 lg:col-span-1 group">
                                        <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white h-full group-hover:-translate-y-2 rounded-3xl overflow-hidden">
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjBkb2N0b3IlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU1ODA3MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                                    alt="Healthcare Technology"
                                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <Badge className="bg-primary text-white border-0 shadow-lg">Featured</Badge>
                                                </div>
                                            </div>
                                            <CardContent className="py-8 px-4">
                                                <div className="flex  items-center space-x-4 my-4 text-sm text-slate-500">
                                                    <div className="flex items-center space-x-2">
                                                        {/* <Calendar className="w-4 h-4" /> */}
                                                        <span>Jan 15, 2025</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        {/* <Clock className="w-4 h-4" /> */}
                                                        <span>8 min read</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl line-clamp-2 font-bold text-slate-900 mb-4 leading-tight tracking-tight group-hover:text-primary transition-colors">
                                                    The Future of Anonymous Healthcare: Privacy Revolution
                                                </h3>

                                                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">
                                                    Discover how anonymous healthcare platforms are transforming patient care by eliminating privacy barriers
                                                    and creating more accessible medical consultations for sensitive health concerns.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                                                            {/* <User className="w-4 h-4 text-primary" /> */}
                                                            <LuStethoscope className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-slate-900">Dr. Sarah Chen</div>
                                                            <div className="text-xs text-slate-500">Digital Health Expert</div>
                                                        </div>
                                                    </div>
                                                    {/* <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" /> */}
                                                    <FaArrowRightLong className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>

        </WebLayout>
    )
}

export default page