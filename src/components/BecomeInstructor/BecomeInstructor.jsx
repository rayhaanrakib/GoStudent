import React from 'react';
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import SectionTitle from './../../shared/SectionTitle';

const BecomeInstructor = () => {
    return (
        <div>
            <SectionTitle heading="Become an Instructor" subheading="Inspire learners worldwide" />
            <div className="relative pt-12 bg-blueGray-50">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full h-[500px] rounded-lg shadow-lg object-cover" src="https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg"/>
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-xl text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-accent mt-8">
                                <FaRocket/>
                            </div>
                            <h3 className="text-3xl font-semibold">GoStudent Classroom</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Inspire and educate by joining our community of instructors. Share your expertise, passion, and knowledge with learners around the world. Become a part of our dynamic platform and help shape the future of online education.
                            </p>
                            <ul className="list-none my-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                            <span className="text-sm font-semibold inline-block py-2 px-2 uppercase rounded-full text-white bg-primary mr-3"><FaServicestack/> </span>
                                            <h4>
                                            Reach a diverse audience and make a global impact.
                                            </h4>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                            <span className="text-sm font-semibold inline-block py-2 px-2 uppercase rounded-full text-white bg-primary mr-3"><FaServicestack/> </span>
                                            <h4>
                                            Enjoy the freedom to create and teach on your terms.
                                            </h4>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                            <span className="text-sm font-semibold inline-block py-2 px-2 uppercase rounded-full text-white bg-primary mr-3"><FaServicestack/> </span>
                                            <h4>
                                            Connect with a community of learners and educators.
                                            </h4>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                            <span className="text-sm font-semibold inline-block py-2 px-2 uppercase rounded-full text-white bg-primary mr-3"><FaServicestack/> </span>
                                            <h4>
                                            Earn income by sharing your knowledge and skills.
                                            </h4>
                                    </div>
                                </li>
                            </ul>
                            <a className="w-full sm:w-auto py-4 px-5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-accent disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="/join-as-instructor">
                                Get Started Today <FaArrowRight></FaArrowRight>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default BecomeInstructor;