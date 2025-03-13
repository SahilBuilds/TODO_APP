import { deleteDoc, doc } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../firebase/firsebse";
import Addandupdate from "./Addandupdate";
import { useState } from "react";
import useDisclose from "./hooks/useDisclose";
import { toast } from "react-toastify";

function Content({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact deleted sucess")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div
          key={contact.id}
          className=" bg-yellow-200 flex justify-between items-center p-2 rounded-lg"
        >
          <div className="flex gap-1">
            <CgProfile className="text-orange text-3xl" />
            <div className="">
              <h2 className="font-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
          </div>
          <div className="flex text-2xl">
            <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
            <FaTrash
              onClick={() => deleteContact(contact.id)}
              className="text-orange cursor-pointer"
            />
          </div>
        </div>
      </div>

      <Addandupdate
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default Content;
