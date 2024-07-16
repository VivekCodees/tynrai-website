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
                <h1 className="text-start lg:text-center lg:text-5xl  ml-5 text-2xl custom">Frequently Asked Questions.</h1>
            </header>
            <div className="mt-0 ml-4 lg:flex lg:flex-grow lg:w-full lg:max-w-4xl lg:p-4 lg:gap-56">
                <div className="w-full lg:w-1/2 lg:space-y-2 p-4 space-y-2">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">What services do you provide?</h2>
                    <p className="text-black">
                    We offer comprehensive digital solutions including web design, development, SEO, e-commerce solutions, social media marketing, custom software, and cloud computing services.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 lg:space-y-2 p-4 space-y-2">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">Why choose us?</h2>
                    <p className="text-black">
                    We are a dedicated team of passionate professionals committed to understanding your unique needs and offering real results at competitive rates.
                    </p>
                </div>
            </div>

            {/* flex flex-grow w-full max-w-4xl p-4 gap-56
            w-1/2  space-y-2 p-4 
            text-2xl font-semibold text-gray-700 */}
            <div className="mt-0 ml-4 lg:flex lg:flex-grow lg:w-full lg:max-w-4xl lg:p-4 lg:gap-56">
                <div className="w-full lg:w-1/2 p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">What is your vision?</h2>
                    <p className="text-black">
                    Our vision is to make technology accessible and affordable for businesses of all sizes in Shillong and the Northeast.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Which package is best for me?</h2>
                    <p className="text-black">
                    Our packages are designed to cater to diverse needs. Whether you’re a small-scale business or a large enterprise, we have a package for you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FAQ
