import { userAtom } from "@/store/atoms/User"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"


const AccountDetails = () => {
  const userId = useRecoilValue(userAtom)
  const [user,setUser] = useState({})
  const [profile,setProfile] = useState({
    gender : null,
    avatar : null,
    userBanner : null
  })
  const authHeader = localStorage.getItem('authHeader')
  const getUser = async()=>{
       const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${userId}`,{
         headers :{
            'Authorization' : authHeader
         }  
       })
       setUser(response.data.user)
  }
  const handleUpdate = async()=>{
    const form = new FormData()
    form.append("gender",profile.gender)
    form.append("avatar",profile.avatar)
    form.append("userBanner",profile.userBanner)
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/profile`,form,{
        headers : {
            'Authorization' : authHeader,
            'Content-Type' : 'multipart/form-data'
        }
    })

  }
  const handleDelete = async()=>{
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/user/delete/own`,{
            headers : {
                'Authorization' : authHeader
            }
        })
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
     <div className="h-max w-full flex flex-col gap-5 p-5 pl-5">
            <div className="flex flex-col gap-6">
                <span className="text-2xl text-white font-semibold ">Profile</span>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-white/80">Email </span>
                    <span className="text-white/80">{user?.email}</span>
                </div>
                <div className="flex flex-row justify-between ">
                    <span className="place-self-center text-white/80 ">Gender : {user.profile?.gender && user.profile.gender}</span>
                    <div className="w-48">
                        <Select onValueChange={(value)=> setProfile({...profile,gender : value})}>
                            <SelectTrigger className="text-white bg-neutral-800 rounded-lg border border-gray-700 cursor-pointer w-full"> 
                                <SelectValue  placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="text-white bg-neutral-800 rounded-lg border border-gray-700 cursor-pointer" >
                            <SelectGroup>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="place-self-center text-white/80">Avatar</span>
                    <div className="w-48">
                        <Input  onChange={(e)=>setProfile({...profile,avatar:e.target.files[0]})}type="file" className="file:text-white bg-neutral-800 border-gray-700 text-neutral-500 placeholder-gray-500"/>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="place-self-center text-white/80">Banner</span>
                    <div className="w-48">
                        <Input  onChange={(e)=>setProfile({...profile,userBanner:e.target.files[0]})} type="file" className="file:text-white bg-neutral-800 border-gray-700 text-neutral-500 placeholder-gray-500"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <span className="place-self-center text-white/80">Update Profile</span>
                     <div onClick={handleUpdate} className="w-22 bg-sky-700 text-white text-center text-lg font-medium   gap-1 px-3 py-1 rounded-xl cursor-pointer hover:bg-sky-600">Update</div>
                </div>
               
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-2xl text-white font-semibold ">Delete Account</span>
                <div className="flex justify-between">
                    <span className="place-self-center text-white/80">Delete Account Permanently</span>
                    <div onClick={handleDelete} className="w-22 bg-red-900 text-white text-center text-lg font-medium   gap-1 px-3 py-1 rounded-xl cursor-pointer hover:bg-red-800">Delete</div>    
                </div>
                
            </div>
        </div>
  )
}


           


export default AccountDetails