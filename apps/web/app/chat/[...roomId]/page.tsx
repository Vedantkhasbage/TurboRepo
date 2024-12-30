export default function Chat(){

    return (

        <div style={{ height:"100vh",width:"100vw", backgroundColor:"green"}}>
       
            <div style={{height:"100vh",width:"100vw",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                
                <div style={{height:"80vh",width:"50vw",backgroundColor:"green",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                 
                <div>
                <input style={{width:"45vw",height:"5vh"}} type="text" placeholder="Enter your message" />
                 <button style={{height:"5vh",width:"4.5vw",borderRadius:"10px"}}>Send</button>
                </div>
       
                </div>
            </div>
        </div>
         );
}