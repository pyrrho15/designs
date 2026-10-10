import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

function Dropdown({ githubUrl }) {

    const CONTENT = [
        {
            "id": 1,
            "title": "User Research",
            "description": "Understanding user needs, behaviors, and motivations through methods like interviews, surveys, and usability testing.",
            "img": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#7F2FF9dd\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-search-icon lucide-search\"><path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></svg>"
        },
        {
            "id": 2,
            "title": "Information Architecture",
            "description": "Understanding user needs, behaviors, and motivations through methods like interviews, surveys, and usability testing.",
            "img": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#7F2FF9dd\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-layout-grid-icon lucide-layout-grid\"><rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/></svg>"
        },
        {
            "id": 3,
            "title": "Interaction Design",
            "description": "Understanding user needs, behaviors, and motivations through methods like interviews, surveys, and usability testing.",
            "img": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#7F2FF9dd\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-mouse-pointer-click-icon lucide-mouse-pointer-click\"><path d=\"M14 4.1 12 6\"/><path d=\"m5.1 8-2.9-.8\"/><path d=\"m6 12-1.9 2\"/><path d=\"M7.2 2.2 8 5.1\"/><path d=\"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z\"/></svg>"
        },
        {
            "id": 4,
            "title": "UX Optimization",
            "description": "Understanding user needs, behaviors, and motivations through methods like interviews, surveys, and usability testing.",
            "img": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#7F2FF9dd\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-trending-up-icon lucide-trending-up\"><path d=\"M16 7h6v6\"/><path d=\"m22 7-8.5 8.5-5-5L2 17\"/></svg>"
        }
    ]

    gsap.registerPlugin(useGSAP)

    const [openId, setOpenId] = useState(null)

    const toggleDropdown = (id) => {
        const isClosing = openId === id
        const prevId = openId
        const targetHeight = isClosing ? 0 : "auto"

        setOpenId((prev) => prev === id ? null : id)

        if (prevId && prevId !== id) {
            gsap.to(`#desc${prevId}`, {
                height: 0,
                duration: 1,
                ease: "elastic.out",
                marginTop: 0,
                opacity: 0,
                overwrite: "auto"
            })

            gsap.to(`#arr${prevId}`, {
                rotate: 0,
                duration: 0.5,
                ease: "elastic.out",
                overwrite: "auto"
            })
        }

        gsap.to(`#desc${id}`, {
            height: targetHeight,
            opacity: isClosing ? 0 : 1,
            duration: 1,
            ease: "elastic.out",
            marginTop: isClosing ? 0 : 10,
            overwrite: "auto"
        })

        gsap.to(`#arr${id}`, {
            rotate: isClosing ? 0 : 180,
            duration: 0.5,
            ease: "elastic.out",
            overwrite: "auto"
        })
    }


    return (
        <div className='relative text-white/80 col-span-2 row-span-3'>
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

            <div className='flex flex-col items-center justify-center w-full h-full space-y-1'>
                {CONTENT.map((item) => (
                    <button
                        className='bg-[#f2efef] cursor-pointer w-full max-w-[21rem] px-3.5 pr-4 py-3 rounded-xl'
                        key={item.id}
                        onClick={() => toggleDropdown(item.id)}>

                        <div className='flex text-black/90 justify-between items-center w-full'>
                            <div className='flex items-center space-x-2.5'>
                                <div className='bg-[#d3cceb] p-2 rounded-xl' dangerouslySetInnerHTML={{ __html: item.img }} />
                                <h3 className='font-medium text-lg'>{item.title}</h3>
                            </div>
                            <svg id={`arr${item.id}`}
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                        </div>

                        {/* {openId === item.id && */}
                        <div
                            id={`desc${item.id}`}
                            className='opacity-0 h-0 overflow-hidden text-black/75 text-sm w-full text-left'>
                            <p>{item.description}</p>
                        </div>
                        {/* } */}

                    </button>
                ))}
            </div>

        </div>
    )
}

export default Dropdown