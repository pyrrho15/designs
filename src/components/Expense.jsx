import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function Expense({ githubUrl }) {
    const mainRef = useRef(null)
    const arrowRef = useRef(null)
    const container = useRef(null)
    const headerRef = useRef(null)
    const contentRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    gsap.registerPlugin(useGSAP)
    const { contextSafe } = useGSAP({ scope: container })

    useEffect(() => {
        gsap.set(arrowRef.current, {
            rotation: 180
        })
        gsap.set(contentRef.current, {
            autoAlpha: 0
        })
    }, [])

    const handleClick = contextSafe((isOpen) => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            gsap.to(mainRef.current, {
                height: 400,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '1rem 0',
                ease: 'power1.inOut'
            })
            gsap.to(arrowRef.current, {
                rotation: 0,
            })
            gsap.to(contentRef.current, {
                autoAlpha: 1,
            })
        } else {
            gsap.to(mainRef.current, {
                height: 100,
                alignItems: 'center',
                padding: '1rem 0',
                ease: 'power1.inOut'
            })
            gsap.to(arrowRef.current, {
                rotation: 180,
            })
            gsap.to(contentRef.current, {
                autoAlpha: 0,
            })
        }
    })


    return (
        <div ref={container} className='relative flex items-center justify-center col-span-2 row-span-3'>

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

            <div ref={mainRef} className='bg-white w-80 h-25 flex flex-col items-center justify-center rounded-3xl'>

                <div ref={headerRef} className='flex items-center justify-around w-full'>
                    <div className='flex flex-col gap-y-0.5'>
                        <p className='text-[12px] text-gray-600/80'>October 2026</p>
                        <h2 className='text-2xl font-medium'>$4,892</h2>
                        <p className='text-[12px] text-green-700'>You spend 22% less than last month!</p>
                    </div>
                    <button onClick={() => handleClick(isOpen)} ref={arrowRef}>
                        <ChevronDown size={25} strokeWidth={2} />
                    </button>
                </div>

                <div className='flex flex-col gap-y-2 hidden' ref={contentRef}>
                    <div className="w-70 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-70 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-70 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-70 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-70 h-12 bg-gray-200 rounded-lg"></div>
                </div>

            </div>

        </div>

    )
}

export default Expense