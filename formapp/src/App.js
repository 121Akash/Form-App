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


const [formData , setFormData] =useState( {firstName :"" , lastName:"" , email:""} );



function changeHandler(event){
  setFormData(prevFormData =>{
    return{
      ...prevFormData,
     [ event.target.name ]: event.target.value
    }
  });
  

}




  return (
   
    <div>
      <form>
        <input type="text" placeholder="first name" 
          onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
         


          <br/>
          <br/>


        <input type="text" placeholder="last name" 
          onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />


            <br/>
            <br/>



        <input type="email" placeholder="enter your email here " 
          onChange={changeHandler}
            name="email"
            value={formData.email}
          />
         
      </form>
    </div>
  );
}

export default App;
