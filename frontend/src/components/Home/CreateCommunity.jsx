import { createModalAtom } from "@/store/atoms/Modal"
import { useRecoilState } from "recoil"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"


const CreateCommunity = () => {
  const [modal,setModal] = useRecoilState(createModalAtom)
  const [community,setCommunity] = useState({
    name : '',
    description : '',
    banner : null    
  })
  const authHeader = localStorage.getItem('authHeader')
  const handleCreate = async() =>{
      const form = new FormData()
      form.append("name",community.name)
      form.append("description",community.description)
      form.append("communityBanner",community.banner)
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/community/create`,form,{
            headers :{
              'Authorization' : authHeader,
              'Content-Type' : 'multipart/form-data'
            }
          })
      setModal(null)
  }
  return (
    <>
     {modal==="createCommunity" && (
          <Card className="bg-neutral-900 border-neutral-800 shadow-neutral-600 rounded-2xl w-full max-w-2xl">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-xl font-semibold text-gray-100">Create Community</CardTitle>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <Input value={community.name} onChange={(e)=>setCommunity({...community,name : e.target.value})} className="bg-neutral-800 border-gray-700 text-white placeholder-gray-500" placeholder="Enter Community Name.."/>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Description</label>
                <Textarea value={community.description} onChange={(e)=>setCommunity({...community,description : e.target.value})}className="bg-neutral-800 border-gray-700 text-white placeholder-gray-500" rows={5} placeholder="Description of community.."/>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Attach Images</label>
                <Input  onChange={(e)=>setCommunity({...community,banner : e.target.files[0]})} type="file" className="file:text-white bg-neutral-800 border-gray-700 text-neutral-500 placeholder-gray-500"/>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleCreate} className="bg-sky-700 hover:bg-sky-600 text-white px-6 py-2 rounded-xl transition cursor-pointer"> Create</Button>
              </div>
            </CardContent>
          </Card>
     )}
    </>
    
  )
}

export default CreateCommunity