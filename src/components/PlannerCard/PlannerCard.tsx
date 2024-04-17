import React from 'react'
import planner1 from '../../../public/assets/img/planner1.png'
import Image from 'next/image'

const PlannerCard = () => {
  return (
    <>
        <div className=' w-[454px] m-3 shadow-xl rounded-t-xl overflow-hidden'>
            <Image src={planner1} height={163} width={454} alt="" />
            <div className='p-5'>
                <div>
                    <ul className='flex gap-3 text-sm'>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Weddings</li>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Social Gatherings</li>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Corporate</li>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Birthdays</li>
                    </ul>
                </div>
                <div className='mt-5 mb-3'>
                    <div>
                        <span className='font-bold '>Elevant Events by Sarah</span>
                        <div className='text-gray-500'>
                            <span>5k reviews</span>
                            <span className='ml-4'>Free to be booked</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>

            <button className='h-[44px] w-[148px] rounded-full border border-red-400 text-red-400 font-bold p-3 mt-5 mb-5 ml-5'>See all Planners</button>
        </div>
    </>
  )
}

export default PlannerCard