"use client"
import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

export default function NavLink(props){
    const pathName = usePathname()
    return(
        <div className={styles.container}>
            <Link href={props.item.path} className={`${styles.container} ${pathName === props.item.path ? styles.active : null }`}>{props.item.title}</Link>
        </div>
    )
}