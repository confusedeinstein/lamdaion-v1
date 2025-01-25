"use client";

import { useState } from "react";
import ContactForm from "./ContactUs";

const Button = ({ styles }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev); // Toggle form visibility
  };

  return (
    <div>
      {/* Contact Us Button */}
      <button
        type="button"
        onClick={toggleForm}
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out ${styles}`}
      >
        Contact Us
      </button>

      {/* Contact Form Modal */}
      {isFormOpen && <ContactForm onClose={toggleForm} />}
    </div>
  );
};

export default Button;
