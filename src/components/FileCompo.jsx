"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useReducer, useRef, useState } from 'react'

function FileCompo() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newFileName, setNewFileName] = useState("")
  const shareRef = useRef()
  const uploadRef = useRef()
  const downloadRef = useRef()
  const arrowRef = useRef()
  const downloadLabelRef = useRef()
  const uploadLabelRef = useRef()
  const shareLabelRef = useRef()
  const hitBoxRef = useRef()
  const inboxLabelRef = useRef()
  const linkLabelRef = useRef()
  const sendLabelRef = useRef()
  const deleteLabelRef = useRef()


  const { contextSafe } = useGSAP(() => {
    gsap.set(".sub-buttons", { opacity: 0 })
  })

  const shareEnter = contextSafe(() => {
    gsap.set(hitBoxRef.current, { pointerEvents: "auto", border: "1px solid black" })
    gsap.to(shareLabelRef.current, {
      width: "auto",
      opacity: 1,
      ease: "power2.out"
    })
    gsap.to(shareRef.current, {
      rotateZ: -45,
      duration: 0.3,
    })
    gsap.set(".sub-buttons", { clearProps: "all" })
    gsap.from(".sub-buttons", {
      top: 0,
      left: 0,
      opacity: 0,
      duration: 0.3,
      stagger: 0.14
    })
  })
  const shareLeave = contextSafe((e) => {
    if (e.relatedTarget === hitBoxRef.current || hitBoxRef.current?.contains(e.relatedTarget)) return
    gsap.set(hitBoxRef.current, { pointerEvents: "none" })
    gsap.to(shareLabelRef.current, {
      width: 0,
      opacity: 0,
      ease: "power2.out"
    })
    gsap.to(shareRef.current, {
      rotateZ: 0,
      duration: 0.3,
    })
    gsap.to(".sub-buttons", {
      top: 0,
      left: 0,
      opacity: 0,
      duration: 0.3,
      stagger: 0.14
    })
  })

  const uploadEnter = contextSafe(() => {
    gsap.to(uploadLabelRef.current, {
      width: "auto",
      opacity: 1,
      ease: "power2.out"
    })
    gsap.to(uploadRef.current, {
      rotateZ: -45,
      repeat: 3,
      yoyo: true,
      duration: 0.2,
    })
  })
  const uploadLeave = contextSafe(() => {
    gsap.to(uploadLabelRef.current, {
      width: 0,
      opacity: 0,
      ease: "power2.out"
    })
    gsap.to(uploadRef.current, {
      rotateZ: 0,
    })
  })

  const downloadEnter = contextSafe(() => {
    gsap.to(downloadLabelRef.current, {
      width: "auto",
      opacity: 1,
      ease: "power2.out"
    })
    gsap.to(downloadRef.current, {
      scale: 1.2,
      duration: 0.2,
    })
    gsap.from(arrowRef.current, {
      y: -50,
      duration: 0.4
    })
  })
  const downloadLeave = contextSafe(() => {
    gsap.to(arrowRef.current, { y: 0, duration: 0.1 })
    gsap.to(downloadLabelRef.current, {
      width: 0,
      opacity: 0,
      ease: "power2.out"
    })
    gsap.to(downloadRef.current, {
      scale: 1,
      duration: 0.2,
    })
  })

  const inboxEnter = contextSafe(() => {
    gsap.to(inboxLabelRef.current, { width: "auto", opacity: 1, ease: "power2.out" })
  })
  const inboxLeave = contextSafe(() => {
    gsap.to(inboxLabelRef.current, { width: 0, opacity: 0, ease: "power2.out" })
  })
  const linkEnter = contextSafe(() => {
    gsap.to(linkLabelRef.current, { width: "auto", opacity: 1, ease: "power2.out" })
  })
  const linkLeave = contextSafe(() => {
    gsap.to(linkLabelRef.current, { width: 0, opacity: 0, ease: "power2.out" })
  })
  const sendEnter = contextSafe(() => {
    gsap.to(sendLabelRef.current, { width: "auto", opacity: 1, ease: "power2.out" })
  })
  const sendLeave = contextSafe(() => {
    gsap.to(sendLabelRef.current, { width: 0, opacity: 0, ease: "power2.out" })
  })
  const deleteEnter = contextSafe(() => {
    gsap.to(deleteLabelRef.current, { width: "auto", opacity: 1, ease: "power2.out" })
  })
  const deleteLeave = contextSafe(() => {
    gsap.to(deleteLabelRef.current, { width: 0, opacity: 0, ease: "power2.out" })
  })

  return (
    <div className='col-span-2 row-span-2 items-center justify-center flex h-full w-full'>

      <div className="flex flex-col font-sans w-sm space-y-4 px-3 border pt-4 rounded-lg bg-[#F5F5F5] relative">

        <div className="flex space-x-4 px-1">
          <div className="size-30 rounded-lg relative">
            <img
              src="https://i.pinimg.com/736x/9d/6b/3c/9d6b3c4edeee442ae8bb12d318e67f35.jpg" alt="pdf preview not available"
              className="text-xs object-cover h-full w-full rounded-lg" />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-lg" />
          </div>
          <div className="tracking-tight max-w-51 space-y-2">
            <h3 className="text text-2xl text-[#065f46] font-serif">Design Roadmap</h3>
            <p className="text-xs text text-[#282828]/70 tracking-normal wrap-break-word">Last updated 3 days ago</p>
            {/* <div className='text-xs text text-[#065f46] w-fit border border-[#065f46]/50 rounded-sm bg-[#065f46]/22 px-2 py-0.5'>pdf</div> */}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#282828]/40 py-2.5 px-2">

          <div className="">
            <p className="text text-xs text-[#282828]/70">Total size</p>
            <h3 className="tracking-tighter font-serif text-3xl text-[#065f46]">2.57 MB</h3>
          </div>

          <div className="space-x-2 flex items-center justify-center">

            <button
              onMouseEnter={downloadEnter}
              onMouseLeave={downloadLeave}
              className="action-btn">
              <svg
                ref={downloadRef}
                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <g ref={arrowRef}>
                  <path d="M12 15V3" />
                  <path d="m7 10 5 5 5-5" />
                </g>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              </svg>
              <label ref={downloadLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 left-1/2 -translate-x-1/2 -bottom-8 rounded-sm opacity-0 w-0 pointer-events-none'>Download</label>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={uploadEnter}
              onMouseLeave={uploadLeave}
              className="action-btn">
              <svg
                ref={uploadRef}
                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
              <label ref={uploadLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 left-1/2 -translate-x-1/2 -bottom-8 rounded-sm opacity-0 w-0 pointer-events-none'>Update</label>
            </button>

            <button
              onMouseEnter={shareEnter}
              onMouseLeave={shareLeave}
              className="action-btn">
              <div
                ref={hitBoxRef}
                className='absolute -top-12 -left-9 -right-9 bottom-0 opacity-0 pointer-events-none z-10' />
              <svg
                ref={shareRef}
                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              <label ref={shareLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 left-1/2 -translate-x-1/2 -bottom-8 rounded-sm opacity-0 w-0 pointer-events-none'>Share</label>

              <div onMouseEnter={inboxEnter} onMouseLeave={inboxLeave} className='sub-buttons absolute -top-10 -left-10 bg-linear-to-t from-[#065f46] to-[#065f46]/85 h-full w-full rounded-full cursor-pointer transition-colors z-20'>
                <svg xmlns='http://www.w3.org/2000/svg' width={17} height={17} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-inbox-icon lucide-inbox'>
                  <polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
                  <path d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
                </svg>
                <label ref={inboxLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 -left-2 -top-8 rounded-sm pointer-events-none opacity-0 w-0'>Inbox</label>
              </div>
              <div onMouseEnter={linkEnter} onMouseLeave={linkLeave} className='sub-buttons absolute -top-14 left-0 bg-linear-to-t from-[#065f46] to-[#065f46]/85 h-full w-full rounded-full cursor-pointer transition-colors z-20'>
                <svg xmlns='http://www.w3.org/2000/svg' width={17} height={17} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-link-icon lucide-link'>
                  <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                  <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                </svg>
                <label ref={linkLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 -left-1 -top-8 rounded-sm pointer-events-none opacity-0 w-0'>Link</label>
              </div>
              <div onMouseEnter={sendEnter} onMouseLeave={sendLeave} className='sub-buttons absolute -top-10 left-10 bg-linear-to-t from-[#065f46] to-[#065f46]/85 h-full w-full rounded-full cursor-pointer transition-colors z-20'>
                <svg xmlns='http://www.w3.org/2000/svg' width={17} height={17} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-send-icon lucide-send'>
                  <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' />
                  <path d='m21.854 2.147-10.94 10.939' />
                </svg>
                <label ref={sendLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 -right-2 -top-8 rounded-sm pointer-events-none opacity-0 w-0'>Send</label>
              </div>

            </button>

            <button
              onMouseEnter={deleteEnter}
              onMouseLeave={deleteLeave}
              className="bg-red-300/25 hover:bg-red-300/50 transition-colors border border-red-400 p-1.5 rounded-md cursor-pointer text-red-400 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shredder-icon lucide-shredder">
                <path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                <path d="M10 22v-5" />
                <path d="M14 19v-2" />
                <path d="M18 20v-3" />
                <path d="M2 13h20" />
                <path d="M6 20v-3" />
              </svg>
              <label ref={deleteLabelRef} className='bg-white/90 absolute text-xs text-black/70 px-2.5 py-1 z-10 left-1/2 -translate-x-1/2 -bottom-8 rounded-sm pointer-events-none opacity-0 w-0'>Delete</label>
            </button>

          </div>
        </div>

        {/* {isModalOpen && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 rounded-lg">
                        <div className="bg-[#F5F5F5] p-3 rounded-sm space-y-2 max-w-[20rem]">
                            <div className='flex gap-x-2'>
                                <input
                                    type="text"
                                    value={newFileName}
                                    onChange={(e) => setNewFileName(e.target.value)}
                                    className="border border-gray-300 rounded p-2 w-full text-sm outline-none focus:ring-2 focus:ring-[#065f46]"
                                />
                                <div className="flex space-x-2 justify-end">
                                    <button
                                        onClick={handleUpdate}
                                        className="bg-[#065f46]/25 hover:bg-[#065f46]/35 text-[#065f46] border border-[#065f46] p-2 rounded cursor-pointer"
                                    >
                                        <svg className="lucide lucide-circle-check-big-icon lucide-circle-check-big" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill='none' strokeLinejoin="round">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                            <path d="m9 11 3 3L22 4" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="text-red-400 bg-red-300/25 hover:bg-red-300/40 border border-red-400 p-2 rounded cursor-pointer"
                                    >
                                        <svg className="lucide lucide-ban-icon lucide-ban" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill='none' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M4.929 4.929 19.07 19.071" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

        {/* {shareLink && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 rounded-lg">
                    <div className="bg-white p-4 rounded-lg space-y-4 max-w-[18rem]">
                        <h3 className="    text-md">Share Link</h3>
                        <input
                            type="text"
                            value={shareLink}
                            readOnly
                            className="border border-gray-300 rounded p-2 w-full text-sm bg-gray-100"
                        />
                        <div className="flex space-x-2 justify-end">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(shareLink)
                                    setShareLink(null)
                                }}
                                className="bg-[#065f46]/25 text-[#065f46] border border-[#065f46] p-2 rounded cursor-pointer"
                            >
                                <svg className="lucide lucide-circle-check-big-icon lucide-circle-check-big" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill='none' strokeLinejoin="round">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                    <path d="m9 11 3 3L22 4" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setShareLink(null)}
                                className="text-red-400 bg-red-300/25 border border-red-400 p-2 rounded cursor-pointer"
                            >
                                <svg className="lucide lucide-ban-icon lucide-ban" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill='none' viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M4.929 4.929 19.07 19.071" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )} */}

      </div>
    </div>
  )
}

export default FileCompo