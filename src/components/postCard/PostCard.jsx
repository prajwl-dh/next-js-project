"use client"

import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PostCard({ post }){
    const router = useRouter()
    function handleClick(){
        router.push(`/blog/post?id=${post.slug}`)
    }
    return(
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.top}>
                {post.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt='' fill className={styles.img} />
                </div>}
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>{post.desc}</p>
                <Link className={styles.link} href={`/blog/post?id=${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    )
}