'use client'

import WebLayout from '@/components/layouts/WebLayout'
import { Badge } from '@/components/organisms/Badge'
import { Card, CardContent } from '@/components/organisms/Card'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuStethoscope } from 'react-icons/lu'
import { GoSearch } from 'react-icons/go'

function Page() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("latest")
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 5 // change depending on data

    const handleSearch = (e) => setSearch(e.target.value)
    const handleFilter = (e) => setFilter(e.target.value)

    return (
        <WebLayout>
            <section id="blog" className="pb-28 pt-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">
                            Mobile Experience
                        </Badge>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                            Healthcare Innovation<br />& Insights
                        </h2>
                        <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Stay informed with the latest developments in anonymous healthcare,
                            telemedicine trends, and insights from leading medical professionals
                        </p>
                    </div>

                    {/* Search + Filter Section */}
                    <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 w-full">
                            <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                placeholder="Search insights..."
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:outline-none text-slate-700"
                            />
                        </div>

                        {/* Filter Dropdown */}
                        <div className='flex gap-4'>
                            <select
                                value={filter}
                                onChange={handleFilter}
                                className="w-full px-4 py-3 border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/40 text-slate-700 bg-white"
                            >
                                <option value="latest">Latest</option>
                                <option value="popular">Popular</option>
                                <option value="featured">Featured</option>
                            </select>

                            {/* Filter Dropdown */}
                            <select
                                value={filter}
                                onChange={handleFilter}
                                className="w-full px-4 py-3 border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/40 text-slate-700 bg-white"
                            >
                                <option value="all">All</option>
                                <option value="3">3 mins</option>
                                <option value="5">5 mins</option>
                                <option value="7">7 mins</option>
                                <option value="10">10 mins</option>
                                <option value="15">15 mins</option>
                                <option value="20">20 mins</option>
                            </select>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">
                        {Array.from({ length: 15 }).map((_, index) => (
                            <Link href="/insights/The-Future-of-Anonymous-Healthcare" key={index}>
                                <div className="md:col-span-2 lg:col-span-1 group">
                                    <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white h-full group-hover:-translate-y-2 rounded-3xl overflow-hidden">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                                alt="Healthcare Technology"
                                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-primary text-white border-0 shadow-lg">Featured</Badge>
                                            </div>
                                        </div>
                                        <CardContent className="py-8 px-4">
                                            <div className="flex items-center space-x-4 my-4 text-sm text-slate-500">
                                                <span>Jan 15, 2025</span>
                                                <span>8 min read</span>
                                            </div>
                                            <h3 className="text-2xl line-clamp-2 font-bold text-slate-900 mb-4 leading-tight tracking-tight group-hover:text-primary transition-colors">
                                                The Future of Anonymous Healthcare: Privacy Revolution
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">
                                                Discover how anonymous healthcare platforms are transforming patient care by eliminating
                                                privacy barriers and creating more accessible medical consultations for sensitive health concerns.
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                                                        <LuStethoscope className="w-4 h-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-slate-900">Dr. Sarah Chen</div>
                                                        <div className="text-xs text-slate-500">Digital Health Expert</div>
                                                    </div>
                                                </div>
                                                <FaArrowRightLong className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 rounded-xl border ${currentPage === i + 1
                                    ? "bg-primary text-white border-primary"
                                    : "border-slate-200 text-slate-600 hover:bg-slate-100"
                                    } transition`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </WebLayout>
    )
}

export default Page
