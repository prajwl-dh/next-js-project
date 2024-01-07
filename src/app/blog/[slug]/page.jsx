import Image from 'next/image'
import styles from './singlePostPage.module.css'

export default function SinglePostPage(){
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lorem ac lobortis condimentum. Fusce et felis sem. Morbi blandit sed lectus eleifend commodo. Sed lorem augue, dictum ac suscipit vel, tristique eget tellus. Duis ut dapibus lorem. Quisque tellus mi, auctor eget tincidunt quis, volutpat vitae urna. Sed nec lectus vitae arcu bibendum mattis. Nulla mi urna, luctus eu porttitor sed, imperdiet id sapien. Nunc elementum nisl non facilisis convallis. Morbi aliquam felis vitae mi ultricies pretium. Nunc ultrices dui eu ex ultrices mollis.
                </div>
            </div>
        </div>
    )
}