import TopBar from "@/components/TopBar"
import SideBar from "@/components/SideBar"
import CommunityBar from "@/components/Home/CommunityBar"
import Feed from "@/components/Home/Feed"
import { useSetRecoilState } from "recoil"
import { userAtom } from "@/store/atoms/User"


const HomePage = () => { 
   const userId = localStorage.getItem('userId')
   const setUserId = useSetRecoilState(userAtom)
   setUserId(userId)
   return (
    <div className='bg-neutral-900 h-full w-screen'>
       <TopBar></TopBar>
       <div className='flex flex-row'>
          <div className='border-r border-neutral-700 w-3/15'>
             <SideBar/>
          </div>
          <div className='w-8/15 px-4 py-2'>
             <Feed />
          </div>
          <div className='border-l border-neutral-700 px-5 py-2 w-4/15'>
             <CommunityBar /> 
          </div> 
       </div>
    </div>
  )
}

export default HomePage