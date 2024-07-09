import Link from "next/link"

const Header =()=>{
    return(
        
        <div className="flex justify-center items-center gap-10 text-black font-semibold ">
            <Link href="/" >Home</Link>
            <Link href="/about" className="hover:underline" >About</Link>
            <Link href="/projects" className="hover:underline" >Projects</Link>
            <Link href="/experience" className="hover:underline" >Experience</Link>
            <Link href="/contactMe" className="hover:underline" >Contact Me</Link>
        </div>
       
    )
}
export default Header