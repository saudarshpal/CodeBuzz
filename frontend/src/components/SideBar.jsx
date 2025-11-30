import { useSetRecoilState } from "recoil"
import { Button } from "./ui/button"
import { HomeIcon, LogOutIcon, PlusIcon, User2Icon } from "lucide-react"
import { createModalAtom } from "@/store/atoms/Modal"
import {useNavigate} from 'react-router-dom'

const SideBar = () => {
  const setModal = useSetRecoilState(createModalAtom)
  const navigate = useNavigate()
  return (
      <div className=" py-4 px-3 h-screen ">
        <div className="place-self-center flex flex-col justify-around gap-6 h-full w-full">
          <div className="flex flex-col gap-6">
             <div onClick={()=>{navigate('/homepage')
                                setModal(null)
             }
                               
             } className=" text-white  text-md font-semibold rounded-lg flex items-center justify-start gap-2 py-3 w-full hover:bg-sky-600 pl-10 cursor-pointer">
                <HomeIcon size={23} color="white" /> Home
            </div>
            <div onClick={()=>navigate('/account')} className=" text-white text-md font-semibold rounded-lg flex items-center justify-start gap-2 py-3 w-full  hover:bg-sky-600 pl-10 cursor-pointer">
                <User2Icon size={23} color="white"/>Account
            </div>
            
            <div onClick={()=>setModal("createCommunity")} className="  text-white text-md font-semibold rounded-lg flex items-center justify-start gap-2 py-3 w-full  hover:bg-sky-600 pl-10 cursor-pointer">
                <PlusIcon size={23} color="white"/>Create community
            </div>
            <Button className="bg-sky-700 text-md rounded-lg justify-center hover:bg-sky-600 cursor-pointer h-12 ">
                <LogOutIcon size={23}/> Logout
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-1 ">
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">RimSide Rules</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">User Agreement</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">Accessibility</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">RimSide, Inc. ©2025. All rights reserved</span>
          </div>
        </div>
    </div>    
  )
}

export default SideBar