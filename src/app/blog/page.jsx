import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

export const metadata = {
    title: 'Blog Page',
    description: 'Blog description',
}

export default async function Blog(){
    const posts = await getPosts()
    return(
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} key={post.id}/>
                </div>
            ))}
        </div>
    )
}