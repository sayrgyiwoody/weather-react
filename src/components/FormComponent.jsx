import React, { useState } from 'react'
import { Input,Button } from "@material-tailwind/react";

const FormComponent = ({fetchApi}) => {

    const [city,setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchApi(city);
    }
  return (
    <div>
        <form className="flex space-x-2" onSubmit={(e) =>handleSubmit(e)}>
            <Input onChange={ (e) => setCity(e.target.value)} className='' label="City Name" />
            <Button type='submit' className='w-full max-w-28 md:max-w-36'  variant="filled">Search</Button>
        </form>
      
    </div>
  )
}

export default FormComponent
