import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firsebse";
import { ToastContainer, toast } from 'react-toastify';
import Content from "./components/Content";
import Addandupdate from "./components/Addandupdate";
import useDisclose from "./components/hooks/useDisclose";
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
  const [contact, setContact] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclose();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactsRef = collection(db, "contact");
    
        onSnapshot(contactsRef,(snapshot) => {
          const contactlist = snapshot.docs.map((doc) => {
            return {       
              id: doc.id,
              ...doc.data(),
            };
          });

          setContact(contactlist);
          return contactlist
        })
      
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value

    const contactsRef = collection(db, "contact");
    
        onSnapshot(contactsRef,(snapshot) => {
          const contactlist = snapshot.docs.map((doc) => {
            return {       
              id: doc.id,
              ...doc.data(),
            };
          });


         const FilteredContacts = contactlist.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

          setContact(FilteredContacts);
          return FilteredContacts
        })
   }
  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-3">
        <div className="flex relative items-center flex-grow">
          <IoSearchCircleSharp className="text-white ml-1 text-3xl absolute" />
          <input
            onChange={filterContacts}
            type="text"
            className="flex-grow bg-transparent border rounded-md h-10 border-white text-white pl-9"
          />
        </div>
        <FaPlusCircle onClick={onOpen} className="text-white text-4xl cursor-pointer" />
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        { contact.length <= 0 ? <NotFoundContact/> : contact.map((contact) => (
         <Content key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <Addandupdate onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position="bottom-center"/>
    </>
  );
};

export default App;
