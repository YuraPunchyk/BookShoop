import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../firebase'


const SORT_OPTION={
    'AUTHOR_ASC':{column:'author',direction:'asc'},
    'AUTHOR_DESC':{column:'author',direction:'desc'},
    
    'NAME_ASC':{column:'name',direction:'asc'},
    'NAME_DESC':{column:'name',direction:'desc'},
    
    'PRICE_ASC':{column:'price',direction:'desc'},
    'PRICE_DESC':{column:'price',direction:'asc'}
    
}

function useBooks(sortBy='NAME_ASC'){
    const[books,setBooks]=useState([])
    useEffect(()=>{
      const unsubscribe = firebase
         .firestore()
         .collection('books')
         .orderBy(SORT_OPTION[sortBy].column , SORT_OPTION[sortBy].direction)
         .onSnapshot((snap)=>{
             const newBooks= snap.docs.map((doc)=>({
                 id:doc.id,
                 ...doc.data()
             }))
             setBooks(newBooks)
         })
         return () => unsubscribe()
    },[sortBy])
    return books
}



const BookList=()=>{
    const [sortBy,setSortBy]=useState('NAME_ASC')
    const bookList=useBooks(sortBy)
    function onDelete(e){
        e.preventDefault()
        firebase
        .firestore()
        .collection('books')
        .doc(e.currentTarget.value)
        .delete()
    }

    function onChange(e){
       
        firebase
        .firestore()
        .collection('data')
        .doc('mqTI7VEo3F0PYIK9gaGe')
        .update({
            id:e.currentTarget.value
        })
        
    }
    return (
        <div>
        <h1> Books </h1> 
          <div>
             <label class="form-check-label" for="autoSizingCheck"><p>Sort by</p></label>{' '}
             <select  value={sortBy} onChange={e=>setSortBy(e.currentTarget.value)}>
                 <option value="AUTHOR_ASC">Author [a-z]</option>
                 <option value="AUTHOR_DESC">Author [z-a]</option>
                 <option disabled>---</option>
                 <option value="NAME_ASC">Name [a-z]</option>
                 <option value="NAME_DESC">Name [a-z]</option>
                 <option disabled>---</option>
                 <option value="PRICE_ASC">Price up</option>
                 <option VALUE="PRICE_DESC">Price down</option>
             </select>
          </div>
          <table border='1' class="table table-striped table-dark">
              <tr><th scope='col'>Name</th><th scope='col'>Author</th><th scope='col'>Price</th><th scope='col'>Page</th><th scope='col'>Type</th><th></th></tr>
              {bookList.map((book)=>
                <tr><th scope='row'>{book.name}</th>
                <td>{book.author}</td>
                <td>{book.price}$</td>
                <td>{book.page}</td>
                <td>{book.type}</td>
                <td><button class="btn btn-danger" value={book.id} onClick={onDelete}>Delete</button>
                <Link to='/change'><button class="btn btn-success" value={book.id} onClick={onChange}>Change</button></Link></td></tr>
                )}
              </table> 
        </div>
    )
}

export default BookList