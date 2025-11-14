import TopBar from "@/components/TopBar"
import SideBar from "@/components/SideBar"
import CommunityBar from "@/components/Community/CommunityBar"
import { useRecoilValue } from "recoil"
import CreatePost from "@/components/Post/CreatePost"
import CreateCommunity from "@/components/Community/CreateCommunity"
import { createModalAtom } from "@/store/atoms/Modal"
import Post from "@/components/Post/Post"
import CommentCard from "@/components/Post/CommentCard"



const HomePage = () => {
  const modal = useRecoilValue(createModalAtom)
  return (
    <div className='bg-neutral-900 h-full'>
       <TopBar></TopBar>
       <div className='flex flex-row'>
          <div className='border-r border-neutral-700 w-3/15'>
             <SideBar/>
          </div>
          <div className='w-8/15 px-4 py-2'>
            {modal=== "createPost" ? (<CreatePost />) :
             modal==="createCommunity" ? (<CreateCommunity/>):
             modal==="postComment" ? (<CommentCard />) :
             (<Post/>)
             }
          </div>
          <div className='border-l border-neutral-700 px-5 py-2 w-4/15'>
              <CommunityBar />
          </div>

       </div>
    </div>
  )
}

export default HomePage