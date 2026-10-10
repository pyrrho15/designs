import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

function Simple({ githubUrl }) {
    const cursorRef = React.useRef(null)
    const container = React.useRef(null)

    gsap.registerPlugin(useGSAP)
    const { contextSafe } = useGSAP({ scope: container })

    const handleMove = contextSafe((e) => {
        const { clientX, clientY } = e;
        const rect = container.current.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top
        gsap.to(cursorRef.current, {
            x: x - 14,
            y: y - 14,
            duration: 0.3,
            delay: 0.1,
        })
    })

    return (
        <div className='relative col-span-2 row-span-2 h-full w-full flex items-center justify-center' ref={container}
            onMouseMove={handleMove}
            onMouseEnter={() => { gsap.to(cursorRef.current, { autoAlpha: 1, scale: 1 }) }}
            onMouseLeave={() => { gsap.to(cursorRef.current, { autoAlpha: 0, scale: 0 }) }}
        >
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
            <h2 className='text-2xl text-white/80 text-center uppercase font-serif'>Simple Cursor <br />Animation</h2>
            <div
                ref={cursorRef}
                className='size-7 bg-white rounded-full absolute top-0 left-0 pointer-events-none z-50' />
        </div>
    )
}

export default Simple