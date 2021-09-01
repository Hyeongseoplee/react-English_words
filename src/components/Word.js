import { useState } from "react"

export default function Word({word}) {
    const [ isShown, setShown] = useState(false);
    const [ isDone, setDone ] = useState(word.isdone);

    function toggleShown() {
        setShown(!isShown);
    }

    function toggleDim() {
        setDone(!isDone)
    }
    return (
        <tr className={isDone === true ? "off" : ""}>
            <td>
                <input type="checkbox" onClick={ toggleDim }></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShown === true ? word.kor : ""}</td>
            <td>
                <button onClick={ toggleShown }>Show</button>
                <button className="btn_del">Delete</button>
            </td>
        </tr>
    )
}