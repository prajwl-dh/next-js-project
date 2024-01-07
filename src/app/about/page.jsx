import Image from "next/image";
import styles from './about.module.css'

export default function About(){
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>About Agency</h2>
                <h1> We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p>We create digital ideas that are bigger, bolder, braver and better.
                We create digital ideas that are bigger, bolder, braver and better.
                We create digital ideas that are bigger, bolder, braver and better.
                We create digital ideas that are bigger, bolder, braver and better.
                We create digital ideas that are bigger, bolder, braver and better.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image 
                    src='/about.png'
                    alt=''
                    fill
                />
            </div>
        </div>
    )
}