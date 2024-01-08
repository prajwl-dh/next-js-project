"use client"

import { register } from '@/lib/action'
import styles from './registerForm.module.css'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterForm(){
    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])
    return(
        <div>
            <form action={formAction} className={styles.form}>
                <input type="text" placeholder="username" name="username" />
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <input type="password" placeholder="confirm password" name="passwordRepeat" />
                <button>Register</button>
                {state?.error}
                <Link href='/login'>Have an account? <b>Login</b></Link>
            </form>
        </div>
    )
}