import React,{ useState} from 'react'

export default function TextArea(props) {
    const [text,setText]=useState("")



    const toUppercase=()=>{
        let ucTxt=text.toUpperCase()
        setText(ucTxt)
        props.showAlert("converted to upper case","success")
    }
    const toLowercase=()=>{
        let lcTxt=text.toLowerCase()
        setText(lcTxt)
        props.showAlert("converted to lower case","success")
    }
    const handleOnchange=(e)=>{
        setText(e.target.value)

    }
    const toClear=()=>{
        let clrtxt=""
        setText(clrtxt)
        props.showAlert("Text cleared","success")
    }
    const speakText=()=>{
        const message = new SpeechSynthesisUtterance();
        message.text=text;
        window.speechSynthesis.speak(message);
    }
    const stopSpeakText=()=>{
        window.speechSynthesis.cancel();
    }

    const removeSpace=()=>{
        let extxt=text.replace(/\s+/g, ' ').trim();
        setText(extxt)
        props.showAlert("Extra Spaces removed","success")

    }
  
  return (
    <div className='container' style={props.mode}>   
        <div className="mb-3">
        <h2 className='my-2'>Enter Your Text Here</h2>
        <textarea className="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
        </div>
        <button type="button" onClick={toUppercase} className="btn btn-secondary mx-1 my-1">To UpperCase</button>
        <button type="button" onClick={toLowercase} className="btn btn-secondary mx-1 my-1">To LowerCase</button>
        <button type="button" onClick={removeSpace} className="btn btn-secondary mx-1 my-1">Remove Extra Space</button>
        <button type="button" onClick={toClear} className="btn btn-secondary mx-1 my-1">Clear Text</button>
        <button type="button" onClick={speakText} className="btn btn-secondary mx-1 my-1">Speak Text</button>
        
        <button type="button" onClick={stopSpeakText} className="btn btn-secondary mx-1 my-1">Stop Speak</button>
       


        <h3 className='my-2'>Text Analyzer</h3>
        <p>Your text contains {!text?'0':text.trim().split(/\s+/g).length} words and has {text.replace(/\s+/g,"").trim().length} characters</p>
        <h3 className='my-2'>Text preview</h3>
        <p>{!text?'Enter the text for Preview':text}</p>

    </div>
  )
}



