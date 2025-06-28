'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [subject, setSubject] = useState('');
  const [age, setAge] = useState('');
  const [learningStyle, setLearningStyle] = useState('visual');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Calling API with:", { subject, age, learningStyle });
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, age, learningStyle })
      });
      console.log("API Response:", response);
      const plan = await response.json();
      console.log("Parsed Plan:", plan);

      router.push(`/planner/output?plan=${encodeURIComponent(JSON.stringify(plan))}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">Learning Plan Generator</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Mathematics, Biology"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter Age/Grade</label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 12 or 7th grade"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Learning Style</label>
              <select
                value={learningStyle}
                onChange={(e) => setLearningStyle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="visual">Visual</option>
                <option value="auditory">Auditory</option>
                <option value="kinesthetic">Kinesthetic</option>
                <option value="reading">Reading/Writing</option>
              </select>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Generating...' : 'Generate Plan'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}