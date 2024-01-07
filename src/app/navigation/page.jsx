"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Navigation = () => {
    const router = useRouter()
    const pathname = usePathname()
    const query = useSearchParams()

    console.log(query.get('q'))

    function handleClick(){
        console.log('clicked')
        router.push('/')
    }
    return(
        <div>
            <Link href='/' prefetch={false}>Click Me</Link>
            <button onClick={handleClick}>Write and redirect</button>
        </div>
    )
}

export default Navigation