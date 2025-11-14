import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"



const CommunityProfileCard = () => {
  return (
        <Card className='bg-neutral-900 flex flex-row itmes-center p-2 border-none shadow-none gap-2 cursor-pointer hover:border-sky-600 hover:shadow hover:shadow-sky-700 '>
            <Avatar>
                <AvatarImage />
                <AvatarFallback>Community</AvatarFallback>
            </Avatar>
            <h3 className="text-white text-md font-normal pt-1/2">community name</h3>
        </Card>
  )
}

export default CommunityProfileCard