/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About LearnGenius</h1>

        {/* Mission Section */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            LearnGenius was created to revolutionize personalized education by leveraging AI to create 
            customized learning plans tailored to each individual&apos;s needs, learning style, and goals. 
            We believe education should adapt to the learner, not the other way around.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">How It Works</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li className="text-gray-700 leading-relaxed">
              <strong>Input Your Details:</strong> Tell us what subject you want to learn, your age/grade level, 
              and your preferred learning style (visual, auditory, kinesthetic, or reading/writing).
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>AI Analysis:</strong> Our system processes your inputs using advanced AI algorithms to 
              understand your unique learning needs.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>Personalized Plan:</strong> You receive a customized learning plan with explanations, 
              recommended resources, and step-by-step guidance tailored just for you.
            </li>
          </ol>
        </section>

        {/* Technology Stack Section */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-2">Frontend</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Next.js (React Framework)</li>
                <li>• Tailwind CSS (Styling)</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-2">Backend & AI</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Groq&apos;s LLaMA 3 (AI Model)</li>
                <li>• Node.js (API Routes)</li>
                <li>• Vercel (Hosting)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team/Contact Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Have questions or feedback? We&apos;d love to hear from you!
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Email:</strong> jharnananjegowda@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>GitHub:</strong> github.com/Jharna-101/LearnGenius-AI
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}