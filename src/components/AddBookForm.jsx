import React,{useState} from 'react'
import firebase from '../firebase'



const AddBookForm=()=>{
   
    const [name,setName]=useState('')
    const [author,setAuthor]=useState('')
    const [price,setPrice]=useState('')
    const [page,setPage]=useState('')
    const [type,setType]=useState('')

    function onSubmit(e){
        e.preventDefault()
        
        firebase
            .firestore()
            .collection('books')
            .add({
                name: name,
                author: author,
                price: parseInt(price),
                page: parseInt(page),
                type:type
            })
            .then(()=>{
                setName('')
                setAuthor('')
                setPrice('')
                setPage('')
                setType('')


            })
        
    }

    return(
        <div class='form-style-8'>
        <h1>Add book</h1>
        <form  onSubmit={onSubmit}>
         <input type='text' value={name} onChange={e=>setName(e.currentTarget.value)} placeholder='Name' required/>  
         <input type='text' value={author} onChange={e=>setAuthor(e.currentTarget.value)} placeholder='Author' required/>  
         <input type='number' value={price} onChange={e=>setPrice(e.currentTarget.value)} placeholder='Price' required/>  
         <input type='number' value={page} onChange={e=>setPage(e.currentTarget.value)} placeholder='Page' required/>  
         <input type='text' value={type} onChange={e=>setType(e.currentTarget.value)} placeholder='Type' required/>  
         <button>Add book</button>
        </form>
        </div>
    )
}

export default AddBookForm