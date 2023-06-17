import React from 'react'
import { getUsersContactList } from '../api/usersContact'
import Contact from './Contact'
import AddNewContact from './AddNewContact'

function ContactsList() {
  const [contactsList, setContactsList] = React.useState([])
  React.useEffect(() => {
    getUsersContactList().then((resuft) => {
      setContactsList(resuft)
    })
  }, [])
  return (
    <div className='flex flex-wrap px-20 py-20 w-full min-h-[100vh] bg-gray-900'>
      <AddNewContact contactsList={contactsList} />
      {
        contactsList.length > 0 &&
        <>
          {
            contactsList.map((contact: any, index: number) => {
              return (
                <Contact
                  key={index}
                  contact={contact}
                />
              )
            })
          }
        </>
      }
    </div>
  )
}

export default ContactsList