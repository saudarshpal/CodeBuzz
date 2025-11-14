import { PlusIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Banner from '@/assets/Banner.jpg'


const CommunityHomePage = () => {
  return (

    <div className="w-full">
        <img src={Banner} alt="" className="relative rounded-2xl w-full h-[40vh]"></img>
        <div className="relative">
            <div className="flex justify-between mt-[-30px] pl-10">
                <div className="flex flex-row items-end gap-2">
                    <Avatar className="h-20 w-20">
                        <AvatarImage />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-white text-4xl font-semibold">Community Name </h1>
                </div>
                <div className="flex flex-row items-end gap-4">
                    <div className=" text-white text-lg font-medium flex items-center gap-1 px-3 py-1 rounded-full border border-neutral-800 hover:shadow hover:shadow-neutral-600 cursor-pointer" onClick={()=>setModal("createPost")}>
                        Create<PlusIcon size={22} color="white" className="mt-1"/>
                    </div>
                    <div className="text-white text-lg font-medium flex items-center gap-1 px-3 py-1 rounded-full border border-neutral-800 hover:shadow hover:shadow-neutral-600 cursor-pointer" onClick={()=>setModal("createPost")}>
                        Follow
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CommunityHomePage