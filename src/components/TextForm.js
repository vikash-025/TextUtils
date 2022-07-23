import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    //  console.log("You have clicked the upperCase" + text);
     let newText = text.toUpperCase();
     setText( newText)
  }
  const handleLoClick =()=>{
    //  console.log("You have clicked the lowercase" + text);
     let newText = text.toLowerCase();
     setText( newText)
  }
  const handleNumber =()=>{
    //  console.log("You have clicked the lowercase" + text);
     let newText =text.match(/(\d+)/);
     setText( newText[0])
  }
  const handleOnChange =(event)=>{
    // console.log("Onchange");

    setText(event.target.value)
 }
 const handleCopy =()=>{
  // console.log("Onchange");
let text = document.getElementById('myBox');
text.select();
text.setSelectionRange(0,9999);
navigator.clipboard.writeText(text.value);
}
const handleSpace =()=>{
  // console.log("Onchange");
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
}
const handleClearText =()=>{
  // console.log("Onchange");
let newText = '';
setText(newText);
}


 const [text , setText] = useState('');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'? 'grey':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value = {text} onChange= {handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'? 'white':'white' ,
        color:props.mode==='dark'? 'black':'black'}}></textarea>
          <button className="btn btn-primary  my-3" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleNumber}>Show Numbers from text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy To Clipboard</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleSpace}>Remove Extra Spaces</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleClearText}>Clear Text</button>
        </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'? 'white':'black'}} >
      <h2>Your Text summary</h2>
      <p> {text.length>0 ? text.trim().split(" ").length : 0} Words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
