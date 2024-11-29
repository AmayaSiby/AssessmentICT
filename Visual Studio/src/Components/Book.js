import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Book.css'
function Book() {
    const [books, setBooks] = useState([]);
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    useEffect(() => {
      axios.get("http://localhost:8080/api/book").then((res) => {
     console.log(res.data);
        setBooks(res.data);
        
      });
    }, []);
    function addData() {
      const BookData = {
        name:name,
        number:number,
        email:email,
        address:address,
      };
  
      axios
        .post("http://localhost:8080/api/book", BookData)
        .then((res) => {
          setBooks([...books, res.data]);
          setName("");
          setNumber("");
          setEmail("");
          setAddress("");
        });
    }
    return (
      <div>
        <h1>Details</h1><div className='book'> 
        <input type="text" placeholder="Enter your Name" value={name}  onChange={(e) => setName(e.target.value)}
        /><br/>
        <input type="text" placeholder="Enter your Number" value={number} onChange={(e) => setNumber(e.target.value)}/><br/>
        <input type="email" placeholder="Enter your MailId" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type="text" placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
        <button onClick={addData}>Add</button>
        </div>
       <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
          {books.map((book) => (
            <tr key={book.id}>
             <td> {book.id}</td>
             <td>{book.name}</td>
             <td>{book.number}</td>
             <td>{book.email}</td>
             <td>{book.address}</td>
            </tr>
          ))}
          </tbody>
       </table>
      </div>
    );
}

export default Book;