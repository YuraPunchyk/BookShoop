import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../firebase'


const ChangeBookForm=()=>{
    const [book,setBook]=useState([])
    firebase
    .firestore()
    .collection('data')
    .doc('mqTI7VEo3F0PYIK9gaGe').get().then(function(doc) {
        firebase
        .firestore()
        .collection('books')
        .doc(doc.data().id).get().then(function(doc) {
              setBook(doc.data())
        })
    })
    var [name,setName]=useState('')
    var [author,setAuthor]=useState('')
    var [price,setPrice]=useState('')
    var [page,setPage]=useState('')
    var [type,setType]=useState('')
    
    
    
    function onSubmit(e){       
        if(name==='')
        name=book.name 
        if(author==='')      
        author=book.author
        if(price==='')
        price=book.price
        if(page==='')
        page=book.page
        if(type==='')
        type=book.type

        firebase
        .firestore()
        .collection('data')
        .doc('mqTI7VEo3F0PYIK9gaGe').get().then(function(doc) {
            firebase
            .firestore()
            .collection('books')
            .doc(doc.data().id).update({
                'name':name,
                'author':author,
                'price':price,
                'page':page,
                'type':type
            })
            
        })

    }

    return(
        <div class='form-style-8'>
        <h1>Change book</h1>
        <form >
         <input type='text' value={name} onChange={e=>setName(e.currentTarget.value)} placeholder={book.name} required/>  
         <input type='text' value={author} onChange={e=>setAuthor(e.currentTarget.value)} placeholder={book.author} required/>  
         <input type='number' value={price} onChange={e=>setPrice(e.currentTarget.value)} placeholder={book.price} required/>  
         <input type='number' value={page} onChange={e=>setPage(e.currentTarget.value)} placeholder={book.page} required/>  
         <input type='text' value={type} onChange={e=>setType(e.currentTarget.value)} placeholder={book.type} required/>  
         <Link to='/books'><button onClick={onSubmit}>Save change book</button></Link>
        </form>
        </div>
    )
}

export default ChangeBookForm