import Image from 'next/image'
import styles from './singlePostPage.module.css'
import { Suspense } from 'react'
import { getSinglePost, getUser, getTimeStamp } from '@/lib/data'

export const generateMetadata = async ({ searchParams }) => {
    const posts = await getSinglePost(searchParams.id)
    return {
        title: posts.title,
        description: posts.desc
    }
}

export default async function SinglePostPage({ searchParams }){
    const posts = await getSinglePost(searchParams.id)
    const user = await getUser(posts.userId)
    const timestamp = await getTimeStamp(searchParams.id)

    return(
        <div className={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
                {posts.img &&<div className={styles.imgContainer}>
                    <Image src={posts.img} alt='' fill className={styles.img} />
                </div>}
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{posts.title}</h1>
                    <div className={styles.detail}>
                        <Image className={styles.avatar} src={posts.img ? posts.img : `/noavatar.png`} alt='' width={50} height={50} />
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Author</span>
                            <span className={styles.detailValue}>{user.username}</span>
                        </div>
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>{timestamp.toString().slice(0,16)}</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {posts.desc}
                    </div>
                </div>
            </Suspense>
        </div>
    )
}