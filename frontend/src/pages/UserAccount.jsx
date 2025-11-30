import TopBar from "@/components/TopBar"
import SideBar from "@/components/SideBar"
import AccountDetails from "@/components/AccountDetails"



const UserAccount = () => {
  return ( 
    <div className='bg-neutral-900 h-full'>
       <TopBar/>
       <div className='flex flex-row'>
          <div className='border-r border-neutral-700 w-3/15'>
             <SideBar/>
          </div>
          <div className='w-12/15 px-4 py-2'>
               <AccountDetails />
          </div>
          

       </div>
    </div>
  )
}
export default UserAccount