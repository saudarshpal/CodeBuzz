import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRecoilState} from "recoil";
import { createModalAtom } from "@/store/atoms/Modal";
import { ArrowBigDown, ArrowBigUp, ArrowRight} from "lucide-react";

const CommentCard =()=>{
  const [modal,setModal] = useRecoilState(createModalAtom)
  let comments =[{
    username : "Saudarsh Pal",
    text : "hi there nice post"
  },{
    username : "Darsh Pal",
    text:"hi there from nice post"
  },{
    username : "Sumit",
    text :"Love u all"
  },{
    username : "Sumit",
    text :"Love u all"
  },{
    username : "Sumit",
    text :"Love u all"
  },{
    username : "Sumit",
    text :"Love u all"
  },{
    username : "Sumit",
    text :"Love u all"
  },{
    username : "Sumit",
    text :"Love u all"
  },]
  return (
    <>
     {modal==="postComment" && <Card className="bg-neutral-900 border-neutral-800 shadow-neutral-600 rounded-2xl w-full max-w-2xl p-3">
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className="text-xl font-semibold text-gray-100">Add Comment</CardTitle>
           <ArrowRight onClick={()=>setModal(null)}color="white" size={20} className="cursor-pointer"></ArrowRight>
      </CardHeader>   
      <CardContent className="space-y-4">
        <div className="space-y-3 pb-4 border-b border-neutral-800">
          <Textarea placeholder="Write a comment..."
                    className="bg-neutral-800 border-neutral-700 text-neutral-200 resize-none"/>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Comment</Button>
        </div>

        {/* Comments List */}
        <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
          {comments.map((c, index) => (<motion.div key={index}
                                                   initial={{ opacity: 0,y:8}}
                                                   animate={{ opacity: 1, y:0 }}
                                                   className="flex gap-3 "
                                        >
              {/* Avatar */}
              <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage  />
                <AvatarFallback>{c.username.charAt(0)}</AvatarFallback>
              </Avatar>

              {/* Comment Body */}
              <div>
                <p className="text-sm font-medium text-zinc-300">{c.username}</p>
                <p className="text-sm text-zinc-400 leading-6">{c.text}</p>
                <div className="place-self-start ">
                    <div className="text-white text-xs rounded-full flex flex-row items-center gap-1 ">
                        <ArrowBigUp size={15} color="white" className="hover:bg-white/40 rounded-full cursor-pointer "/>
                        20
                        <ArrowBigDown size={15} color="white" className="hover:bg-white/40 rounded-full cursor-pointer" />
                    </div >
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>}
    </>
    
  );
}

export default CommentCard
