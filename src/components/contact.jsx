import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import send from '../assets/send.mp3';

export const Contact = () => {
  const form = useRef();
  const [validationError, setValidation] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const formData = new FormData(form.current);

    const fromName = formData.get('from_name');
    const fromEmail = formData.get('from_email');
    const message = formData.get('message');

    if (!fromName || !fromEmail || !message) {
      setValidation("Please fill out all fields");
      return false;
    }

    if (!emailPattern.test(fromEmail)) {
      setValidation("Please enter a valid email address");
      return false;
    }

    setValidation(""); 
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return; 
    }

   
    new Audio(send).play();

    emailjs
      .sendForm('service_vtzrhmj', 'template_r2f3xz9', form.current, {
        publicKey: '7gIAtcFYFLq-SAq24',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email sent successfully');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Error sending email, please send an email from your email client');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <Toaster position="bottom-right" duration={8000} />

        <div className="p-10 pt-1">
          <h1 className="font-jobTitle text-center mt-5 mb-5 text-4xl">Contact</h1>
          <p className="font-poppins text-center justify-self-center">
            Get in touch for any comments, feedback, or new projects. Simply send me an email from the form below.
          </p>
          <div className="bg-gray-100 rounded-lg mt-10 align-middle justify-center justify-self-center flex flex-col p-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h4 className="font-poppins mb-2"> Name: </h4>
              <input
                type="text"
                name="from_name"
                className="md:w-64 w-52 p-2 m-2 rounded-lg mb-5"
                onChange={validate}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h4 className="font-poppins mb-2"> Email: </h4>
              <input
                type="text"
                name="from_email"
                className="md:w-64 p-2 w-52 m-2 rounded-lg mb-5"
                onChange={validate}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h4 className="font-poppins mb-2"> Your Message: </h4>
              <textarea
                name="message"
                className="md:w-64 p-2 m-2 w-52 rounded-lg h-32 mb-3"
                onChange={validate}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h4 className='font-poppins text-sm text-red-700'>{validationError}</h4>
              <input
                type="submit"
                value="SEND MESSAGE"
                className="block mt-5 ml-3 font-poppins md:w-64 text-lg tracking-wider text-violet-800 border-2 border-solid border-violet-500 bg-violet-200 text-center p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
