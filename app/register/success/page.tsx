export default function SubmissionSuccess() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl opacity-50"></div>

            {/* Success Message Container */}
            <div className="relative z-10 max-w-2xl w-full text-center">
                {/* Success Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Success Message */}
                <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                    Application <span className="text-gray-400">Submitted</span>
                </h1>
                <p className="text-xl text-gray-400 mb-12 font-light">
                    Thank you for applying. We will get back to you soon.
                </p>

                {/* Back to Home Button */}
                <a
                    href="/"
                    className="inline-block px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-bold text-lg hover:bg-white/15 hover:scale-105 transition-all duration-300"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
