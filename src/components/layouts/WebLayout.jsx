import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { RiShieldLine } from 'react-icons/ri'
import { AiOutlineClose } from "react-icons/ai";
import klowqLogo from '@assets/logo.png'
import { Button } from "@/components/organisms/Button";
import { useState } from "react";
import Link from 'next/link';
import WaitList from '../organisms/WaitList';

function WebLayout({ children  }) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const headerRef = useRef(null);
    const subHeaderRef = useRef(null);
    const [showWaitModal, setshowWaitModal] = useState(false)


    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            const subHeight = subHeaderRef.current.offsetHeight;
            document.documentElement.style.setProperty('--header-height', `${height}px`);
            document.documentElement.style.setProperty('--header-subheight', `${subHeight}px`);
        }
    }, []);

    return (
        <div className='flex flex-col min-h-screen'>
            <WaitList showWaitModal={showWaitModal} setshowWaitModal={setshowWaitModal} />
            <nav className="border-b border-slate-200/60 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-4">
                            <Link href='/'>
                                <div className="flex items-center space-x-4">
                                    <div className="w-11 h-11 bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-md border border-slate-200/50 flex items-center justify-center">
                                        <Image src={klowqLogo} alt="KLOWQ" className="w-7 h-7" />
                                    </div>
                                    <span className="text-2xl font-semibold text-slate-900 tracking-tight">KLOWQ</span>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center space-x-12">
                            <a href="/#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium tracking-wide">Platform</a>
                            <a href="/#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors font-medium tracking-wide">How It Works</a>
                            <a href="/#mobile-app" className="text-slate-600 hover:text-slate-900 transition-colors font-medium tracking-wide">Mobile App</a>
                            <a href="/#faq" className="text-slate-600 hover:text-slate-900 transition-colors font-medium tracking-wide">FAQ</a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Button
                                onClick={() => setshowWaitModal(true)}
                                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 rounded-xl"
                            >
                                Join WaitList
                                {/* <ArrowRight className="w-4 h-4 ml-2" /> */}
                            </Button>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                {mobileMenuOpen ? <AiOutlineClose /> : <HiBars3BottomLeft />}
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md">
                        <div className="px-4 py-8 space-y-6">
                            <a href="#features" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-3 px-2 rounded-lg hover:bg-slate-50">Platform</a>
                            <a href="#how-it-works" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-3 px-2 rounded-lg hover:bg-slate-50">How It Works</a>
                            <a href="#mobile-app" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-3 px-2 rounded-lg hover:bg-slate-50">Mobile App</a>
                            <a href="#faq" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-3 px-2 rounded-lg hover:bg-slate-50">FAQ</a>
                        </div>
                    </div>
                )}
            </nav>



            <div className={`flex-grow flex mt-[var(--header-height)]`}>
                <div className={`flex-auto`}>{children}</div>
            </div>

            <footer className="bg-secondary/70 border-t border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
                        <div className="md:col-span-2 space-y-6">
                            <Link href='/'>
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center">
                                        <Image src={klowqLogo} alt="KLOWQ" className="w-9 md:w-24 h-9 md:h-24" />
                                    </div>
                                    <span className="md:text-3xl text-sm relative -left-1 md:-left-5 text-primary font-semibold tracking-tight">KLOWQ</span>
                                </div>
                            </Link>

                            <p className="text-slate-600 leading-relaxed max-w-md md:text-lg">
                                Revolutionizing healthcare through anonymous consultations that connect patients with verified
                                medical professionals while maintaining complete privacy and security.
                            </p>
                            <div className="flex items-center space-x-3 text-sm text-slate-500 bg-slate-50 rounded-2xl px-4 py-3">
                                <RiShieldLine className="md:w-6 md:h-6" />
                                <span className="font-medium text-sm md:text-base">Your privacy is our highest priority</span>
                            </div>
                        </div>

                        <div className="space-y-2 md:space-y-8">
                            <h4 className="font-semibold text-slate-900 md:text-xl tracking-tight">For Patients</h4>
                            <ul className="space-y-2 md:space-y-4 text-slate-600">
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Find Specialists</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Anonymous Consultations</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Health Resources</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Secure Reviews</li>
                            </ul>
                        </div>

                        <div className="space-y-2 md:space-y-8">
                            <h4 className="font-semibold text-slate-900 md:text-xl tracking-tight">For Providers</h4>
                            <ul className="space-y-2 md:space-y-4 text-slate-600">
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Professional Profile</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Telemedicine Platform</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Digital Prescriptions</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Knowledge Sharing</li>
                            </ul>
                        </div>

                        <div className="space-y-2 md:space-y-8">
                            <h4 className="font-semibold text-slate-900 md:text-xl tracking-tight">Legal & Support</h4>
                            <ul className="space-y-2 md:space-y-4 text-slate-600">
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Privacy Policy</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Terms of Service</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Security Standards</li>
                                <li className="hover:text-slate-900 transition-colors cursor-pointer text-sm md:text-lg">Help Center</li>
                            </ul>
                        </div>
                    </div>


                    <div className="border-t mt-5 border-slate-200/60 pt-8 text-center">
                        <p className="text-slate-600 text-xs md:text-base">
                            &copy; 2025 KLOWQ. All rights reserved. Connecting healthcare anonymously and securely.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default WebLayout