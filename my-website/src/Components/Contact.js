import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    // Success toast notification
    const toastifySuccess = () => {
        toast.success('Your message has been sent successfully!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
        });
    };

    // Form submission handler
    const onSubmit = async (data) => {
        const { name, email, message } = data;
        try {
            setDisabled(true);

            const templateParams = {
                name,
                email,
                message,
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );

            reset();
            toastifySuccess();
        } catch (e) {
            console.error('Failed to send message', e);
        } finally {
            setDisabled(false);
        }
    };

    return (
        <div className="AboutPage">
            <ToastContainer />
            <section className="text-gray-400 bg-transparent body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-Raleway title-font mb-4 text-white">Contact Me!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                            Have questions, suggestions, or need assistance? I would love to hear from you! Fill out the form below, and i will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap -m-2">
                                {/* Name Field */}
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register('name', { required: 'Name is required' })}
                                            placeholder="Enter your name"
                                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-customGreen focus:bg-gray-900 focus:ring-2 focus:ring-green-900 outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            placeholder="Enter your email"
                                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-customGreen focus:bg-gray-900 focus:ring-2 focus:ring-green-900 outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                        <textarea
                                            id="message"
                                            {...register('message', { required: 'Message is required' })}
                                            placeholder="Type your message here"
                                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-customGreen focus:bg-gray-900 focus:ring-2 focus:ring-green-900 outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="p-2 w-full">
                                    <button
                                        type="submit"
                                        disabled={disabled}
                                        className={`flex mx-auto text-dark bg-customGreen border-0 py-2 px-10 focus:outline-none hover:bg-green-600 rounded text-lg ${
                                            disabled ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {disabled ? 'Sending...' : 'Submit'}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;