import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-800 mb-6">
        Have a question or feedback? We'd love to hear from you! Feel free to reach out to us using any of the methods below:
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Email:</h2>
        <p className="text-lg text-gray-800">info@chef2door.com</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Phone:</h2>
        <p className="text-lg text-gray-800">1-800-CHEF-2-DOOR</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Address:</h2>
        <p className="text-lg text-gray-800">
          Chef 2 Door Headquarters <br />
          123 Delicious Ave <br />
          Foodie City, FC 12345
        </p>
      </div>
      <p className="text-lg text-gray-800">
        We're here to assist you with any inquiries or concerns. Don't hesitate to get in touch with us! Thank you for choosing Chef 2 Door.
      </p>
    </div>
  );
};

export default ContactUs;
