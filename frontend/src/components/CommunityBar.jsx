const CommunityBar = () => {
  return (
    <div className="bg-gray-950 h-full rounded-lg">
        <div className="w-full flex items-center">
            <div className="bg-neutral-600 flex items-center gap-1 m-3 rounded-full px-3 py-2 w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search Communities " className="px-1 w-full outline-none rounded-full placeholder:text-sm placeholder : text-neutral-300 "></input>
            </div>      
          </div>
    </div>
  )
}

export default CommunityBar