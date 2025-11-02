/**
 * Publishers page component showcasing monetization opportunities and platform benefits
 * This serves as a landing page for content creators and website owners
 */
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PublishersPage = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Monetize Your 
                                <span className="block text-yellow-300">Content Today</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                                Join BigPosting's premium publisher network and turn your quality content into a reliable revenue stream with top-tier advertisers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/auth/signup?role=publisher" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center">
                                    Start Earning Now
                                </Link>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
                                    Calculate Earnings
                                </button>
                            </div>
                            <div className="flex items-center mt-8 space-x-6">
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold mr-2">5,000+</span>
                                    <span className="text-green-100">Active Publishers</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold mr-2">$2M+</span>
                                    <span className="text-green-100">Paid Out</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Image
                                    src="/home/publisher.jpg"
                                    alt="Publisher Dashboard Preview"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-2xl"
                                />
                                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold">
                                    Live Dashboard
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 opacity-10">
                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2"/>
                        <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="2"/>
                        <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
            </div>

            {/* Platform Preview Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            See Your Earning Potential in Action
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get a real-time view of your dashboard, manage your websites, and track your earnings - all in one place.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Real-time Analytics</h4>
                                        <p className="text-gray-600">Track your earnings, order status, and website performance instantly</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Order Management</h4>
                                        <p className="text-gray-600">Manage incoming orders and communicate with advertisers seamlessly</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Instant Payments</h4>
                                        <p className="text-gray-600">Get paid quickly with our automated payment system</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-2xl">
                                <div className="bg-white rounded-lg p-4 shadow-inner">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="font-semibold text-gray-900">Publisher Dashboard</h5>
                                        <div className="flex space-x-1">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Mock Dashboard Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-blue-50 p-3 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600">12</div>
                                            <div className="text-sm text-blue-600">Active Orders</div>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <div className="text-2xl font-bold text-green-600">$2,450</div>
                                            <div className="text-sm text-green-600">This Month</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="bg-gray-50 p-2 rounded flex justify-between items-center">
                                            <div className="text-sm">healthblog.com - Guest Post</div>
                                            <div className="text-sm text-green-600 font-semibold">$150</div>
                                        </div>
                                        <div className="bg-gray-50 p-2 rounded flex justify-between items-center">
                                            <div className="text-sm">techreview.net - Link Insert</div>
                                            <div className="text-sm text-green-600 font-semibold">$75</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Publishers Choose BigPosting
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Maximize your revenue potential with our publisher-friendly platform designed for content creators who value quality and transparency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                                    </svg>
                                ),
                                title: "Higher Revenue Share",
                                description: "Earn up to 80% revenue share with competitive CPM rates and guaranteed monthly payouts with no minimum threshold.",
                                highlight: "80% Revenue Share"
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                ),
                                title: "Quality Advertisers",
                                description: "Partner with premium brands and vetted advertisers who respect your audience and maintain high content standards.",
                                highlight: "Vetted Brands"
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                ),
                                title: "Performance Analytics",
                                description: "Access detailed insights about your audience, ad performance, and revenue optimization opportunities.",
                                highlight: "Real-time Data"
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                ),
                                title: "Instant Approval",
                                description: "Get approved quickly with our streamlined review process. Start monetizing your content within 24 hours.",
                                highlight: "24h Approval"
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                ),
                                title: "Content Protection",
                                description: "Maintain complete control over which ads appear on your site with advanced filtering and approval tools.",
                                highlight: "Full Control"
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                ),
                                title: "Dedicated Support",
                                description: "Get personalized support from our publisher success team to maximize your earning potential and growth.",
                                highlight: "24/7 Support"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="bg-gray-50 rounded-full p-3 group-hover:bg-green-50 transition-colors">
                                        {benefit.icon}
                                    </div>
                                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                        {benefit.highlight}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Trusted by Publishers Worldwide
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See what content creators are saying about their experience with BigPosting
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Chen",
                                role: "Health & Wellness Blogger",
                                website: "wellnessjunkie.com",
                                image: "/avatars/avatar-1.jpg",
                                testimonial: "BigPosting has transformed my blog's revenue. I've earned over $15,000 in just 6 months with high-quality advertisers that my audience loves.",
                                earnings: "$15K+ in 6 months"
                            },
                            {
                                name: "Marcus Rodriguez",
                                role: "Tech Review Publisher",
                                website: "techinsider.net",
                                image: "/avatars/avatar-2.jpg",
                                testimonial: "The approval process was incredibly fast, and the payment system is seamless. I love having full control over which content gets published.",
                                earnings: "$8K+ monthly"
                            },
                            {
                                name: "Emma Thompson",
                                role: "Lifestyle Blogger",
                                website: "lifestylehub.co",
                                image: "/avatars/avatar-3.jpg",
                                testimonial: "Finally, a platform that respects publishers! The revenue share is the best I've seen, and the support team is always responsive.",
                                earnings: "$12K+ monthly"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                                <div className="flex items-center mb-6">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        <p className="text-sm text-green-600 font-semibold">{testimonial.website}</p>
                                    </div>
                                </div>
                                <blockquote className="text-gray-700 mb-6 italic">
                                    "{testimonial.testimonial}"
                                </blockquote>
                                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                                    {testimonial.earnings}
                                </div>
                                <div className="absolute top-6 right-6">
                                    <svg className="w-8 h-8 text-green-200" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Potential Section */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your Earning Potential
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See what publishers like you are earning with BigPosting. Real earnings from real publishers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                traffic: "10K",
                                period: "Monthly Visitors",
                                earnings: "$200-500",
                                description: "Perfect for growing blogs and niche websites",
                                icon: "🌱",
                                features: ["Guest Posts", "Link Insertions", "Fast Approval"]
                            },
                            {
                                traffic: "100K",
                                period: "Monthly Visitors", 
                                earnings: "$2,000-5,000",
                                description: "Ideal for established content sites and magazines",
                                icon: "🚀",
                                features: ["Premium Placements", "Priority Support", "Custom Rates"],
                                highlighted: true
                            },
                            {
                                traffic: "1M+",
                                period: "Monthly Visitors",
                                earnings: "$20,000+",
                                description: "Enterprise-level publishers and media companies",
                                icon: "👑",
                                features: ["Enterprise Support", "Custom Contracts", "Direct Deals"]
                            }
                        ].map((tier, index) => (
                            <div key={index} className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                                tier.highlighted 
                                    ? 'bg-white border-green-400 shadow-lg transform scale-105' 
                                    : 'bg-white border-gray-200 hover:border-green-200'
                            }`}>
                                <div className="text-center">
                                    <div className="text-4xl mb-4">{tier.icon}</div>
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        {tier.traffic}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-6">
                                        {tier.period}
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {tier.earnings}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-6">
                                        Estimated Monthly Revenue
                                    </div>
                                    <p className="text-gray-700 mb-6 font-medium">
                                        {tier.description}
                                    </p>
                                    <div className="space-y-2">
                                        {tier.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                </svg>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {tier.highlighted && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-white rounded-2xl p-8 border border-green-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Potential</h3>
                        <p className="text-gray-600 mb-6">
                            * Earnings based on average performance across similar publishers in your niche
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Calculate Your Earnings
                            </button>
                            <Link href="/auth/signup?role=publisher" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center">
                                Start Earning Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* How to Get Started */}
            <div className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Getting Started is Easy
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our publisher network in just three simple steps and start monetizing your content today
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connection Lines */}
                        <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-green-300 to-blue-300"></div>
                        
                        {[
                            {
                                step: "01",
                                title: "Apply to Join",
                                description: "Submit your website for review. We'll evaluate your content quality, traffic, and audience engagement to ensure a good fit.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                ),
                                time: "2 minutes"
                            },
                            {
                                step: "02", 
                                title: "Get Approved",
                                description: "Our team reviews applications within 24 hours. Once approved, you'll get access to our publisher dashboard and ad inventory.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                ),
                                time: "24 hours"
                            },
                            {
                                step: "03",
                                title: "Start Earning",
                                description: "Place ad codes on your site and start earning immediately. Track your performance and optimize for maximum revenue.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                                    </svg>
                                ),
                                time: "Immediate"
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative text-center">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                            {step.step}
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            {step.time}
                                        </div>
                                    </div>
                                    <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                        <div className="text-green-600">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/auth/signup?role=publisher" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Get Started Now - It's Free!
                        </Link>
                        <p className="text-sm text-gray-500 mt-4">
                            No setup fees • No hidden costs • Cancel anytime
                        </p>
                    </div>
                </div>

                {/* Background decorations */}
                <div className="absolute top-0 left-0 opacity-5">
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Publisher Requirements
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ensure your website meets our quality standards
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                                Minimum Requirements
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 1,000+ monthly unique visitors</li>
                                <li>• Original, high-quality content</li>
                                <li>• Mobile-responsive website design</li>
                                <li>• Clear navigation and professional layout</li>
                                <li>• Regular content updates</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-sm mr-3">✗</span>
                                Not Allowed
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Adult or explicit content</li>
                                <li>• Illegal or harmful activities</li>
                                <li>• Spam or low-quality content</li>
                                <li>• Copyright-infringing material</li>
                                <li>• Excessive pop-ups or intrusive ads</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 text-white py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Monetize Your Content?
                    </h2>
                    <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Join thousands of publishers who trust BigPosting to maximize their revenue while maintaining content integrity and audience respect.
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-white/20">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">5,000+</div>
                                <div className="text-green-100">Active Publishers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">$2M+</div>
                                <div className="text-green-100">Total Paid Out</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400 mb-2">24h</div>
                                <div className="text-green-100">Average Approval</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                        <Link href="/auth/signup?role=publisher" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Apply Now - It's Free
                        </Link>
                        <button className="border-2 border-white/30 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            View Publisher Guidelines
                        </button>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-green-100">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            No setup fees
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Fast approval process
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            24/7 dedicated support
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Cancel anytime
                        </div>
                    </div>
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-400 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default PublishersPage;