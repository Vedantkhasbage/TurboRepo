
interface inputtypes{
    placeholder:string
}

export function Input({placeholder}:inputtypes){

    return <input type="text" style={{height:"5vh",width:"10vw"}} placeholder={placeholder}/>
}