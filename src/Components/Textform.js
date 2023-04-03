import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
console.log("The Uppercase button was clicked" + text);
let newtext = text.toUpperCase();
setText(newtext);
props.showAlert("Converted to Uppercase!","Success")
  }

    const handleLoClick = ()=>{
      console.log("The Lowercase button was clicked" + text);
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to Lowercase","Success")
          }

          const handleCopy = ()=>{
            console.log("copy button clicked");
            navigator.clipboard.writeText(text)
      props.showAlert("Copied to clipboard","Success")
                }

          const clear = ()=>{
            console.log("The clear button was clicked" + text);
            let newtext = "";
            setText(newtext)
            props.showAlert("Cleard text","Success")
                }
          
                const ExtraSpaces = ()=>{
         let newtext = text.split(/[ ]+/);
         setText(newtext.join(" "));
         props.showAlert("Extra spaces removed","Success")
                }

    const handleOnChange = (event)=>{
        console.log("OnChange")
        setText(event.target.value)
            }

const [text, setText] = useState("")
  return (
    <>
    <div style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    <div>
<div className="first mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange}id="mybox" rows="8"></textarea>
</div>

<button  disabled = {text.length ===0}className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button  disabled = {text.length ===0}className="btn btn-info mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button  disabled = {text.length ===0}className="btn btn-secondary mx-2" onClick={clear}>Clear text</button>
<button disabled = {text.length ===0} className="btn btn-success my-2" id='myBox' onClick={handleCopy}>Copy text</button>
<button disabled = {text.length ===0} className="btn btn-warning mx-2 my-2" id='Box' onClick={ExtraSpaces}> Remove Extra spaces</button>n>

    </div>

    <div className="container my-3">
    <h1>Your text summery</h1>
    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters </p>
    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length * 0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length> 0 ? text :'Nothing to preview'}</p>
    </div>
    </div>
    </>
  )
}
