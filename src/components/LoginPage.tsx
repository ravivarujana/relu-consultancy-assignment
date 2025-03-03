import { useState } from "react";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
  };

  return (
    <div className="bg-[#a5e3f3c0] w-full">
      <div className="h-screen grid lg:grid-cols-2 grid-cols-1">
        {/* Logo section - hidden on medium and small screens */}
        <div className="text-white justify-center items-center hidden lg:flex">
          <img className="h-[700px]" src="/images/logo-png.png" />
        </div>

        {/* Form section - full width on medium and small screens */}
        <div className="flex items-center justify-center bg-white rounded-lg m-2 min-h-screen lg:min-h-0">
          <div className="w-full max-w-md px-6 py-8 lg:px-16 lg:py-16 space-y-8">
            <div>
              <span className="mr-2 text-blue-500 text-2xl font-medium">
                Artiste.
              </span>
            </div>

            <h1 className="text-3xl font-bold">Login to your Account</h1>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div>
                <label
                  htmlFor="usernameOrEmail"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email/Username
                </label>
                <input
                  type="text"
                  name="usernameOrEmail"
                  id="usernameOrEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email/Username"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
                <a
                  href="_"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full font-semibold bg-[#007bff] text-white rounded-lg p-[10px] hover:bg-[#0056b3]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
