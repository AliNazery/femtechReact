import { useStoreSubscriberMutation } from "@/lib/features/apiSlice";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";


type SubscriberPayload = {
  email: string;
};

export default function ConnectForm() {
  const [email, setEmail] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [storeSubscriber, { isLoading, isError, error }] =
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
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showSuccessMessage]);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        data-aos="fade-up-sm"
        data-aos-delay="200"
        className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row"
      >
        <input
          type="email"
          className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
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
      {showSuccessMessage && (
        <p className="text-green-500 mt-2">Subscription successful!</p>
      )}
      {isError && <p className="text-red-500 mt-2">Subscription failed</p>}
    </>
  );
}
