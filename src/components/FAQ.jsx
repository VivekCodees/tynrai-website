import React from 'react'

// h-[70vh] bg-white flex flex-col items-center justify-evenly
// w-full text-gray-600 py-4 mb-10
// text-center text-5xl custom
// flex flex-grow w-full max-w-4xl p-4 gap-56
// w-1/2  space-y-2 p-4 
// text-2xl font-semibold text-gray-700 mb-2

function FAQ() {
    return (
        <div className="lg:h-[70vh] h-[40vh] bg-white flex flex-col items-center justify-evenly mt-20">
            <header className="w-full text-gray-600 py-4 lg:mb-10">
                <h1 className="text-center lg:text-center lg:text-5xl text-2xl custom">Why Choose Us</h1>
            </header>
            <div className="mt-0 ml-4 lg:flex lg:flex-grow lg:w-full lg:max-w-4xl lg:p-4 lg:gap-56">
                <div className="w-full lg:w-1/2 lg:space-y-2 p-4 space-y-2">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">Regional Expertise</h2>
                    <p className="text-black">
                    We understand the specific challenges and opportunities that come with operating in Shillong and Northeast India. Our services are designed to meet the needs of local businesses.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 lg:space-y-2 p-4 space-y-2">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">Commitment to Growth</h2>
                    <p className="text-black">
                    We are committed to driving the digital transformation of Shillong. By choosing Tynrai.org, you’re not just getting a service provider; you’re partnering with a company that’s dedicated to the growth of the region.
                    </p>
                </div>
            </div>

            {/* flex flex-grow w-full max-w-4xl p-4 gap-56
            w-1/2  space-y-2 p-4 
            text-2xl font-semibold text-gray-700 */}
            <div className="mt-0 ml-4 lg:flex lg:flex-grow lg:w-full lg:max-w-4xl lg:p-4 lg:gap-56">
                <div className="w-full lg:w-1/2 p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Comprehensive Service Offering</h2>
                    <p className="text-black">
                    From server hosting and management to web development and IT consulting, Tynrai.org is your one-stop shop for all digital infrastructure needs.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Future-Proof Solutions</h2>
                    <p className="text-black">
                    We use the latest technology to ensure that our services are not only reliable today but also scalable and adaptable for the future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FAQ
