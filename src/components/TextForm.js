import React,{useState} from 'react'
import PropTypes from 'prop-types'

function TextArea(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    // console.log("OnChange");
    setText(event.target.value);
  }
  const clearText = () =>{
    setText("");
  }
  const [text, setText] = useState("");
  return (
    <>
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3 ">
        <textarea className="form-control " value={text} onChange= {handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter text here"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase Letters</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase Letters</button>
      <button className='btn btn-success mx-2' onClick={clearText}>Clear</button>
    </div>
    <div className='contanier my-3'>
      <h3>Your text Summary</h3>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length.toFixed(0.1)} Minutes read</p>
      <h3>Preview</h3>
      <p className='text-secondary'>{text}</p>
    </div>
    </>
  )
}

TextArea.defaultProps = {
  heading: "Enter text to analyze"
}

export default TextArea
