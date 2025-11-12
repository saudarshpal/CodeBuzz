const SideBar = () => {
  return (
    <div className="bg-neutral-700 py-4 px-3">
        <div className="place-self-center flex flex-col gap-5 h-full w-full">
            <div className="rounded-xl flex items-center justify-start gap-2 py-2 w-full hover:bg-neutral-500 pl-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-center text-white  text-sm font-semibold">Home</span>
            </div>
            <div className="rounded-xl flex items-center justify-start gap-2 py-2 w-full  hover:bg-neutral-500 pl-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span className="text-center text-white text-sm font-semibold">Profile</span>
            </div>
            
            <div className="rounded-xl flex items-center justify-start gap-2 py-2 w-full  hover:bg-neutral-500 pl-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="text-center text-white text-sm font-semibold">Start a community</span>
            </div>
            <div className="bg-black flex flex-wrap items-center gap-2 rounded-lg px-2 py-3">
                <span className="text-sky-600 underline text-sm font-bold rounded-lg py-1 px-2 w-full">Profile Board</span>
                 <span className="text-neutral-400 text-sm font-semibold rounded-lg hover:bg-neutral-500 hover:text-white py-1 px-2 cursor-pointer">followers 20</span>
                 <span className="text-neutral-400 text-sm font-semibold rounded-lg hover:bg-neutral-500 hover:text-white py-1 px-2 cursor-pointer">following 30</span>
                 <span className="text-neutral-400 text-sm font-semibold rounded-lg hover:bg-neutral-500 hover:text-white py-1 px-2 cursor-pointer w-full">communities 30</span>
                
                 
            </div>
            <div className="bg-sky-700 rounded-xl flex items-center justify-center gap-2 py-2 w-full  hover:bg-sky-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                <span className="text-center text-white text-sm font-semibold">Logout</span>
            </div>
            <div className="flex flex-wrap items-center gap-1 ">
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white">RimSide Rules</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white">Privacy Policy</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white">User Agreement</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white">Accessibility</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white">RimSide, Inc. ©2025. All rights reserved</span>
            </div>
            

        </div>

    </div>
  )
}

export default SideBar