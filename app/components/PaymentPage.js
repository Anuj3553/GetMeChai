"use client"
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    })

    const [currentUser, setcurrentUser] = useState([])
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") === "true") {
            toast('Thanks for your donation!', {
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
        router.push(`/${username}`)
    }, []);

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        // Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GetMeChai", //your business name
            "description": "Test Transaction",
            "image": "/tea.gif",
            "order_id": orderId, // Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "", //your customer's name
                "email": "",
                "contact": "" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover'>
                <div className="bg-cover relative w-full">
                    {/* Cover Pic */}
                    {currentUser.coverpic ? (
                        <img src={currentUser.coverpic} alt="Cover" className="w-full h-40 md:h-[21rem] object-cover" />
                    ) : (
                        <div role="status" className="flex items-center justify-center h-40 md:h-[21rem] w-full bg-gray-300 animate-pulse dark:bg-gray-700">
                            <svg className="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}
                    {/* Avatar Pic */}
                    <div className="size-20 md:size-32 object-center absolute mx-auto right-0 left-0 -bottom-12 md:-bottom-16 border-2 overflow-hidden border-white rounded-full bg-black">
                        {currentUser.profilepic ? (
                            <img className="object-cover size-20 md:size-32 " src={currentUser.profilepic} alt="avatarImage" />
                        ) : (
                            <div role="status" className="flex items-center justify-center h-full w-full bg-gray-300 animate-pulse dark:bg-gray-700">
                                <svg className="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="info flex items-center justify-center py-20 flex-col gap-2 ">
                <div className="font-bold text-lg">
                    @{username}
                </div>
                <div className="text-slate-300 text-center px-4">
                    Sip with purpose, support {username} with passion
                </div>
                <div className="text-slate-400">
                    {payments.length} Payments | ₹{payments.reduce((a, b) => a + b.amount, 0)} Raised
                </div>
                <div className="payment flex flex-col-reverse md:flex-row gap-3 container mt-12 px-5 md:px-0 ">
                    <div className="supporters w-full bg-slate-800/40 rounded-lg backdrop-blur-sm h-[28rem] p-5 md:p-10 overflow-auto">
                        <h2 className="text-xl font-bold mb-5">Supporters</h2>
                        {
                            payments.length == 0 &&
                            <div className="text-center font-extrabold text-lg">No supporters yet ☹</div>
                        }
                        <ul className="mx-2.5 md:mx-5 text-md">
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span>
                                        {p.message && ` with a message "${p.message}"`}
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-full bg-slate-800/40 rounded-lg backdrop-blur-sm p-10">
                        <h2 className="text-xl font-bold mb-5">Make a payment</h2>
                        <form className="flex flex-col gap-3" action="">
                            <input onChange={handleChange} value={paymentform.name} type="text" placeholder="Name" className="p-2 rounded-md bg-slate-800/40" required="" name="name" />
                            <input onChange={handleChange} value={paymentform.message} type="text" placeholder="Message" className="p-2 rounded-md bg-slate-800/40" required="" name="message" />
                            <input onChange={handleChange} value={paymentform.amount} type="number" inputMode="numeric" pattern="[0-9]*" placeholder="Amount" className="p-2 rounded-md bg-slate-800/40" name="amount" />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 disabled:from-gray-500 disabled:cursor-not-allowed disabled:shadow-gray-800/80 disabled:hover:bg-gradient-to-r disabled:bg-slate-600" disabled={paymentform.name?.length < 2 || paymentform.message?.length < 1 || paymentform.amount?.length < 1} >Support
                            </button>
                        </form>
                        <div className="flex gap-3 mt-5">
                            <button className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40" onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40" onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
