'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PlanPage() {
  const searchParams = useSearchParams();
  const planData = searchParams.get('plan');

  if (!planData) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">LearnGenius</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/planner/input" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 bg-indigo-50">
                Planner
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-600">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/planner/input" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Planner
          </Link>
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Error</h1>
            <p>No plan data received. Please generate a plan first.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Parse the URL-encoded JSON
  const plan = JSON.parse(decodeURIComponent(planData));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-3xl font-bold mb-6">Your Learning Plan</h1>
          
          {/* AI Explanation Section */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">AI Explanation</h2>
            <p className="whitespace-pre-line">
              {plan.explanation || 'No explanation generated'}
            </p>
          </section>

          {/* Resources Section */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Resources</h2>
            {plan.resources?.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {plan.resources.map((resource, i) => (
                  <li key={i}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {resource.name}
                    </a>
                    {resource.description && (
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No resources recommended</p>
            )}
          </section>

          {/* Additional Plan Details Section */}
          {plan.steps && (
            <section className="mb-8 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Learning Steps</h2>
              <ol className="list-decimal pl-5 space-y-3">
                {plan.steps.map((step, i) => (
                  <li key={i} className="whitespace-pre-line">
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          )}
          {/* Back Button */}
          <div className="flex justify-center mb-6">
            <Link
              href="/planner/input"
              className="px-6 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition-colors shadow-md font-medium"
            >
              Back to Planner
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}