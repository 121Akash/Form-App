import { useState } from "react"


function App() {
//   const [firstName , setFirstName] =useState("");
//   const [lastName , setLastName] = useState("");




//   function changeFirstNameHandler(event){
//     // console.log("first name")
//     // console.log(event.target.value)

//     setFirstName(event.target.value);

//   }

//   function changeLastNameHandler(event){
//     // console.log("last name")
//     // console.log(event.target.value)
//     setLastName(event.target.value);

//   }


const [formData , setFormData] =useState( {firstName :"" , favCar:"",  mode:"" , lastName:"" 
  , email:"" , comments : "" , isVisible: true} );

  // console.log(formData)




function changeHandler(event){
   const {name ,value ,checked ,type} =event.target
  setFormData(prevFormData =>{
    return{
      ...prevFormData,
     [ name ]: type==="checkbox" ? checked: value
    }
  });
  
}

function submitHandler(event){
  event.preventDefault();
  //send

  console.log("finallu submitted")
  console.log(formData)

}




  return (
   
    <div>
      <form  onSubmit={submitHandler}>

      <br/>
      <br/>



        <input type="text" 
            placeholder="first name" 
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
         


          <br/>
          <br/>


        <input type="text"
            placeholder="last name" 
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />


            <br/>
            <br/>



        <input type="email"
            placeholder="enter your email here " 
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />


          <br/>
          <br/>



          <textarea
            placeholder="enter your comments"
            onChange={changeHandler}
            name="comments"
            value={formData.comment}
          />

           <br/>
          <br/>

          <input
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="isVisible"
            checked ={formData.isVisible}
          />
          <label htmlFor="isVisible">am is visible ?</label> 


          <br/>
          <br/>
          <fieldset>
            <legend>

            <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-mode"
            id="Online-mode"
            checked={formData.mode=="Online-mode"}
          />

          

          <label htmlFor="Online-mode">Online mode</label>

          <br/>
          <br/>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-mode"
            id="Offline-mode"
            checked={formData.mode=="Offline-mode"}
          />

          

          <label htmlFor="Offline-mode">Offline mode</label>

            </legend>
          </fieldset>

         

          <br/>
          <br/>
          <label htmlFor="favCar">tell me your fav car</label>

         <select   
          onChange ={changeHandler}
          name="favcar"
          itemRef="favCar"
          value={formData.favCar}
          >

            <option value="scoripo">scoripo</option>
            <option value="fortuner">fortuner</option>
            <option value="range-rover">range-rover</option>
            <option value="swift">swift</option>
          </select>


{/* 
       <input type="submit" 
        value="submit"
       /> */}


       <br/>
       <br/>


       <button>Submit</button>

          

          
         
      </form>
    </div>
  );
}

export default App;
