import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          router.push('/'); // Redirect to home page upon successful sign-up
        } else {
          setErrors({ form: result.message });
        }
      } catch (err) {
        setErrors({ form: 'An error occurred. Please try again.' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 log-background">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-3/5 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h2>
          {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${errors.firstName ? 'border-red-500' : ''}`}
                  aria-label="First Name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${errors.lastName ? 'border-red-500' : ''}`}
                  aria-label="Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
              aria-label="Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${errors.password ? 'border-red-500' : ''}`}
              aria-label="Password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${errors.confirmPassword ? 'border-red-500' : ''}`}
              aria-label="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-8 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login">
              <a className="text-blue-600 hover:underline">Sign In</a>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-12 px-8 md:px-12">
          <h3 className="text-3xl font-bold mb-4">Welcome to Ad-Aid</h3>
          <p className="mb-6">
            Join our community and simplify your college admissions process with AI-powered assistance.
          </p>
          <div className="flex flex-col space-y-4">
            {['Google', 'Microsoft', 'Apple'].map((provider) => (
              <button
                key={provider}
                className="flex items-center justify-center bg-white text-blue-600 rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
              >
                <img src={`/${provider.toLowerCase()}-icon.png`} alt={provider} className="w-6 h-6 mr-2" />
                Sign up with {provider}
              </button>
            ))}
          </div>
          <p className="text-sm mt-8">
            By signing up, you agree to our
            <a href="#" className="underline ml-1">Terms of Service</a> and
            <a href="#" className="underline ml-1">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
