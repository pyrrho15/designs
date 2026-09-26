import { ChevronDown } from 'lucide-react'
import React from 'react'

function Expense({githubUrl}) {
    return (
        <div className='relative flex items-center justify-center col-span-2 row-span-3'>

            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-10 text-white/60 hover:text-white transition-colors"
                >
                    <img src="/code.png" className="size-5" />
                </a>
            )}

            <div className='bg-white w-80 h-25 flex items-center justify-between px-4 rounded-3xl'>
                <div className='flex flex-col gap-y-0.5'>
                    <p className='text-[12px] text-gray-600/80'>October 2026</p>
                    <h2 className='text-2xl font-medium'>$4,892</h2>
                    <p className='text-[12px] text-green-700'>You spend 22% less than last month!</p>
                </div>
                <div>
                    <ChevronDown size={25} strokeWidth={2}/>
                </div>
            </div>


        </div>

    )
}

export default Expense