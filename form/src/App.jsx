import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  const [firstName,setFirstName]=useState("")
  //  const [lastName,setLastName]=useState("")
  // function changefirstHandler(event){
  // setFirstName(event.target.value)
  //   console.log(event.target.value)
  // }
  // function changelastHandler(event){
  // setLastName(event.target.value)
  //   console.log(event.target.value)
  // }
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: " ", isVisible: true });
  console.log(formData)
  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  return (
    <>
      <form action="">
        <input type="text" placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName} />

        <br />
        <br />
        <input type="text" placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName} />
        <br />
        <br />
        <input type="email" placeholder='email'
          onChange={changeHandler}
          name='email'
          value={formData.email} />
        <br />
        <br />
        <textarea name="comments" id="" cols="30" rows="10" placeholder='Enter your comment' onChange={changeHandler}
          value={formData.comments}></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible??</label>
      </form>
    </>
  )
}

export default App
