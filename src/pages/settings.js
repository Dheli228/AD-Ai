import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const SettingsPage = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: false,
    pushNotifications: false,
    makeProfilePublic: false,
    language: 'English',
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic here
    console.log('Settings saved:', settings);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 to-purple-100 home-background">
      <Sidebar isExpanded={isNavExpanded} toggleNavbar={() => setIsNavExpanded(!isNavExpanded)} />
      <main className="flex-1 p-8">
        <form className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  aria-label="Email Notifications"
                />
                <span className="ml-2 text-gray-700">Email Notifications</span>
              </label>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="pushNotifications"
                  checked={settings.pushNotifications}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  aria-label="Push Notifications"
                />
                <span className="ml-2 text-gray-700">Push Notifications</span>
              </label>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Privacy</h2>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="makeProfilePublic"
                  checked={settings.makeProfilePublic}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  aria-label="Make Profile Public"
                />
                <span className="ml-2 text-gray-700">Make profile public</span>
              </label>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Language</h2>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                aria-label="Language"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md py-2 px-4 hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Settings
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SettingsPage;
