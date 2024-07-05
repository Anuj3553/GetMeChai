"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    getData();
    if (!session) {
      router.push('/login')
    }
  }, [router, session])

  // if (!session) {
  //   return <div>Loading...</div>
  // }

  const getData = async () => {
    if (session?.user?.name) {
      let u = await fetchuser(session.user.name)
      setform(u)
    }
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      let a = await updateProfile(e, session.user.name)
      toast('Profile Updated Successfully!', {
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
    catch {
      toast('Profile Updated Failed!', {
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
      <div className="container mx-auto py-5 px-6">
        <h1 className="text-3xl font-bold text-center my-5">Welcome to your Dashboard</h1>
        <form className="max-w-sm md:max-w-lg mx-auto pb-5 px-3 md:px-0" action={handleSubmit}>
          <div className="my-2">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
            <input value={form.name ? form.name : ""} onChange={handleChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input value={form.email ? form.email : ""} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" />
          </div>
          <div className="my-2">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
            <input value={form.username ? form.username : ""} onChange={handleChange} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="username" />
          </div>
          <div className="my-2">
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-white">Profile Picture</label>
            <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} id="profilepic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="url" name="profilepic" />
          </div>
          <div className="my-2">
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-white">Cover Picture</label>
            <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} id="coverpic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="url" name="coverpic" />
          </div>
          <div className="my-2">
            <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white">Razorpay Id</label>
            <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} id="razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="razorpayid" />
          </div>
          <div className="my-2">
            <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-white">Razorpay Secret</label>
            <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} id="razorpaysecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="razorpaysecret" />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default Dashboard
