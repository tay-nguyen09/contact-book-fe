import React from "react";
import { ContactType } from "../model";
import { ListGroup } from "react-bootstrap";
import { deleteContact, updateConact } from "../api/usersContact";
type Props = {
  contact: ContactType
}
function Contact(props: Props) {
  const actions = ['change', 'delete',]
  const { contact } = props
  const { _id } = contact
  const [name, setName] = React.useState(contact.name)
  const [email, setEmail] = React.useState(contact.email)
  const [phone_number, setPhone_number] = React.useState(contact.phone_number)
  const [action, setAction] = React.useState("add")

  const [isEdit, setIsEdit] = React.useState(false)
  const handleSubmit = (event: any) => {
    switch (action) {
      case actions[0]:
        event.preventDefault();
        updateConact({
          ...contact,
          name,
          phone_number,
          email
        }).then(() => {
          setIsEdit(!isEdit)
        });
        break;
      case actions[1]:
        deleteContact({
          ...contact,
          name,
          phone_number,
          email
        }).then(() => {
          setIsEdit(!isEdit)
        })
        break;
      default:
        break;
    }

  }
  return (
    <div className="border border-solid border-white h-fit p-5 m-2">
      <form onSubmit={handleSubmit} className={`${!isEdit ? "disable_editing" : ""} h-fit`} >
        <input type="text" defaultValue={_id} hidden />
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" onChange={(e) => setPhone_number(e.target.value)} defaultValue={phone_number} name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="email" onChange={(e) => setEmail(e.target.value)} defaultValue={email} name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>
        <div className="flex">
          <span onClick={() => setIsEdit(!isEdit)} className="mr-2 text-white apitalize bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {isEdit ? "cancel" : "edit"}
          </span>
          {
            isEdit &&
            <>
              <button type="submit" onClick={() => setAction(actions[0])} className="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
              <button type="submit" onClick={() => setAction(actions[1])} className="mr-2 text-white bg-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-800 dark:hover:bg-red-800 dark:focus:ring-red-800">
                Delete
              </button>
            </>
          }
        </div>
      </form >
    </div>
  );
}

export default Contact;
