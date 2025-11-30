import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"



const CommunityProfileCard = ({community}) => {
  const navigate = useNavigate()
  return (
        <div className='flex flex-row itmes-center p-2 border-none shadow-none gap-2 '>
            <Avatar className="cursor-pointer" onClick={()=>navigate(`/community/${community._id}`)}>
                <AvatarImage />
                <AvatarFallback>{community.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-white text-md font-normal pt-1">{community.name}</h3>
        </div>
  )
}

export default CommunityProfileCard