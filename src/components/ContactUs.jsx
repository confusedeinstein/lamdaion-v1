"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = ({ onClose }) => {
  const [state, handleSubmit] = useForm("xbldlpwy"); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="relative w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            ✖
          </button>
          <h1 className="text-2xl font-bold text-emerald-500 mb-4">
            Thank You!
          </h1>
          <p className="text-gray-400">
            Thanks for reaching out! We'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="relative w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          ✖
        </button>

        <h1 className="text-2xl font-bold text-emerald-500 mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-6">
          Send us a message and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-200 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-md p-2 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-200 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-md p-2 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-gray-200 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              rows="5"
              className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-md p-2 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-emerald-500 text-gray-900 font-medium py-2 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700"
          >
            {state.submitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
