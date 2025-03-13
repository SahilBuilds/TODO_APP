import { ErrorMessage, Field, Form, Formik } from "formik";
import Model from "./Model";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firsebse";

import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup" 



const contactScemaVali = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("invalid email ").required("Email is required")
})
function Addandupdate({ isOpen, onClose, isUpdate, contact }) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();

      toast.success("Contact Add successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik validationSchema={contactScemaVali}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(value) => {
            console.log(value);
            isUpdate ? updateContact(value, contact.id) : addContact(value);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border border-black" />
              <div className="text-red-800 font-bold text-xs">
                <ErrorMessage name="name"/>

              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="h-10 border border-black"
              />
               <div className="text-red-800 font-bold text-xs">
                <ErrorMessage name="email"/>

              </div>
            </div>
            <button className="bg-orange px-3 py-1.5 border-black border self-end">
              {" "}
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default Addandupdate;
