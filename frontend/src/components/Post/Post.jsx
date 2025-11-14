import { ArrowBigDown, ArrowBigUp, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSetRecoilState } from "recoil"
import { createModalAtom } from "@/store/atoms/Modal"

const Post=()=>{
  const setModal = useSetRecoilState(createModalAtom)
  return (
    <div className="border-solid border-y border-neutral-800 p-1">
        <div className="flex flex-col gap-1 hover:bg-neutral-800 rounded-lg px-4 py-1">
            <div className="flex itmes-center justify-start gap-2">
                <Avatar className='w-8 h-8'>
                  <AvatarImage />
                  <AvatarFallback>Community</AvatarFallback>
                </Avatar>
                <span className="text-neutral-500 text-sm font-semibold pt-1">community name</span>
            </div>
            <h2 className="text-xl font-semibold text-white">title</h2>
            {/* {body && <p className="text-zinc-300 text-sm leading-6">body</p>}
            {image && (<img src={image}
                            className="w-full rounded-xl border border-zinc-800"
                             alt="Post attachment"/>
                      )} */}
            <div className="flex flex-row itmes-center gap-2 ">
                 <div className="bg-white/20 text-white text-sm rounded-full flex flex-row items-center gap-1 p-1.5">
                    <ArrowBigUp size={20} color="white" className="hover:bg-white/40 rounded-full cursor-pointer "/>
                    20
                    <ArrowBigDown size={20} color="white" className="hover:bg-white/40 rounded-full cursor-pointer" />
                 </div >
                 <div onClick={()=>setModal("postComment")} className="bg-white/20 text-white text-sm rounded-full flex flex-row items-center gap-1 px-2 cursor-pointer">
                    <MessageCircle size={18} color="white"/>
                    50
                 </div>
            </div>
        </div>
    </div>
  )
}
export default Post
