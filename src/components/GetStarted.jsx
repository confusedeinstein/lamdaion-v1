import { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import ContactForm from "./ContactUs"; // Assuming you have the ContactForm component.

const GetStarted = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev); // Toggle form visibility
  };

  return (
    <div>
      {/* Get Started Button */}
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
        onClick={toggleForm}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Contact-</span>
            </p>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Us</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && <ContactForm onClose={toggleForm} />}
    </div>
  );
};

export default GetStarted;
