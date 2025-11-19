import { Link } from "react-router-dom"

function  WarningFooter({label,buttonText,onClick}) {
     return <div className="text-white py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <button className="text-white pointer underline pl-1 cursor-pointer" onClick={onClick}>
        {buttonText}
      </button>
    </div>  
}

export default WarningFooter