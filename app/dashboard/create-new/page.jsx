"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'

function CreateNew() {
  const [formData, setFormData]=useState([]);
  const onHandleInputChange=(value, fieldName)=>{
    setFormData (prev=> ({
      ...prev,
      [fieldName]:value
    }))
    console.log(formData)

  }

  const GenerateAiImage=async ()=>{
    const result = await axios.post('/api/redesign-room', formData);
    console.log(result.data);
  }

    const SaveRawImageToFirebase =()=>{
      const fileName=Date.now()+"_raw.png";
    }

  return (
    <div>
     <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
     <p className='text-center text-gray-500'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.</p>

     <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
        {/* {Image Selection section} */}

        <ImageSelection selectedImage={(value)=>onHandleInputChange(value, 'image')}/>
        {/* {Form input section} */}
        <div>
          {/* Room type */}
          <RoomType selectedRoomType={(value)=>onHandleInputChange(value, 'roomType')}/>
          {/* design type */}
          <DesignType selectedDesignType={(value)=>onHandleInputChange(value, 'designType')}/>
          {/* addition requiremnt textarea (optional) */}
          <AdditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value, 'additionalReq')}/>
          {/* button to generate image */}
          <Button className='w-full mt-5'onClick={GenerateAiImage} >Generate</Button>
          <p className='text-sm text-gray-400 mb-52'>NOTE: 1 Credit will be used to redesign your room</p>
        </div>
     </div>
    </div>
  )
}

export default CreateNew
