'use client'

import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'
import DeleteItem from './DeleteItem'
import db from '@/lib/firebase/cloudFirestore'

const ListItems = () => {
   const [items, setItems] = useState([])
   /*
   useEffect(() => {
      const fetchItems = async () => {
         const querySnapshot = await getDocs(collection(db, 'items'))
         setItems(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
         )
      }

      fetchItems()
   }, [])
*/
   const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      console.log('querySnapshot', querySnapshot)
      setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
   }
   return (
      <div className="border w-96 text-center p-4">
         <h2>Test de carga de usuarios</h2>
         <button
            onClick={fetchItems}
            className="bg-green-400 p-1 rounded text-white"
         >
            Mostrar usuarios
         </button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>
                  <p>Id de cliente: {item.id}</p>
                  <p>Nombre de cliente: {item.name}</p>
                  <p>Télefono de cliente: {item.phone}</p>

                  {/* <DeleteItem id={item.id} />*/}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ListItems
//https://stackoverflow.com/questions/66472419/nextjs-on-firebase-hosting-returns-404-on-page-refresh
//https://stackoverflow.com/questions/66423932/next-js-firebase-hosting-404-error-on-all-except-index-html
