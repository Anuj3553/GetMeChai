import React from 'react'
import connectDB from '@/db/connectDB'
import PaymentPage from '../components/PaymentPage'
import { notFound } from 'next/navigation'
import User from '@/models/User'

const Username = async ({ params }) => {
  // If the username is not present in the database, show a 404 page
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound();
    }
  }
  await checkUser()
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )
}

export default Username

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - GetMeChai`
  }
}