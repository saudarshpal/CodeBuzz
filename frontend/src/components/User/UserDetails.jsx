import CommunityProfileCard from "../Home/CommunityProfileCard"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardDescription,  } from "../ui/card"

const UserDetails = ({user,totalposts,userCommunities}) => {
  const totalcommunities = userCommunities.length
  return (
    <Card className='bg-black rounded-xs gap-1 px-5 pt-2 pb-4 border-none'>
        <div className='flex flex-col '>
            <div className="flex flex-row items-center gap-2">
               <span className=" text-neutral-300 font-semibold">{user.username} </span>
            </div> 
            <p className=" text-neutral-500 text-md mt-2">{user.profile?.description}</p>
        </div>
        <CardDescription className="text-sm font-semibold items-center mt-2 text-neutral-500">
            <span >Gender : {user.profile?.gender}</span>
            <div className=" space-y-1 flex flex-row items-center justify-between mt-1">
               <span>Followers {user.followers?.length}</span>
               <span>Following {user.following?.length}</span>
            </div>
            <div className=" space-y-1 flex flex-row items-center justify-between mt-1">
               <span>Posts {totalposts}</span>
               <span>Communities {totalcommunities}</span>
            </div>
            <div className="flex flex-col gap-2 border-neutral-700 mt-1 overflow-y-auto">
                <span className="text-center">Communities</span>
                {userCommunities.map((c,index)=><CommunityProfileCard key={index} community={c}/>)}
            </div>
        </CardDescription>
        <CardContent ></CardContent>
    </Card>
  )
}

export default UserDetails