import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import React, { useState } from 'react'
import InputField from './inputField'

export default function ParentCom() {
 const[inputProps,setInputProps]=useState({
    inputType:"text",
    inputTitle:"text",
    required:"enter name",
    labelStyle:{},
    inputStyle:{},
    errorMessage:"field",
    error:false,
    maxLength:10,
    minLength:5,
    value:"",
    scenarios:"",
    holder:"enter name"


 })
 const handleInputChange=(e)=>
    {
        setInputProps({inputProps,value:e.target.value})
    }
    const handlePropsChange=(e)=>
        {
            const {name,value}=e.target
             setInputProps({...inputProps,[name]:value})
        }


  return (
    <div >
        <div>
            <p>parent Componet Input Form</p>
        </div>
        <label>Scenarios
            <select name="Scenarios" value={inputProps.scenarios} onChange={handleInputChange}>
                <option value="create">create</option>
                <option value="edit">edit</option>
                <option value="disable">disable</option>

            </select>
        </label>
        <label>
            Input Type
            <select name="inputType" value={inputProps.inputType} onChange={handlePropsChange} >
                <option value="text">text</option>
                <option value="number">number</option>
                <option value="select">select</option>
                <option value="radio">radio</option>
                <option value="checkbox">checkbox</option>
                <option value="password">password</option>
                <option value="currency">currency</option>

            </select>
        </label>
        <label>
            Title:
       <input  type='text' name="inputTitle"  value={inputProps.inputTitle} onChange={handlePropsChange}/>
        </label>
        <label>
        Placeholder:
       <input  type='text' name="holder"  value={inputProps.holder} onChange={handlePropsChange}/>
        </label>
        {/* <label>
        disabled:
       <input  type='text' name="disable"/>
        </label> */}
        <label>
        max Length:
       <input  type='text'  name="maxLength"  value={inputProps.maxLength} onChange={handlePropsChange}/>
        </label>
        <label>
        min Length:
       <input  type='text' name="minLength"   value={inputProps.minLength} onChange={handlePropsChange}/>
        </label>

        <hr/>
        <div>
            <h3>Requerd input field</h3>
            <InputField  {...inputProps}  onChange={handleInputChange}/>
        </div>

        
    </div>
  )
}
