'use client'
import Image from "next/image";
import { AiOutlineComment } from "react-icons/ai";
import { TbClock, TbPillFilled, TbPills, TbStethoscope } from "react-icons/tb";
import { BsArrowRight, BsShield } from "react-icons/bs";
import klowqLogo from '@assets/logo.png'
import { Button } from "@/components/organisms/Button";
import { FiCheckCircle, FiFileText } from "react-icons/fi";
import { RiGooglePlayLine, RiShieldLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { FaAppStore, FaPills } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import mockup from '@assets/images/mockup2.png'
import { FaArrowRightLong, FaUserDoctor } from "react-icons/fa6";
import { SlStar } from "react-icons/sl";
import { LuAward, LuHeartHandshake, LuSmartphone, LuUsers } from "react-icons/lu";
import { Badge } from "@/components/organisms/Badge";
import { Card } from "@/components/organisms/Card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/organisms/Accordion";
import { LiaUserNurseSolid } from "react-icons/lia";
import { GiLoveInjection } from "react-icons/gi";
import Link from "next/link";
import WebLayout from "@/components/layouts/WebLayout";
import InsightChip from "@/components/organisms/InsightChip";
import WaitList from "@/components/organisms/WaitList";
import { useState } from "react";

export default function Home() {
  const [showWaitModal, setshowWaitModal] = useState(false)


  return (
    <WebLayout >
      <WaitList showWaitModal={showWaitModal} setshowWaitModal={setshowWaitModal} />

      <div className="min-h-screen bg-white">
        <div className="grid items-center relative">
          <div className="text-gray-500/5 text-7xl absolute pointer-events-none z-10 h-full w-full bottom-0 right-0">
            <div className="h-[50%] relative flex items-center justify-between">
              <div className="flex-auto flex justify-center animate-bounce"><GiLoveInjection /></div>
              <div className="flex-auto flex justify-center animate-bounce relative bottom-16"><FaPills /></div>
              <div className="flex-auto flex justify-center animate-bounce"><TbPills /></div>
            </div>
            <div className="h-[50%] relative flex items-center justify-between">
              <div className="flex-auto flex justify-center animate-bounce"><TbPillFilled /></div>
              <div className="flex-auto flex justify-center delay-700 animate-bounce"><TbStethoscope /></div>
            </div>
            <div className="h-[50%] relative flex items-center justify-between">
              <div className="flex-auto flex justify-center animate-bounce"><LiaUserNurseSolid /></div>
              <div className="flex-auto flex justify-center animate-bounce relative bottom-64"><FaUserDoctor /></div>
              <div className="flex-auto flex justify-center animate-bounce"><MdOutlineSick /></div>
            </div>
          </div>
          <div className="absolute z-0 top-0 w-32 h-32 md:w-96 md:h-96 left-0 bg-primary rounded-full"></div>
          <div className="absolute z-0 top-0 w-32 h-32 md:w-96 md:h-96 right-0 bg-chart-4 rounded-full"></div>
          <section className="py-28 relative lg:py-40 bg-gradient-to-br backdrop-blur-3xl from-slate-50/80 via-white/80 to-slate-50/80 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100/40 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))]" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-6xl mx-auto">
                <div className="inline-flex text-[9px] md:text-base items-center space-x-3 bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/20 rounded-full px-6 py-3 mb-10 shadow-lg backdrop-blur-sm">
                  <BsShield className="h-5 w-5 text-primary" />
                  <span className="font-medium text-primary tracking-wide">Revolutionary Anonymous Healthcare Platform</span>
                </div>

                <h1 className="text-[34px] md:text-6xl lg:text-8xl font-bold text-slate-900 mb-10 leading-[0.9] tracking-tight">
                  Healthcare Without
                  <span className="block text-transparent bg-gradient-to-r  mt-5 from-primary to-blue-600 bg-clip-text">Boundaries</span>
                </h1>

                <p className="text-sm md:text-lg lg:text-2xl text-slate-600 mb-16 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
                  Connect with board-certified medical professionals through our secure, anonymous platform.
                  Experience comprehensive healthcare consultations without compromising your privacy or identity.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                  <Button
                    size="lg"
                    onClick={() => setshowWaitModal(true)}
                    className="bg-gradient-to-r from-primary cursor-pointer to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-2xl hover:shadow-3xl transition-all duration-500 px-12 py-5 text-xl h-auto rounded-2xl group"
                  >
                    Join WaitList
                    <BsArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-12 py-5 text-xl h-auto shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl backdrop-blur-sm"
                  >
                    Watch Demo
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  <div className="text-center group">
                    <div className="text-xl md:text-2xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-slate-600 font-medium tracking-wide">Anonymous</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl md:text-2xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-slate-600 font-medium tracking-wide">Available</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl md:text-2xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">HIPAA</div>
                    <div className="text-slate-600 font-medium tracking-wide">Compliant</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl md:text-2xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-slate-600 font-medium tracking-wide">Specialists</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="features" className="md:py-28 py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24">
              <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">Platform Overview</Badge>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                Two Interfaces,<br />One Secure Ecosystem
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Seamlessly connecting patients with healthcare providers through cutting-edge anonymous consultation technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-16 lg:gap-20">
              <div className="group">
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-white via-slate-50/30 to-white p-4 md:p-12 h-full rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
                  <div className="flex items-center mb-5 md:mb-10">
                    <div className="md:w-20 w-12 md:h-20 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md md:rounded-3xl flex items-center justify-center mr-2 md:mr-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <LuUsers className="md:w-10 md:h-10 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="md:text-3xl text-lg font-bold text-slate-900 md:mb-2 tracking-tight">Patient Platform</h3>
                      <p className="text-slate-600 text-sm md:text-lg">Your gateway to anonymous healthcare</p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-8">
                    <div className="flex items-start space-x-5">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        <FiCheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 md:mb-3 md:text-lg">Anonymous Specialist Discovery</h4>
                        <p className="text-slate-600 text-xs md:text-base leading-relaxed">Browse 500+ verified healthcare providers across 25+ medical specialties while maintaining complete anonymity and privacy protection.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        <AiOutlineComment className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 md:mb-3 md:text-lg">Secure Encrypted Consultations</h4>
                        <p className="text-slate-600 text-xs md:text-base leading-relaxed">Receive professional medical guidance through military-grade end-to-end encrypted communications without revealing your identity.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        <SlStar className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 md:mb-3 md:text-lg">Confidential Reviews System</h4>
                        <p className="text-slate-600 text-xs md:text-base leading-relaxed">Share anonymous feedback and read genuine reviews to help fellow patients make informed healthcare decisions.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="group">
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-white via-slate-50/30 to-white p-4 md:p-12 h-full rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
                  <div className="flex items-center mb-5 md:mb-10">
                    <div className="md:w-20 w-12 md:h-20 h-12 bg-gradient-to-br from-primary/10 to-primafrom-primary/5 rounded-md md:rounded-3xl flex items-center justify-center mr-2 md:mr-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <TbStethoscope className="md:w-10 md:h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="md:text-3xl text-lg font-bold text-slate-900 md:mb-2 tracking-tight">Provider Platform</h3>
                      <p className="text-slate-600 text-sm md:text-lg">Professional telemedicine suite</p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-8">
                    <div className="flex items-start space-x-5">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        <LuAward className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 md:mb-3 md:text-lg">Verified Professional Profiles</h4>
                        <p className="text-slate-600 text-xs md:text-base leading-relaxed">Showcase credentials, specializations, and clinical experience to attract patients seeking your specific medical expertise.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        <FiFileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 md:mb-3 md:text-lg">Digital Prescription Management</h4>
                        <p className="text-slate-600 text-xs md:text-base leading-relaxed">Create, manage, and transmit electronic prescriptions through our integrated nationwide pharmacy network system.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        <LuHeartHandshake className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 md:mb-3 md:text-lg">Medical Content Publishing</h4>
                        <p className="text-slate-600 text-xs md:text-base leading-relaxed">Share evidence-based health insights and build professional trust within the medical community platform.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>




        <section id="how-it-works" className="py-28 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24">
              <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">Simple Process</Badge>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                Three Steps to<br />Anonymous Healthcare
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Our streamlined process ensures you can access professional medical consultations quickly and securely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
              <div className="group text-center">
                <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white p-10 h-full group-hover:-translate-y-3 rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
                  <div className="inline-flex items-center justify-center md:w-24 w-12 md:h-24 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <span className="text-lg md:text-3xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">Select Your Role</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Choose whether you&apos;re seeking medical consultation as a patient or providing healthcare services as a licensed professional.
                  </p>
                </Card>
              </div>

              <div className="group text-center">
                <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white p-10 h-full group-hover:-translate-y-3 rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
                  <div className="inline-flex items-center justify-center md:w-24 w-12 md:h-24 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <span className="text-lg md:text-3xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">Connect Securely</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Engage with healthcare providers or patients through our encrypted, anonymous communication platform with complete privacy protection.
                  </p>
                </Card>
              </div>

              <div className="group text-center">
                <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white p-10 h-full group-hover:-translate-y-3 rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
                  <div className="inline-flex items-center justify-center md:w-24 w-12 md:h-24 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <span className="text-lg md:text-3xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">Receive / Give Care</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Get or give professional medical advice, digital prescriptions, and ongoing healthcare support through our comprehensive platform.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="mobile-app" className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24">
              <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">Mobile Experience</Badge>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                Healthcare in<br />Your Pocket
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Download our mobile app for iOS and Android to access anonymous healthcare consultations anywhere, anytime
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="md:w-12 w-8 h-8 md:h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-md md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <LuSmartphone className="md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight">Native Mobile Experience</h3>
                      <p className="text-slate-600 leading-relaxed text-xs md:text-lg">Optimized for mobile with intuitive navigation, push notifications, and offline message drafting capabilities.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="md:w-12 w-8 h-8 md:h-12 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-md md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <RiShieldLine className="md:w-6 md:h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight">Enhanced Security</h3>
                      <p className="text-slate-600 leading-relaxed text-xs md:text-lg">Biometric authentication, secure key storage, and enhanced encryption specifically designed for mobile devices.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="md:w-12 w-8 h-8 md:h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-md md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <TbClock className="md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight">Real-time Consultations</h3>
                      <p className="text-slate-600 leading-relaxed text-xs md:text-lg">Instant messaging, real-time notifications, and seamless appointment scheduling on the go.</p>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button
                    size="lg"
                    className="bg-slate-900 relative hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg h-auto rounded-2xl group flex items-center justify-center"
                  >
                    <div className='relative right-1.5'>
                      <div className='bg-red-500 absolute -top-11 -left-5 h-4 text-[8px] flex items-center gap-1 text-white px-2 rounded-md'>
                        <div>coming</div>
                        <div>soon</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <FaAppStore className="md:w-5 md:h-5 text-slate-900" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/80">Download on the</div>
                        <div className="text-lg font-semibold">App Store</div>
                      </div>
                    </div>
                  </Button>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r relative from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg h-auto rounded-2xl group flex items-center justify-center"
                  >
                    <div className='relative right-1.5'>
                      <div className='bg-red-500 absolute -top-11 -left-5 h-4 text-[8px] flex items-center gap-1 text-white px-2 rounded-md'>
                        <div>coming</div>
                        <div>soon</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <RiGooglePlayLine className="md:w-5 md:h-5 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/80">Get it on</div>
                        <div className="text-lg font-semibold">Google Play</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className=" flex items-center justify-center">
                  <Image src={mockup} alt="mockup_screen" className="w-full" />
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl p-4 md:p-9 shadow-2xl">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-primary mb-1">4.9</div>
                        <div className="text-[9px] md:text-sm text-slate-600">App Rating</div>
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-primary mb-1">1M+</div>
                        <div className="text-[9px] md:text-sm text-slate-600">Downloads</div>
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-primary mb-1">50k+</div>
                        <div className="text-[9px] md:text-sm text-slate-600">Reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


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
                Array.from({ length: 6 }).map((_, index) => (
                  <InsightChip key={index} />
                ))
              }


            </div>

            <div className="text-center">
              <Link href='/insights'>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-12 py-4 text-lg h-auto shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl group"
                >
                  View All Posts
                  <FaArrowRightLong className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>


        <section id="about" className="py-28 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24">
              <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">Security & Trust</Badge>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                Why Healthcare Professionals<br />Choose KLOWQ
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Our platform revolutionizes healthcare delivery by prioritizing privacy, security, and clinical excellence while eliminating traditional barriers to medical consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center md:w-20 w-14 md:h-20 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <RiShieldLine className="md:w-6 md:h-6 text-green-600" />
                </div>
                <h3 className="md:text-2xl text-lg font-bold text-slate-900 mb-2 md:mb-5 tracking-tight">Military-Grade Security</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                  End-to-end encryption, zero-knowledge architecture, and HIPAA compliance ensure your medical information remains completely private and secure.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center md:w-20 w-14 md:h-20 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <LuAward className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="md:text-2xl text-lg font-bold text-slate-900 mb-2 md:mb-5 tracking-tight">Verified Medical Professionals</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                  All healthcare providers undergo rigorous credential verification, licensing checks, and ongoing professional monitoring and assessment.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center md:w-20 w-14 md:h-20 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <RxLightningBolt className="md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="md:text-2xl text-lg font-bold text-slate-900 mb-2 md:mb-5 tracking-tight">Instant Access</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                  24/7 availability with real-time messaging, immediate consultation booking, and rapid response from qualified healthcare providers.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-4 md:p-12 lg:p-16 shadow-2xl">
              <div className="text-center mb-4 md:mb-12">
                <h3 className="text-lg md:text-3xl font-bold text-slate-900 mb-2 md:mb-5 tracking-tight">Trusted by Healthcare Leaders</h3>
                <p className="text-slate-600 text-sm md:text-lg leading-relaxed">Our platform meets the highest standards for medical data protection and clinical excellence</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 items-center justify-center">
                <div className="text-center group">
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text md:mb-3 group-hover:scale-110 transition-transform duration-300">HIPAA</div>
                  <div className="text-slate-600 text-sm md:text-base font-medium tracking-wide">Compliant</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text md:mb-3 group-hover:scale-110 transition-transform duration-300">SOC 2</div>
                  <div className="text-slate-600 text-sm md:text-base font-medium tracking-wide">Certified</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text md:mb-3 group-hover:scale-110 transition-transform duration-300">256-bit</div>
                  <div className="text-slate-600 text-sm md:text-base font-medium tracking-wide">Encryption</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text md:mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-slate-600 text-sm md:text-base font-medium tracking-wide">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section id="faq" className="py-28 bg-white">
          <div className="mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24">
              <Badge className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/20 mb-4 md:mb-8 px-4 py-2 text-sm tracking-wide">Frequently Asked Questions</Badge>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                Questions & Answers
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Everything you need to know about KLOWQ&apos;s anonymous healthcare platform
              </p>
            </div>


            <div className="grid grid-cols-1 gap-y-6 gap-x-6 lg:grid-cols-2">
              <div className="">
                <Accordion type="single" collapsible className="space-y-6">
                  <AccordionItem value="item-1" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      How does KLOWQ ensure complete anonymity?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      KLOWQ uses advanced zero-knowledge architecture where no personal identifying information is stored or transmitted. All communications are encrypted end-to-end, and we assign anonymous identifiers that cannot be traced back to real identities. Your medical consultations remain completely private and anonymous.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      Are all healthcare providers verified and licensed?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      Yes, absolutely. Every healthcare provider on our platform undergoes rigorous credential verification including license verification, board certifications, malpractice insurance confirmation, and background checks. We continuously monitor their professional standing to ensure the highest quality of care.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      How do digital prescriptions work?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      Licensed healthcare providers can issue digital prescriptions through our secure system. These prescriptions are transmitted directly to participating pharmacies nationwide. You receive a secure prescription code that can be used to pick up your medication without revealing your identity to the pharmacy staff.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      What types of medical consultations are available?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      Our platform covers 25+ medical specialties including general medicine, mental health, dermatology, gynecology, cardiology, endocrinology, and more. We offer consultations for routine health questions, chronic condition management, prescription renewals, second opinions, and preventive care guidance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      How much do consultations cost?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      Consultation fees vary by specialty and provider experience. General consultations typically range from $30-80, while specialist consultations range from $50-150. Many providers offer follow-up messages at no additional cost. Payment is processed securely without revealing your financial information to healthcare providers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      Is KLOWQ HIPAA compliant?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      Yes, KLOWQ is fully HIPAA compliant and exceeds industry security standards. We use military-grade encryption, secure data centers, regular security audits, and strict access controls. Our platform is also SOC 2 certified and undergoes continuous third-party security assessments.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      Can I use KLOWQ for emergency medical situations?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      No, KLOWQ is not intended for medical emergencies. For life-threatening situations, please call 911 or go to your nearest emergency room immediately. Our platform is designed for non-urgent consultations, routine care, and ongoing health management.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border-0 bg-slate-50 rounded-2xl px-8 py-4 shadow-lg">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                      How do I get started with KLOWQ?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      Getting started is simple: choose your role (patient or healthcare provider), create your anonymous profile, and begin browsing specialists or patients. No personal information is required - just answer a few health-related questions to ensure the best care matching. The entire process takes less than 5 minutes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <div className="">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-10 mb-12 border border-slate-200/30">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-4">
                        <RiShieldLine className="md:w-8 md:h-8 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Important Medical Disclaimer</h3>
                      <p className="text-slate-600 text-lg">Please read this important information before using KLOWQ</p>
                    </div>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                      <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/50">
                        <h4 className="font-semibold text-slate-900 mb-3 text-lg">Not for Emergency Use</h4>
                        <p className="text-base">
                          KLOWQ is not intended for emergency medical situations. If you are experiencing a medical emergency,
                          please call 911 immediately or go to your nearest emergency room. Do not use this platform for
                          urgent or life-threatening conditions.
                        </p>
                      </div>

                      <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/50">
                        <h4 className="font-semibold text-slate-900 mb-3 text-lg">General Medical Information</h4>
                        <p className="text-base">
                          The information provided through KLOWQ consultations is for informational and educational purposes only.
                          It is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the
                          advice of qualified healthcare providers regarding any medical condition or treatment.
                        </p>
                      </div>

                      <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/50">
                        <h4 className="font-semibold text-slate-900 mb-3 text-lg">Licensed Healthcare Providers</h4>
                        <p className="text-base">
                          All healthcare providers on KLOWQ are licensed medical professionals. However, telemedicine
                          consultations have limitations compared to in-person examinations. Some conditions may require
                          physical examination, laboratory tests, or imaging studies for proper diagnosis and treatment.
                        </p>
                      </div>

                      <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/50">
                        <h4 className="font-semibold text-slate-900 mb-3 text-lg">Prescription Limitations</h4>
                        <p className="text-base">
                          Prescription medications may only be prescribed when medically appropriate and in compliance with
                          applicable laws and regulations. Controlled substances and certain medications may have additional
                          restrictions. Follow all prescription instructions and consult with your healthcare provider or
                          pharmacist if you have questions.
                        </p>
                      </div>

                      <div className="bg-white/80 rounded-2xl p-6 border border-slate-200/50">
                        <h4 className="font-semibold text-slate-900 mb-3 text-lg">Platform Limitations</h4>
                        <p className="text-base">
                          While KLOWQ maintains high security standards and privacy protections, no electronic system is
                          100% secure. Users should not share sensitive personal information beyond what is necessary for
                          medical consultation. KLOWQ is not responsible for any technical issues that may affect service
                          availability.
                        </p>
                      </div>

                      <div className="text-center pt-4">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          By using KLOWQ, you acknowledge that you have read, understood, and agree to these terms.
                          If you do not agree with any part of this disclaimer, please do not use our services.
                        </p>
                        <p className="text-xs text-slate-500 mt-4">
                          Last updated: January 2025 • For questions about this disclaimer, please contact our support team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>



        <section className="py-14 md:py-28 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center md:w-24 w-14 md:h-24 h-14 bg-white backdrop-blur-sm rounded-md md:rounded-3xl mb-4 md:mb-10 shadow-xl">
              <Image src={klowqLogo} alt="KLOWQ" className="w-14 md:w-24 h-14 md:h-24" />
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-8 leading-tight tracking-tight">
              Ready to Transform<br />Your Healthcare Experience?
            </h2>
            <p className="text-sm md:text-lg lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Join thousands of patients and healthcare providers who trust KLOWQ for secure,
              confidential medical consultations without compromising privacy or quality of care.
            </p>

            <div className="flex mt-6 md:mt-12 flex-col sm:flex-row gap-8 justify-center mb-16">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setshowWaitModal(true)}
                className="bg-white text-primary cursor-pointer hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-500 px-12 py-5 text-xl h-auto rounded-2xl group"
              >
                Join WaitList
                <BsArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80 text-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm">
                <span>No Personal Information</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm">
                <span>Completely Anonymous</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm">
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm">
                <span>Licensed Professionals</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </WebLayout>
  );
}