import React from "react";

function RegistrationForm() {
  return (
    <div className=" shadow-md space-y-4">
      <div className="bg-goldenyellow p-4 pl-10 ">
        <h2 className="text-xl text-white font-bold ">Registration</h2>
      </div>

      <div className="space-y-10  pl-10 ">
        {/* Pilgrim detils */}
        <div className="flex flex-col items-start bg-rose-400">
          <div className="flex space-x-28 items-center">
            <h1 className="text-[23px] font-medium ">Pilgrim Details</h1>
            <p>
              As per the latest Government guidelines only Aadhaar,Passport and
              Voter ID will be allowed for Registration.
            </p>
          </div>
          <div className="w-full p-2">
            <hr className="bg-black " />
          </div>

          <div className="flex items-center mb-2">
            <label htmlFor="photo" className="mr-2">
              Add Photo:
            </label>
            <input type="file" id="photo" />
          </div>
          <div className="flex gap-4 mb-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobileNumber"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender:
              </label>
              <select
                id="gender"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        {/* Address section */}
        <div className="bg-yellow-400">
          <h3 className="text-lg font-medium mb-2">Address</h3>
          <div className="flex gap-4 mb-2">
            <div>
              <label
                htmlFor="addressLine1"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 1:
              </label>
              <input
                type="text"
                id="addressLine1"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="addressLine2"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 2:
              </label>
              <input
                type="text"
                id="addressLine2"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country:
              </label>
              <select
                id="country"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State/Province:
              </label>
              <select
                id="state"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select State</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                District/City:
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip/Pincode:
              </label>
              <input
                type="text"
                id="pincode"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="photoIdProof"
              className="block text-sm font-medium text-gray-700"
            >
              Select Photo ID Proof:
            </label>
            <select
              id="photoIdProof"
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Proof</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Password and Email Section */}
        <div className="bg-green-500">
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email ID:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-4 mb-2">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="termsAndConditions" />
            <label htmlFor="termsAndConditions" className="ml-2 text-sm">
              I agree to Terms and Conditions.
            </label>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm mt-4">
        Note: Fields marked with * are mandatory. Photo format should be
        JPG/JPEG/PNG/GIF with size less than 1 MB. Email ID is mandatory for
        foreign users.
      </p>
    </div>
  );
}

export default RegistrationForm;
