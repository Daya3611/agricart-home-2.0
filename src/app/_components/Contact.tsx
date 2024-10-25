import { MailIcon, PhoneCallIcon } from 'lucide-react';
import React from 'react';

function Contact() {
    return (
        <section className="container mx-auto py-12 px-4" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-2xl font-bold mb-6">
                        Reach out to us today <br /> via any of the given <br /> information
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <h3 className="text-lg font-semibold">Call us for instant support</h3>
                                <span className="text-gray-700">
                                    <a href="tel:+917350025515" className="flex gap-2 items-center text-green-600 hover:underline">
                                       <PhoneCallIcon/>
                                        +91 7350025515
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="mr-4">
                                <h3 className="text-lg font-semibold">Write us by mail</h3>
                                <span className="text-gray-700">
                                    <a href="mailto:info@agricartfpc.com" className="flex gap-2 items-center text-green-600 hover:underline">
                                        <MailIcon/>
                                        info@agricartfpc.com
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="bg-white p-6 rounded-lg " id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="bd6511c9-5640-4978-8a8c-a07f0dd09b6b" />

                    <div className="space-y-4">
                        <div className="relative">
                            <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Name " />
                            
                        </div>

                        <div className="relative">
                            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Email " />
                            
                        </div>

                        <div className="relative">
                            <input type="phone" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Phone" />
                            
                        </div>

                        <div className="relative">
                            <input type="text" id="subject" name="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Subject " />
                            
                        </div>

                        <div className="relative">
                            <textarea name="message" id="message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Message " />
                            
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="h-captcha" data-captcha="true"></div>
                    </div>

                    <button className="flex items-center justify-center py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out hover:ring-4 hover:ring-green-500" type="submit" id="submit">
                        Send Message
                        <i className="ri-arrow-right-up-line text-xl ml-2"></i>
                    </button>
                </form>
            </div>
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </section>
    );
}

export default Contact;
