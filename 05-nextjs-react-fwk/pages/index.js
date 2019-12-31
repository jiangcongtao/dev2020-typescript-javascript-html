import React, { useState } from "react";

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([""]);
    
    return <div>
    <input onChange={e=> {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value]);
    }}
    placeholder="Enter Some Text" />;
    <br/>
    {inputText}
    <hr/>
    <ul>
        {historyList.map(v=> {
            return <div>{v}</div>
        })
        }
    </ul>
    
    </div>
}

export default InputElement;
