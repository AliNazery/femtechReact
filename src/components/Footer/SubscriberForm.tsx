"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useStoreSubscriberMutation } from "../../lib/features/apiSlice";

// Define the expected payload type for the subscriber mutation
interface SubscriberPayload {
  email: string;
  message: string;
}

const SubscriberForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [storeSubscriber, { isLoading, isError }] =
    useStoreSubscriberMutation();

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await storeSubscriber({ email } as SubscriberPayload).unwrap();
      setEmail(""); // Clear the email input after submission
      setShowSuccessMessage(true); // Show success message
    } catch (err) {
      console.error("Subscription failed:", err);
    }
  };

  // Hide the success message after a delay (e.g., 5 seconds)
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 5 seconds
        // Optionally: Reload the window or redirect here if needed
        // window.location.reload();
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showSuccessMessage]);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="pt-10 box-border flex-shrink-0 w-full max-w-full lg:w-6/12 px-3 lg:pt-0">
      <form
        className="mx-auto flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] sm:flex-row lg:ml-auto lg:mr-0 lg:max-w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="w-full border-0 bg-transparent p-4 pl-6 text-center text-lg placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left md:text-base"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          className="btn btn-primary btn-md"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Subscribe"}
        </button>
      </form>

      {/* Success and error messages */}
      {showSuccessMessage && (
        <p className="text-green-500 mt-2">Subscription successful!</p>
      )}
      {isError && (
        <p className="text-red-500 mt-2">
          Subscription failed
        </p>
      )}
    </div>
  );
};

export default SubscriberForm;

