
import React,{Fragment,useContext,useState} from "react";
import './Create.css'
import Header from '../Header/Header'
import { AuthContext,FirebaseContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const {firebase} =useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,SetImage]=useState(null)
  const date=new Date()
  const handleSubmit=()=>{
  firebase.storage().ref(`image/${image.name}`).put(image).then(({ref})=>{
   ref.getDownloadURL().then((url)=>{
    console.log(url);
    firebase.firestore().collection('products').add({
      name,
      category,
      price,
      url,
      userId:user.uid,
      CreatedAt:date.toDateString()
    })
    navigate('/')
   })
  })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number" 
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             id="fname" 
             name="Price" />
            <br />
        
          <br />
          <img alt="Post" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
        
            <br />
            <input
            onChange={(e)=>SetImage(e.target.files[0])}
             type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;