"use client"

import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PostCard({ post }){
    const router = useRouter()
    function handleClick(){
        router.push(`/blog/post?id=${post.id}`)
    }
    return(
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>{post.body}</p>
                <Link className={styles.link} href={`/blog/post?id=${post.id}`}>READ MORE</Link>
            </div>
        </div>
    )
}