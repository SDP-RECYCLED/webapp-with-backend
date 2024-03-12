import React from 'react'
import ProfileImage from '@/public/Profile - default.png'
import Image from 'next/image'
import BinTable from '../components/BinTable'



const ProfilePage = () => {
    const binsData = [
        { id: 1, name: 'Bin 1', status: 'Available' },
        { id: 2, name: 'Bin 2', status: 'Full' },
        { id: 3, name: 'Bin 3', status: 'Available' },
        { id: 4, name: 'Bin 4', status: 'Available'},
        { id: 5, name: 'Bin 5', status: 'Maintenance Needed' }
      ];

    return (
        <div className='flex flex-row justify-start h-screen ml-24 mt-20 mr-10'>
            <div className='pt-10 bg-white rounded shadow w-64 h-96 items-center'>
                <Image src={ProfileImage} alt='Profile default image' className='w-48 h-[auto] object-cover rounded-full mx-auto'/>
                <h1 className='mt-6 text-2xl font-semibold text-gray-700 text-center'>Eve</h1>
                <p className='mt-2 text-gray-600 text-center'>eve@example.com</p>
            </div>
            <div className='flex-grow ml-10 mt-0'>
                <div className='mt-8 border-b border-gray-300 pb-10'>
                    <h2 className='text-xl font-semibold text-gray-700'>Account Details</h2>
                    <p className='mt-5 text-gray-600'>Username: Eve</p>
                    <p className='mt-5 text-gray-600'>Email: eve@example.com</p>
                    <p className='mt-5 text-gray-600'>Joined: January 1, 2024</p>
                </div>
                <div className='mt-8 border-b border-gray-300 pb-10'>
                    <h2 className='text-xl font-semibold text-gray-700'>Company</h2>
                    <p className='mt-5 text-gray-600'>Acme Co.</p>
                </div>
                <div className='mt-8 border-b border-gray-300 pb-10'>
                    <h2 className='text-xl font-semibold text-gray-700'>Your bins</h2>
                    <BinTable bins={binsData}/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage