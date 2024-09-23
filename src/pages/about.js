import Sidebar from '../components/Sidebar';

const AboutPage = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-indigo-400 home-background">
      <Sidebar isExpanded={isNavExpanded} toggleNavbar={() => setIsNavExpanded(!isNavExpanded)} />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">About Ad-Aid</h1>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Ad-Aid is an innovative AI-powered platform designed to simplify and streamline the college admissions process for students worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide personalized, accurate, and up-to-date information to help students make informed decisions about their educational future.
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-4 text-indigo-700">Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Ad-Aid was founded by a group of education technology students who understand the challenges students face during the college application process.
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-4 text-indigo-700">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions or feedback? We'd love to hear from you. Reach out to us at <a href="mailto:support@ad-aid.com" className="text-blue-500 hover:underline">support@ad-aid.com</a> or visit our <a href="/contact" className="text-blue-500 hover:underline">Contact page</a>.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
