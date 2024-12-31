import React from 'react'
import Navbar from './Navbar'

const Profile = ({ user }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        // src={user.photo}
        alt={`${user.name}'s photo`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.bio}</p>
      </div>
    </div>
  );
};

const App = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Engineer at XYZ Company.',
    photo: '', // Replace with an actual user photo URL
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Profile user={user} />
    </div>
  );
};

export default Profile
