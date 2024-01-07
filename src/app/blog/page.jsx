import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 1800}})
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json()
    return data
}

export default async function Blog(){
    const posts = await getData()
    return(
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
    )
}