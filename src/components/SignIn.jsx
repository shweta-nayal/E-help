import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center bg-light">
      <h2 className="text-3xl font-bold mb-6">Sign In as...</h2>
      <div className="flex gap-8">
        {/* User Card */}
        <Link to="/signin/user">
          <div className="card hover:shadow-lg transition-all duration-200 p-6 bg-white rounded-lg text-center">
            <h3 className="text-xl font-semibold">User</h3>
          </div>
        </Link>
        {/* Professional Card */}
        <Link to="/signin/professional">
          <div className="card hover:shadow-lg transition-all duration-200 p-6 bg-white rounded-lg text-center">
            <h3 className="text-xl font-semibold">Professional</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
