export  default function ({labelText, labelCode, onUserInput}){
    return(
        <label>{labelText}<input onChange={(e)=>onUserInput(labelCode, e.target.value)}  /> </label>
    )
}