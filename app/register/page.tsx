'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        registrationNumber: '',
        collegeId: '',
        email: '',
        phone: '',
        year: '',
        section: '',
        branch: '',
        preferredDomain: '',
        resumeLink: '',
        whyHireYou: ''
    });

    const [wordCount, setWordCount] = useState(0);
    const maxWords = 200;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'whyHireYou') {
            const words = value.trim().split(/\s+/).filter(word => word.length > 0);
            setWordCount(words.length);
            if (words.length <= maxWords) {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Insert data into Supabase
            const { data, error } = await supabase
                .from('student_registrations')
                .insert([
                    {
                        full_name: formData.fullName,
                        registration_number: formData.registrationNumber,
                        college_id: formData.collegeId,
                        email: formData.email,
                        phone: formData.phone,
                        year: formData.year,
                        section: formData.section,
                        branch: formData.branch,
                        preferred_domain: formData.preferredDomain,
                        resume_link: formData.resumeLink,
                        why_hire_you: formData.whyHireYou
                    }
                ])
                .select();

            if (error) {
                throw error;
            }

            // Success - Redirect to success page
            router.push('/register/success');

        } catch (error: any) {
            console.error('Error submitting form:', error);

            // Handle specific error cases
            if (error.code === '23505') {
                setSubmitStatus({
                    type: 'error',
                    message: 'This email is already registered. Please use a different email.'
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: error.message || 'Failed to submit registration. Please try again.'
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl opacity-50"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
                            Recruitment <span className="text-gray-400">Form</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                            Join our team and be part of something amazing.
                        </p>
                    </div>

                    {/* Success/Error Messages */}
                    {submitStatus.type && (
                        <div className={`mb-6 p-4 rounded-xl border ${submitStatus.type === 'success'
                            ? 'bg-green-500/10 border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                            }`}>
                            <p className="text-sm font-medium">{submitStatus.message}</p>
                        </div>
                    )}

                    {/* Form */}
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Registration Number */}
                            <div>
                                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-400 mb-2">
                                    Registration Number *
                                </label>
                                <input
                                    type="text"
                                    id="registrationNumber"
                                    name="registrationNumber"
                                    required
                                    value={formData.registrationNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Enter your registration number"
                                />
                            </div>

                            {/* College ID */}
                            <div>
                                <label htmlFor="collegeId" className="block text-sm font-medium text-gray-400 mb-2">
                                    College ID *
                                </label>
                                <input
                                    type="text"
                                    id="collegeId"
                                    name="collegeId"
                                    required
                                    value={formData.collegeId}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Enter your college ID"
                                />
                            </div>

                            {/* Personal Email ID */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Personal Email ID *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                                    Phone Number (with country code) *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="+91 1234567890"
                                />
                            </div>

                            {/* Year and Section - Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Year */}
                                <div>
                                    <label htmlFor="year" className="block text-sm font-medium text-gray-400 mb-2">
                                        Year *
                                    </label>
                                    <select
                                        id="year"
                                        name="year"
                                        required
                                        value={formData.year}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                                    >
                                        <option value="" className="bg-black">Select year</option>
                                        <option value="1st" className="bg-black">1st Year</option>
                                        <option value="2nd" className="bg-black">2nd Year</option>
                                        <option value="3rd" className="bg-black">3rd Year</option>
                                        <option value="4th" className="bg-black">4th Year</option>
                                    </select>
                                </div>

                                {/* Section */}
                                <div>
                                    <label htmlFor="section" className="block text-sm font-medium text-gray-400 mb-2">
                                        Section *
                                    </label>
                                    <input
                                        type="text"
                                        id="section"
                                        name="section"
                                        required
                                        value={formData.section}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="e.g., A, B, C"
                                    />
                                </div>
                            </div>

                            {/* Branch */}
                            <div>
                                <label htmlFor="branch" className="block text-sm font-medium text-gray-400 mb-2">
                                    Branch *
                                </label>
                                <input
                                    type="text"
                                    id="branch"
                                    name="branch"
                                    required
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="e.g., Computer Science, Electronics"
                                />
                            </div>

                            {/* Preferred Domain / Team */}
                            <div>
                                <label htmlFor="preferredDomain" className="block text-sm font-medium text-gray-400 mb-2">
                                    Preferred Domain / Team *
                                </label>
                                <select
                                    id="preferredDomain"
                                    name="preferredDomain"
                                    required
                                    value={formData.preferredDomain}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                                >
                                    <option value="" className="bg-black">Select preferred domain</option>
                                    <option value="Technical" className="bg-black">Technical</option>
                                    <option value="Social Media" className="bg-black">Social Media</option>
                                    <option value="PR & Marketing" className="bg-black">PR & Marketing</option>
                                    <option value="Event Management" className="bg-black">Event Management</option>
                                    <option value="Creative" className="bg-black">Creative</option>
                                </select>
                            </div>

                            {/* Resume Link */}
                            <div>
                                <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-400 mb-2">
                                    Resume Link (Google Drive / LinkedIn / Portfolio) *
                                </label>
                                <input
                                    type="url"
                                    id="resumeLink"
                                    name="resumeLink"
                                    required
                                    value={formData.resumeLink}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="https://drive.google.com/... or https://linkedin.com/..."
                                />
                            </div>

                            {/* Why should we hire you? */}
                            <div>
                                <label htmlFor="whyHireYou" className="block text-sm font-medium text-gray-400 mb-2">
                                    Why should we hire you? * ({wordCount}/{maxWords} words)
                                </label>
                                <textarea
                                    id="whyHireYou"
                                    name="whyHireYou"
                                    required
                                    rows={6}
                                    value={formData.whyHireYou}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell us why you would be a great fit for our team..."
                                />
                                {wordCount >= maxWords && (
                                    <p className="text-red-400 text-sm mt-1">Maximum word limit reached</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-bold text-lg transition-all duration-300 ${isSubmitting
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-white/15 hover:scale-[1.02]'
                                        }`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    );
}
