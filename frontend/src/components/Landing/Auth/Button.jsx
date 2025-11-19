
const Button = ({buttonlabel,onClick}) => {
  return (
    <div className="pt-4">
        <button type="button" onClick={onClick} className="w-full text-white bg-sky-700 hover:bg-sky-600  font-medium rounded-lg text-md px-5 py-2 my-2 cursor-pointer">
            {buttonlabel}
        </button> 
    </div>
  )
}

export default Button