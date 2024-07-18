import Link from "next/link"

const Header =()=>{
    return(
        
        <div className="flex justify-center items-center gap-10 text-black font-semibold ">
            <Link href="/" >Home</Link>
            <Link href="/about" className="hover:underline scale-100  hover:scale-150 ease-out duration-500 " >About</Link>
            <Link href="/projects" className="hover:underline scale-100  hover:scale-150 ease-out duration-500 " >Projects</Link>
            <Link href="/about/#experience" className="hover:underline scale-100  hover:scale-150 ease-out duration-500 " >Experience</Link>
            <Link href="/contactme" className="hover:underline scale-100  hover:scale-150 ease-out duration-500 " >Contact Me</Link>
        </div>
       
    )
}
export default Header