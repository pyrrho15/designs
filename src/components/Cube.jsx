import gsap from 'gsap'
import { Draggable } from 'gsap/all';

function Cube({ githubUrl }) {
    // gsap.registerPlugin(Draggable)

    // gsap.to("#cube", {
    //     rotateZ: 360,
    //     duration: 2,
    //     repeat: -1,
    //     ease: "power1.inOut"
    // })


    return (
        <div className='flex items-center perspective-[1000px] relative justify-center row-span-3 col-span-2 '>
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

            <div className='bg-white size-48 blur-2xl rounded-full absolute' />

            <div id='cube' className='w-40 h-40 relative rotate-y-25 rotate-x-20 transform-3d'>
                <div className='absolute w-40 h-40 bg-yellow-200 translate-z-20 border-b-2 border-l-2' />
                <div className='absolute w-40 h-40 bg-green-200 -translate-z-20' />
                <div className='absolute w-40 h-40 bg-pink-200 translate-x-20 rotate-y-90' />
                <div className='absolute w-40 h-40 bg-pink-200 -translate-x-20 -rotate-y-90 border-b-2' />
                <div className='absolute w-40 h-40 bg-red-400 translate-y-20 rotate-x-90' />
                <div className='absolute w-40 h-40 bg-red-400 -translate-y-20 -rotate-x-90' />
            </div>

        </div>
    )
}

export default Cube