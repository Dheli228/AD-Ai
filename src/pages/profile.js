import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';

const ProfilePage = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('A brief bio about yourself...');
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
  const [successMessage, setSuccessMessage] = useState('');

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // You would typically send updated profile data to your server here
    setSuccessMessage('Profile updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); // Hide after 3 seconds
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 to-purple-100 home-background">
      <Sidebar isExpanded={isNavExpanded} toggleNavbar={() => setIsNavExpanded(!isNavExpanded)} />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Profile</h1>
          <div className="mb-6 text-center">
            <Image src={profilePic} alt="Profile" className="rounded-full mx-auto w-32 h-32 object-cover" />
            <input
              type="file"
              accept="image/*"
              className="mt-4 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleProfilePicChange}
            />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows="3"
              ></textarea>
            </div>
            <button
              onClick={handleSaveChanges}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md py-2 px-4 hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
            {successMessage && (
              <p className="text-green-500 text-center mt-4">{successMessage}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
