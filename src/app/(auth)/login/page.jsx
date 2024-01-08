import LoginForm from "@/components/loginForm/LoginForm"
import { handleGithubLogin } from "@/lib/action"
import styles from './login.module.css'

export default async function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login With GitHub</button>
                </form>
                <LoginForm />
            </div>
        </div>
    )
}