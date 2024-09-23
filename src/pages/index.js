// pages/index.js
import { useState } from 'react';
import Sidebar from '../components/SideBar';
import ChatWindow from '../components/ChatWindow';

const HomePage = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="flex h-screen home-background">
      <Sidebar isExpanded={isNavExpanded} toggleNavbar={() => setIsNavExpanded(!isNavExpanded)} />
      <main className="flex-1 p-8">
        <div className="bg-white bg-opacity-70 rounded-lg shadow-2xl p-8 max-w-3xl mx-auto mt-14">
          <ChatWindow className="w-5/6 max-h-96 mt-4" />
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-semibold">Chat Suggestions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>How do I apply to the University of Ghana?</li>
              <li>What documents do I need for admission?</li>
              <li>Can you guide me through the application process?</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
