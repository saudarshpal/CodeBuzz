import TopBar from "@/components/TopBar"
import SideBar from "@/components/SideBar"
import { useRecoilValue } from "recoil"
import { createModalAtom } from "@/store/atoms/Modal"
import CommunityHomePage from "@/components/Community/CommunityHomePage"




const CommunityPage = () => {
  const modal = useRecoilValue(createModalAtom)
  return ( 
    <div className='bg-neutral-900 h-full'>
       <TopBar></TopBar>
       <div className='flex flex-row'>
          <div className='border-r border-neutral-700 w-3/15'>
             <SideBar/>
          </div>
          <div className='w-12/15 px-4 py-2'>
               <CommunityHomePage />
          </div>
          

       </div>
    </div>
  )
}
export default CommunityPage