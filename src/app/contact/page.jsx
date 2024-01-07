import Image from 'next/image'
import styles from './contact.module.css'

export default function Contact(){
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/contact.png' alt='' className={styles.img} fill />
            </div>
            <div className={styles.formContainer}>
                <form action='' className={styles.form}>
                    <input type='text' placeholder='Name and surname' required />
                    <input type='text' placeholder='Email Address' required />
                    <input type='text' placeholder='Phone Number (Optional)' />
                    <textarea 
                        name=''
                        id=''
                        cols='30'
                        rows='10'
                        placeholder='Message'
                    />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}