"use client"
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserCount, PaymentCount, SubscribeUser, fetchProfile } from '@/actions/useractions'
import Link from "next/link";

const About = () => {

  const [userCount, setUserCount] = useState([])
  const [paymentCount, setPaymentCount] = useState([])
  const [profiles, setProfiles] = useState([])
  const [email, setEmail] = useState("");

  const getData = async (e) => {
    let userRes = await UserCount();
    setUserCount(userRes)
    const paymentRes = await PaymentCount();
    setPaymentCount(paymentRes)
    let profileRes = await fetchProfile(e);
    setProfiles(profileRes)
  }

  useEffect(() => {
    document.title = "About - GetMeChai"
    getData()
  }, [])

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      let a = await SubscribeUser(e)
      toast('Subscribe Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      document.getElementById('email-address').value = '';
    } catch {
      toast('Subscribe Failed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {/* Main Section */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white-800 pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-white-600">
              GetMeChai is a crowdfunding platform designed to help creators fund their projects. It's a place where your fans can support you by buying you a chai, allowing you to unleash the power of your fanbase and get your projects funded.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src="/about.png" alt="A group of People" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white-800 pb-4">Our Story</h1>
            <p className="font-normal text-base leading-6 text-white-600">
              At GetMeChai, we believe in empowering creators. We started this platform to provide a space where creators can connect with their fans and receive the support they need to bring their projects to life. Whether you're an artist, writer, musician, or any type of creator, GetMeChai is here to help you succeed.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              {profiles.map((profile, index) => (
                <Link href={`/${profile.username}`} key={index}>
                  <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src={profile.profilepic || 'https://via.placeholder.com/400x400?text=Profile+Image+Missing'} alt='Profile' />
                    <img className="md:hidden block" src={profile.profilepic || 'https://via.placeholder.com/400x400?text=Profile+Image+Missing'} alt='Profile' />
                    <p className="font-medium text-xl leading-5 text-white-800 mt-4">{profile.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        {/* First Service */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                      className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                      </path>
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Fast Payment:
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    GetMeChai ensures that creators receive their funds quickly and securely. Our fast payment processing allows you to focus on your projects without worrying about delays in receiving support from your fans.
                  </p>
                  <div className="mt-6">
                    <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                      href="/login">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="mx-4 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img width="647" height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Fast Payment" />
              </div>
            </div>
          </div>
        </div>
        {/* Second Service */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                      className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                      </path>
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Trusted Community:
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    GetMeChai fosters a trusted community of creators and supporters. We ensure that all transactions are secure and transparent, building trust and encouraging more fans to support your creative journey.
                  </p>
                  <div className="mt-6">
                    <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                      href="/login">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="mx-4 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img alt="Trusted Community" width="647" height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5fGVufDB8fDB8fHww" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      {/* <div className="max-w-screen-lg mx-auto p-5 mb-5 mt-32">
                <div className="grid grid-cols-1 md:grid-cols-12 border">
                    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                        <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
                        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                            Get In <span className="text-indigo-600">Touch</span>
                        </h3>
                        <p className="mt-4 leading-7 text-gray-200">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>

                        <div className="flex items-center mt-5">
                            <svg
                                className="h-6 mr-2 text-indigo-600"
                                fill="currentColor"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 489.536 489.536"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                enableBackground="new 0 0 489.536 489.536"
                            >
                                <g>
                                    <g>
                                        <path
                                            d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"
                                        />
                                        <rect width="136.5" x="177.054" y="379.1" height="20.8" />
                                        <path
                                            d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                        </div>
                        <div className="flex items-center mt-5">
                            <svg
                                className="h-6 mr-2 text-indigo-600"
                                fill="currentColor"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 60.002 60.002"
                                style={{ enableBackground: 'new 0 0 60.002 60.002' }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693 c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z" />
                                    <path d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1 C54.65,34.033,56.267,35.65,58.256,35.65z" />
                                    <path d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693 c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z" />
                                    <path d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1 c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z" />
                                    <path d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546 c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.631-6.291 c0.224-0.31,1.65-1.575,2.87-2.596c0.778-0.464,1.312-1.152,1.546-1.996c0.311-1.123,0.082-2.444-0.652-3.731 c-0.173-0.296-4.291-7.27-8.085-9.277c-1.926-1.019-4.255-0.669-5.796,0.872L4.7,9.059c-4.014,4.014-5.467,8.563-4.321,13.52 c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.706c5.762,5.762,11.258,8.656,16.298,8.656c3.701,0,7.157-1.562,10.291-4.695 l2.537-2.537c1.541-1.541,1.892-3.87,0.872-5.796C51.356,42.186,44.383,38.069,44.076,37.889z M49.646,50.879l-2.536,2.536 c-3.316,3.316-7.419,4.604-12.137,3.818c-4.131-0.674-8.439-3.152-13.01-7.723L7.257,34.468c-4.294-4.294-6.868-8.286-7.764-12.294 c-1.009-4.359,0.209-8.32,3.598-11.71l2.538-2.538c0.97-0.97,2.233-1.468,3.507-1.468c0.757,0,1.505,0.175,2.207,0.522 c3.314,1.744,7.269,8.678,7.405,8.919c0.899,1.544,1.065,2.939,0.498,4.114c-0.15,0.336-0.473,0.801-1.11,1.236 c-1.29,0.88-3.437,2.662-3.804,3.164c-2.562,3.54-2.071,7.258,1.574,10.903l14.486,14.486c3.638,3.639,7.362,4.132,10.902,1.575 c0.502-0.368,2.284-2.515,3.164-3.804c0.435-0.637,0.9-0.959,1.236-1.11c1.176-0.566,2.57-0.4,4.114,0.498 C48.125,43.925,55.061,47.88,56.805,51.195C57.447,52.624,57.102,54.034,56.201,54.934z" />
                                </g>
                            </svg>
                            <span className="text-sm">(+93) 123 456 789</span>
                        </div>
                        <div className="flex items-center mt-5">
                            <svg
                                className="h-6 mr-2 text-indigo-600"
                                fill="currentColor"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: 'new 0 0 512 512' }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <g>
                                        <path
                                            d="M339.392,258.08c-13.184,0-26.112,1.6-38.688,4.64c-7.296,1.792-12.512,8.576-12.512,16.128v107.136
                    c0,9.44,8.32,16.928,17.632,15.872c64-7.04,124.064,36.992,132.288,99.136c1.12,8.768,8.384,15.104,17.184,15.104h51.488
                    c9.6,0,17.536-8.352,16.96-17.92C522.048,359.872,438.144,258.08,339.392,258.08z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M97.984,343.872c-67.712,0-123.04,55.328-123.04,123.04c0,24.992,20.32,45.312,45.312,45.312h155.36
                    c9.632,0,17.6-8.352,17.12-17.984C186.56,395.552,146.4,343.872,97.984,343.872z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M182.88,293.92c-54.656,0-99.2,44.544-99.2,99.2s44.544,99.2,99.2,99.2c54.656,0,99.2-44.544,99.2-99.2
                    S237.536,293.92,182.88,293.92z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M437.664,157.92c-24.448,0-47.2,6.016-67.84,16.704c-6.176,3.36-10.304,9.856-10.304,17.12v62.464
                    c0,11.456,11.968,19.072,22.656,14.432c8.128-3.584,16.832-6.08,25.984-6.944c48.8-4.352,90.592,31.328,97.44,79.808
                    c1.312,8.64,8.512,15.168,17.248,15.168h53.92c10.176,0,18.112-9.312,16.768-19.392
                    C577.104,222.976,514.048,157.92,437.664,157.92z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M277.76,105.92c-46.24,0-83.968,37.728-83.968,83.968s37.728,83.968,83.968,83.968s83.968-37.728,83.968-83.968
                    S323.968,105.92,277.76,105.92z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M195.52,149.92c-40.96,0-74.272,33.312-74.272,74.272s33.312,74.272,74.272,74.272s74.272-33.312,74.272-74.272
                    S236.48,149.92,195.52,149.92z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M128.448,0.448C57.664,6.88,0,66.88,0,137.44c0,50.88,25.6,95.648,64.576,122.56c8.256,5.76,19.424-0.256,19.424-10.24
                    c0-3.84-1.76-7.392-4.768-9.664c-26.24-18.496-43.52-49.28-43.52-84.352c0-58.176,48.064-106.304,106.368-105.984
                    c57.856,0.32,105.024,47.68,105.024,105.6v6.72c0,8.768-7.04,16-15.808,16c-27.52,0-49.92,22.4-49.92,49.92s22.4,49.92,49.92,49.92
                    c42.944,0,77.92-34.752,78.4-77.632C309.312,66.88,228.64-5.472,128.448,0.448z"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <span className="text-sm">info@domain.com</span>
                        </div>
                    </div>
                    <div className="md:col-span-8 p-10">
                        <div>
                            <label className="font-medium text-sm">Name</label>
                            <input
                                className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-sm">Email</label>
                            <input
                                className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                type="text"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-sm">Phone</label>
                            <input
                                className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                type="text"
                                placeholder="Your Phone"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-sm">Message</label>
                            <textarea
                                className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                rows="4"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div> */}

      {/* Stats */}
      <section className="text-white-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-white-900 dark:text-white-200 sm:text-5xl">Trusted around the world
          </h2>
          <div className="flex flex-wrap -m-4 justify-center text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-white-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white-900">{userCount}</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-white-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-white-900">{paymentCount}</h2>
                <p className="leading-relaxed">Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Newsletter Section */}
      <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>
            <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
          </div>
          <form action={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email.email ? email.email : ""}
                onChange={handleChange}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              We care about your data. Read our <a href="https://www.swellai.com/privacy" className="font-semibold text-white">privacy&nbsp;policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
