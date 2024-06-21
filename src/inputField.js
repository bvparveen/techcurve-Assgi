import React from 'react'

 const InputField =({
    inputType,
    inputTitle,
    required,
    labelStyle,
    inputStyle,
    errorMessage,
    error,
    maxLength,
    minLength,
    value,
    scenarios,
    holder,
    options

 })=>{
    const handleChange=(e)=>{
    // if()
    //     {
    //         (e)  
    //     }
    //     else if(onchange)
    //         {
    //             onchange(e)
    //         }
    }

    const renderInput=()=>
        {
            switch (inputType) {
                case 'select':
                    return (
                       <select
                       value={value}
                       onChange={handleChange}
                       style={inputStyle}
                       required={required}
                       >
                       {options.map((option,index)=>
                            {
                                return(
                                    <option key={index} value={option.value}>
                                    {option.title}

                                    </option>

                                )
                            }
                          
                        )
                       }
                       </select>
                      )
                case 'currency':
                    return(
                        <input
                        type='text'
                        value={value}
                        onChange={handleChange}
                        placeholder={holder}
                        style={inputStyle}
                        maxLength={maxLength}
                        minLength={minLength}
                        required={required}
                        />
                    )
                    default:(
                        <input
                        type={inputType}
                        value={value}
                        onChange={handleChange}
                        placeholder={holder}
                        style={inputStyle}
                        maxLength={maxLength}
                        minLength={minLength}
                        required={required}
                        />

                    )

                   
            }
        }
        return(
            <div>
                <label style={labelStyle}>{inputTitle}</label>
                {renderInput()}
                {error && <span style={{color:"red"}}>{errorMessage}</span>}
            </div>
        )

 
}
export default InputField
