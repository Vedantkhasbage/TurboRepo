"use client"
import {Input} from '@repo/ui/input'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router=useRouter();
  return (

 <div style={{ height:"100vh",width:"100vw", backgroundColor:"green",display:"flex",justifyContent:"center",
  alignItems:"center"
 }}>

    <Input placeholder='Room No'/>
    <button onClick={()=>router.push("/chat/1234")}>Join Room</button>
    
 </div>
  );
}


