import React, {useState} from 'react'

export default function TextForm(props) {
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const [text, setText] = useState ("")
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
    <div className='Container' style={{color: props.mode === 'dark'?'white': 'black'}}>
        <h2> {props.heading}</h2>
        <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text} style={{color: props.mode === 'dark'?'white': 'black', backgroundColor: props.mode === 'dark'?'#0c213c': 'white'}}></textarea>
        <button className="btn btn mx-1" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}} onClick={handleCopy}>Copy Text</button>
        <button className="btn mx-1 my-2" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}} onClick={handleClear}>Clear Text</button>
        <button className="btn btn mx-1" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}}onClick={handleUpperClick}>Convert To Uppercase</button>
        <button className="btn btn mx-1" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}} onClick={handleLowerClick}>Convert To Lowercase</button>
        <button className="btn btn mx-1" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn mx-1" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}} onClick={handleTrim}>Trim</button>
    </div>
    <div className="my-3">
  <input type="text" style={{color: props.mode === 'dark'?'white': 'black', backgroundColor: props.mode === 'dark'?'#0c213c': 'white'}} placeholder="Find" className="form-control my-1" value={findWord} onChange={(e) => setFindWord(e.target.value)}/>
  <input type="text" style={{color: props.mode === 'dark'?'white': 'black', backgroundColor: props.mode === 'dark'?'#0c213c': 'white'}} placeholder="Replace with" className="form-control my-1" value={replaceWord} onChange={(e) => setReplaceWord(e.target.value)} />
  <button className="btn btn-info" style={{color: props.mode === 'dark'?'white': 'white', backgroundColor: props.mode === 'dark'?'#35CFE0': '#188FA1'}} onClick={handleFindReplace}> Find & Replace</button>
</div>
      <div className='Container my-3' style={{color: props.mode === 'dark'?'white': 'black'}}>
        <h4>Your Text Summary</h4>
        <p>You have - {text.split(" ").length} words & {text.length} Characters.</p>
        <h2>Preview</h2>
        {text === "" || text === " " ?( <p>Enter Something to preview Here</p>):(<p>{text}</p>)}
      </div>
    </>
  )
}