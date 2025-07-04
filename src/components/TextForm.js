import React, {useState} from 'react'

export default function TextForm(props) {
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const [text, setText] = useState ("Enter Text Here")
  const handleUpperClick = ()=>{
    console.log("Uppercase Button Was Triggered")
    const newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick = ()=>{
    console.log("Lowercase Button Was Triggered")
    const newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
  setText(event.target.value);
  console.log("Changes made In Text")
  }
  const handleClear = ()=>{
    console.log("Clear Text Button Was Triggered")
    setText("");
  }
  const handleTrim = ()=>{
    console.log("Trim Button Was Triggered")
    const newText = text.trim();
    setText(newText);
  }
  const handleFindReplace = () => {
  console.log("Find and Replace Triggered");
  const newText = text.replaceAll(findWord, replaceWord);
  setText(newText);
};

const handleCopy = () => { 
var text = document.getElementById("mybox");
text.select();
navigator.clipboard.writeText(text.value);
}

const handleExtraSpaces = () => {
let newText = text.split(/[ ]+/);
setText (newText.join(" "))
}

  return (
  <>
    <div className='Container'>
        <h1> {props.heading}</h1>
        <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text}></textarea>
        <button className="Clear mx-1" onClick={handleClear}>Clear Text</button>
        <button className="Copy Text" onClick={handleCopy}>Copy Text</button>
        <button className="UpperCase Button mx-1" onClick={handleUpperClick}>Convert To Uppercase</button>
        <button className="LowerCase Button mx-1" onClick={handleLowerClick}>Convert To Lowercase</button>
        <button className="RmvSpace mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="Trim mx-1" onClick={handleTrim}>Trim</button>
    </div>
    <div className="my-3">
  <input
    type="text"
    placeholder="Find"
    className="form-control my-1"
    value={findWord}
    onChange={(e) => setFindWord(e.target.value)}
  />
  <input
    type="text"
    placeholder="Replace with"
    className="form-control my-1"
    value={replaceWord}
    onChange={(e) => setReplaceWord(e.target.value)}
  />
  <button className="btn btn-success mx-1" onClick={handleFindReplace}> Find & Replace</button>
</div>

      <div className='Container my-3'>
        <h4>Your Text Summary</h4>
        <p>You have - {text.split(" ").length} words & {text.length} Characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}