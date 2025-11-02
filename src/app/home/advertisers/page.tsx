/**
 * Advertisers page component showcasing platform benefits and features
 * This serves as a landing page for potential advertisers
 */
import Image from 'next/image';

const AdvertisersPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                Trusted by 10,000+ Active Campaigns
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Scale Link-Building with 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300"> Verified Publishers</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                                Discover vetted sites, filter by niche and metrics, place secure orders, and track everything in one dashboard. Lower pricing inside the portal—no back-and-forth, no messy email threads.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a 
                                    href="/auth/signup?role=advertiser"
                                    className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center cursor-pointer"
                                >
                                    Create Free Advertiser Account
                                </a>
                                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                    Browse Marketplace
                                </button>
                            </div>
                            <div className="flex items-center gap-8 text-sm">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Verified publishers
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Escrow-protected orders
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Auto invoices & order history
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 scale-105"></div>
                                <Image
                                    src="/home/advertiser.jpg"
                                    alt="BigPosting Advertiser Dashboard"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-2xl relative z-10 border border-white/20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Lower portal pricing notice */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
                        <p className="text-sm text-blue-100">
                            Lower portal pricing vs. email orders. A secure credit deposit is required before ordering.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature Highlights Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                            ⚡ Streamlined Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Find the right sites—fast
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Search thousands of vetted publishers by niche, language, country, Moz DA, Ahrefs DR, traffic, price, and turnaround time.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 mb-20">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Search</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Filter by niche, metrics, location, and more to find publishers that perfectly match your campaign goals.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Orders</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Fund a secure deposit, share your brief, and manage everything in one order thread. Escrow protection included.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Portal Pricing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lower costs and clean reporting. Portal-only pricing beats email rates with transparent fee and tax-ready invoices.
                            </p>
                        </div>
                    </div>

                    {/* Screenshots Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                                📊 Real-time Tracking
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Order with escrow and stay in control
                            </h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Deadlines, revisions, and approvals are tracked automatically. Download tax-ready invoices and keep full order history.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Automatic deadline tracking</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Revision management system</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Tax-ready invoice downloads</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-105"></div>
                            <Image
                                src="/home/Design.png"
                                alt="BigPosting Order Management Dashboard"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl relative z-10 border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted Companies Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Trusted by Leading Brands
                        </h2>
                        <p className="text-lg text-gray-600">
                            Join successful advertisers who scale their link-building with BigPosting
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-16">
                        <Image
                            src="/logos/wellboth.png"
                            alt="Wellboth"
                            width={120}
                            height={60}
                            className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <Image
                            src="/logos/mediora.png"
                            alt="Mediora"
                            width={120}
                            height={60}
                            className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <Image
                            src="/logos/interia.png"
                            alt="Interia"
                            width={120}
                            height={60}
                            className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <Image
                            src="/logos/hydralab.png"
                            alt="Hydralab"
                            width={120}
                            height={60}
                            className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <Image
                            src="/logos/humbbble.png"
                            alt="Humbbble"
                            width={120}
                            height={60}
                            className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "10,000+", label: "Active Campaigns", icon: "🚀" },
                            { number: "500+", label: "Verified Publishers", icon: "✅" },
                            { number: "98%", label: "Customer Satisfaction", icon: "⭐" },
                            { number: "24/7", label: "Support Available", icon: "💬" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
                                <div className="text-2xl mb-2">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                            🎯 Simple Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Get started with your link-building campaign in just three simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting lines */}
                        <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                        
                        {[
                            {
                                step: "01",
                                title: "Create Your Campaign",
                                description: "Set up your campaign brief with target keywords, content requirements, and budget. Our streamlined process gets you started in minutes.",
                                icon: "📝",
                                color: "from-blue-500 to-purple-600"
                            },
                            {
                                step: "02",
                                title: "Choose Publishers",
                                description: "Browse our vetted network and filter by niche, metrics, and location. Select publishers that align with your brand and campaign goals.",
                                icon: "🔍",
                                color: "from-purple-500 to-pink-600"
                            },
                            {
                                step: "03",
                                title: "Track & Optimize",
                                description: "Monitor order progress, manage revisions, and download reports. Scale successful campaigns with proven publisher relationships.",
                                icon: "📊",
                                color: "from-pink-500 to-red-600"
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center relative">
                                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10`}>
                                    {step.icon}
                                </div>
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-600 shadow-md">
                                    {step.step}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                            💬 What Our Clients Say
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Trusted by Marketing Teams
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how BigPosting helps companies scale their link-building efforts
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "BigPosting streamlined our entire link-building process. We went from managing dozens of email threads to having everything organized in one dashboard. The escrow system gives us peace of mind.",
                                author: "Sarah Johnson",
                                title: "SEO Manager",
                                company: "TechCorp",
                                avatar: "/avatars/avatar-1.jpg",
                                rating: 5
                            },
                            {
                                quote: "The quality of publishers on BigPosting is exceptional. We've built relationships with high-DR sites that we never would have found otherwise. Our organic traffic has grown 40% this quarter.",
                                author: "Michael Chen",
                                title: "Digital Marketing Director",
                                company: "Growth Co",
                                avatar: "/avatars/avatar-2.jpg",
                                rating: 5
                            },
                            {
                                quote: "Portal pricing is a game-changer. We're saving 20-30% compared to direct outreach, and the automated invoicing makes our accounting team happy. Highly recommend for any serious link-building operation.",
                                author: "Emma Rodriguez",
                                title: "Head of Content",
                                company: "Scale Media",
                                avatar: "/avatars/avatar-3.jpg",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-4"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.title} at {testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Join 10,000+ Active Campaigns
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Ready to Scale Your 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300"> Link-Building?</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Join BigPosting today and start building high-quality backlinks with verified publishers. Lower pricing, secure escrow, and full order tracking included.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <a 
                            href="/auth/signup?role=advertiser"
                            className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center cursor-pointer"
                        >
                            Create Free Advertiser Account
                        </a>
                        <button className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Browse Marketplace
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-blue-100">No setup fees</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-blue-100">Escrow protection</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-blue-100">Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisersPage;