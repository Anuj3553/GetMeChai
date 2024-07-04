import connectDB from '@/db/connectDB';
import Payment from '@/models/Payment';
import User from '@/models/User';
import Link from 'next/link';
import React from 'react';

const HorizontalCarousel = async () => {
    await connectDB();

    // Fetch users
    const users = await User.find({});

    // Fetch payment details
    const payments = await Payment.find({});

    // Map users to their respective donations
    const profiles = users.map(user => {
        const userPayments = payments.filter(payment => payment.to_user === user.username);
        const totalDonations = userPayments.reduce((sum, payment) => sum + payment.amount, 0);
        const donationsCount = userPayments.length;

        return {
            name: user.name,
            username: user.username,
            donations: `${donationsCount} donations in the last year`,
            totalDonation: `$${totalDonations.toFixed(2)}`,
            streak: `${donationsCount}-month`,
            coverImage: user.coverpic,
            profileImage: user.profilepic
        };
    });

    return (
        <div className="flex overflow-x-scroll snap-x snap-mandatory w-full no-scrollbar space-x-2">
            {profiles.map((profile, index) => (
                <section className="flex-shrink-0 md:w-1/3 w-1/2 snap-center justify-center items-center" key={index}>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                        <div className="rounded-t-lg h-32 overflow-hidden">
                            <img className="object-cover object-top w-full" src={profile.coverImage || 'https://via.placeholder.com/400x400?text=Profile+Image+Missing'} alt='Cover' />
                        </div>
                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            <img className="object-cover object-center h-32" src={profile.profileImage || 'https://via.placeholder.com/400x400?text=Profile+Image+Missing'} alt='Profile' />
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-semibold">{profile.name}</h2>
                            <p className="text-gray-600 font-semibold">{profile.username}</p>
                            <p className="text-gray-600">{profile.donations}</p>
                        </div>
                        <div className="grid md:grid-cols-1 px-10 gap-4">
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9l-5 5-5-5" />
                                </svg>
                                <p className="text-lg font-semibold mt-2">{profile.totalDonation}</p>
                                <p className="text-sm text-gray-600">Total Donation</p>
                            </div>
                            {/* <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M12 6h.01M12 14h.01" />
                                </svg>
                                <p className="text-lg font-semibold mt-2">{profile.streak}</p>
                                <p className="text-sm text-gray-600">Donation Streak</p>
                            </div> */}
                        </div>
                        <Link href={`/${profile.username}`}>
                            <div className="p-4 border-t mx-8 mt-2 flex justify-center">
                                <button className="md:w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Donate</button>
                            </div>
                        </Link>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default HorizontalCarousel;
