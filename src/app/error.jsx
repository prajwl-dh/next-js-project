"use client"

import { useRouter } from "next/navigation"

export default function Error(e){
    const router = useRouter()
    const handleClick = () => {
        router.back()
    }
    return(
        <div>
            {e.error.message}<br />
            <p style={{textDecoration: 'underline', cursor:'pointer'}} onClick={handleClick}> Go back to previous page....</p>
        </div>
    )
}