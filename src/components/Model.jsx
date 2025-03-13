import { createPortal } from "react-dom";
import { TbXboxXFilled } from "react-icons/tb";

function Model({onClose,isOpen,children}) {
  return createPortal (
   <>
   {isOpen && ( 
    <div  className=" grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40">
    <div className="m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4 rounded-lg shadow-lg">
    <div className="flex justify-end">
    <TbXboxXFilled onClick={onClose} className="self-end  text-2xl"/>

    </div>
    {children}
   </div>
    </div>
   ) }
   </>
   ,document.getElementById("model-root")
  )
}

export default Model;