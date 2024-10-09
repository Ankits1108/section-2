import MyButton from '@/components/Button';
import TextInput from '@/components/Input';
import React from 'react'

const Home = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center" > Hello Ankit</h1>

      <button style={{ backgroundColor: 'black', color: 'white', padding: 10 }} >
        Home Button
      </button>
      <button className="submit-btn">home button</button>
      <img className="img" src="/img.jpg" alt="" />
      <MyButton>Submit</MyButton>
      <MyButton>My custom button</MyButton>
      <MyButton>signup button</MyButton>
      <TextInput type="password" label="Enter a Password" id="password" />
      <TextInput type="text" label="Full Name" id="name" />
      <TextInput type="email" label="email address" id="email" />



    </div>
  )
}

export default Home;