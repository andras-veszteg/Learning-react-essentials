export  default function ({labelText, labelCode, onUserInput}){
    return(
        <p>
            <label>{labelText}</label>
            <input type="number" required onChange={(e)=>onUserInput(labelCode, e.target.value)}  />
        </p>
    )
}