import Image from 'next/image'
import styles from './singlePostPage.module.css'

export default async function SinglePostPage({ searchParams }){
    const getSinglePost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchParams.id}`, {next: {revalidate: 1800}})
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        const data = await response.json()
        return data
    }

    const posts = await getSinglePost()

    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{posts.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src='https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Prajwal Dhungana</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {posts.body}
                </div>
            </div>
        </div>
    )
}