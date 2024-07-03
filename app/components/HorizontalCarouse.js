import React from 'react';

const profiles = [
    {
        name: "Arthur Taylor",
        donations: "48 donations in the last year",
        totalDonation: "$12,000.00",
        streak: "14-month",
        coverImage: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        name: "Emily Johnson",
        donations: "60 donations in the last year",
        totalDonation: "$15,000.00",
        streak: "12-month",
        coverImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "Michael Smith",
        donations: "52 donations in the last year",
        totalDonation: "$13,000.00",
        streak: "10-month",
        coverImage: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "Jessica Brown",
        donations: "55 donations in the last year",
        totalDonation: "$11,500.00",
        streak: "8-month",
        coverImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "David Wilson",
        donations: "50 donations in the last year",
        totalDonation: "$10,000.00",
        streak: "6-month",
        coverImage: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1506700754003-14c9b9fb3b8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "Sarah Miller",
        donations: "70 donations in the last year",
        totalDonation: "$17,000.00",
        streak: "15-month",
        coverImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "James Davis",
        donations: "45 donations in the last year",
        totalDonation: "$9,000.00",
        streak: "9-month",
        coverImage: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "Mary Martinez",
        donations: "65 donations in the last year",
        totalDonation: "$14,500.00",
        streak: "13-month",
        coverImage: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1506700754003-14c9b9fb3b8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "Robert Garcia",
        donations: "40 donations in the last year",
        totalDonation: "$8,000.00",
        streak: "7-month",
        coverImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "Linda Robinson",
        donations: "75 donations in the last year",
        totalDonation: "$18,000.00",
        streak: "16-month",
        coverImage: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
    {
        name: "William Clark",
        donations: "58 donations in the last year",
        totalDonation: "$11,600.00",
        streak: "11-month",
        coverImage: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        profileImage: "https://images.unsplash.com/photo-1506700754003-14c9b9fb3b8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
    },
];

const HorizontalCarousel = () => {
    return (
        <div className="flex overflow-x-scroll snap-x snap-mandatory w-full no-scrollbar space-x-2">
            {profiles.map((profile, index) => (
                <section className="flex-shrink-0 md:w-1/3 w-1/2 snap-center justify-center items-center" key={index}>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                        <div className="rounded-t-lg h-32 overflow-hidden">
                            <img className="object-cover object-top w-full" src={profile.coverImage} alt='Cover' />
                        </div>
                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            <img className="object-cover object-center h-32" src={profile.profileImage} alt='Profile' />
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-semibold">{profile.name}</h2>
                            <p className="text-gray-600">{profile.donations}</p>
                        </div>
                        <div className="grid md:grid-cols-2 px-3 gap-4">
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9l-5 5-5-5" />
                                </svg>
                                <p className="text-lg font-semibold mt-2">{profile.totalDonation}</p>
                                <p className="text-sm text-gray-600">Total Donation</p>
                            </div>
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M12 6h.01M12 14h.01" />
                                </svg>
                                <p className="text-lg font-semibold mt-2">{profile.streak}</p>
                                <p className="text-sm text-gray-600">Donation Streak</p>
                            </div>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2 flex justify-center">
                            <button className="md:w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Donate</button>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default HorizontalCarousel;
