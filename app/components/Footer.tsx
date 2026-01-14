'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative z-10 bg-black pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group w-fit">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl border border-white/10 transform group-hover:scale-110 transition-all duration-300">
                                    <Image src="/logo.png" alt="BitBucks Logo" width={40} height={40} className="rounded-lg" />
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Bit<span className="text-gray-400">Bucks</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Empowering the next generation of potential tech leaders through innovation,
                            collaboration, and hands-on experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Team', path: '/team' },
                                { name: 'Events', path: '/events' },
                                { name: 'Gallery', path: '/gallery' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-500 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2 group-hover:bg-white transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Resources */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Resources</h3>
                        <ul className="space-y-4">
                            {['Documentation', 'Privacy Policy', 'Terms of Service', 'Support'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-gray-500 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2 group-hover:bg-white transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Stay Updated</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and tech news.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                            <button className="w-full bg-white text-black font-semibold rounded-xl px-4 py-3 text-sm hover:bg-gray-200 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs">
                        © 2026 BitBucks Tech Club. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        {[
                            {
                                name: 'Twitter',
                                icon: (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 7.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                )
                            },
                            {
                                name: 'GitHub',
                                icon: (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                )
                            },
                            {
                                name: 'LinkedIn',
                                icon: (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                    </svg>
                                )
                            },
                            {
                                name: 'Discord',
                                icon: (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                                    </svg>
                                )
                            }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
