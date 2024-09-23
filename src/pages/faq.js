import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-lg font-semibold mb-2 flex justify-between items-center w-full focus:outline-none"
      >
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
};

const FAQPage = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const faqs = [
    {
      question: "What is Ad-Aid?",
      answer: "Ad-Aid is an AI-powered assistant designed to help students with college admissions processes."
    },
    {
      question: "How do I get started with Ad-Aid?",
      answer: "Simply sign up for an account and start chatting with our AI assistant about your college admission questions."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 to-purple-100 home-background">
      <Sidebar isExpanded={isNavExpanded} toggleNavbar={() => setIsNavExpanded(!isNavExpanded)} />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
