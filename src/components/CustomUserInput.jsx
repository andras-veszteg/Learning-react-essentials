export  default function ({labelText, labelCode, onUserInput}){
    return(
        <p>
            <label>{labelText}</label>
            <input onChange={(e)=>onUserInput(labelCode, e.target.value)}  />
        </p>
    )
}