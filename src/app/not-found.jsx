import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href='/' style={{textDecoration: 'underline'}}>Return home...</Link>
        </div>
    )
}