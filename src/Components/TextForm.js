import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
   props.showAlert("Converted to upper case", "success")
  }

  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success")
  }

  const firstUpperClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText)
    props.showAlert("Converted to upper case", "success")
  }

  const clearText = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Converted to upper case", "success")
  }

  const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Converted to upper case", "success")
  }

  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Converted to upper case", "success")
  }

  const handleOnChnage = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('')
  return (
    <>
      <div className={`conatiner text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <div><h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control"
              style={{
                backgroundColor: props.mode === 'dark' ? 'rgb(41 56 131)' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
              }}
              value={text} onChange={handleOnChnage}  id="myBox" rows="15">
            </textarea>
            <button disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={handleUpperCaseClick}>convert to Uppercase</button>
            <button  disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={handleLowerCaseClick}>convert to Lowercase</button>
            <button  disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={firstUpperClick}>first letter to uppercase</button>
            <button  disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={clearText}>Clear Text</button>
            <button  disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={copyText}>Copy Text</button>
            <button  disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={removeSpaces}>Remove Extra spaces</button>
            {/* <button className='btn btn-primary my-3 mx-2' onClick={everyfirstletter}> every first letter to uppercase</button>  */}
          </div>
        </div>
        <div className='conatiner'>
          <h1>Number of words and charcter</h1>
         <p>{text.split(/\s/).filter((element)=>{ return element.length!==0}).length}words {text.length}character</p>
          <p>{0.08 * text.split(" ").filter((element)=>{ return element.length!==0}).length}</p>
          <h2>Preview</h2>

          <p>{text.length > 0 ? text : "Enter Your Preview Here"}</p>
        </div>
      </div>
    </>
  )
}
