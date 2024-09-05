// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Portfolio</h1>
        <p className="text-lg text-gray-700 mb-8">
          At Adeegsi we design modern and beautiful websites that help businesses grow.
        </p>
        <Link
          href="https://abdelkaderwho.com"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition"
        >
          View Our Work
        </Link>
      </section>
      
      <section id="portfolio" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Our Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">A brief description of the project.</p>
            </div>
          </div>
          
          {/* Repeat for more projects */}
        </div>
      </section>
      
           
      

        
      
    </main>
  );
}
