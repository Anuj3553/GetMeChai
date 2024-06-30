"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"

const dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [session, router])

  // if (!session) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-2xl font-bold text-center py-5">Welcome to your dashboard</h2>
        <form className="max-w-sm md:max-w-lg mx-auto pb-5 px-3 md:px-0" action="">
          <div className="mb-1">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
            <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input id="email" className="bg-gray-50 border border-gray-300 dark:border-gray-600 text-gray-900/70 text-sm rounded-lg block w-full px-2.5 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white/70 focus-visible:outline-none cursor-not-allowed" readOnly="" title="Email can't be modified" type="email" name="email" />
          </div>
          <div className="mb-1">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
            <input id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="username" />
          </div>
          <div className="mb-1">
            <label htmlFor="profilpicture" className="block mb-2 text-sm font-medium text-white">Profile Picture</label>
            <input id="profilpicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="url" name="profilpicture" />
          </div>
          <div className="mb-1">
            <label htmlFor="coverpicture" className="block mb-2 text-sm font-medium text-white">Cover Picture</label>
            <input id="coverpicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="url" name="coverpicture" />
          </div>
          <div className="mb-1">
            <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white">Razorpay Id</label>
            <input id="razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="razorpayid" />
          </div>
          <div className="mb-5">
            <label htmlFor="razorpaySecret" className="block mb-2 text-sm font-medium text-white">Razorpay Secret</label>
            <input id="razorpaySecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="razorpaySecret" />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default dashboard
