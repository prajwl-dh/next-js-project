"use client"
import React from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/NavLink";
import Image from 'next/image';
import { handleLogOut } from '@/lib/action';

const links = [
    {
        title: 'Homepage',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
]

export default function Links({ session }){
    const [open, setOpen] = React.useState()

    return(
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => {
                    return(
                        <NavLink item={link} key={link.title}/>
                    )
                })}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} /> }
                        <form action = {handleLogOut}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )}
            </div>
            <Image className={styles.menuBar} src='/menu.png' alt='Menu' width={30} height={30} onClick={() => setOpen((prev) => !prev)} /> 
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => {
                        return(
                            <NavLink item={link} key={link.title} />
                        )
                    })}
                </div>
            }
        </div>
    )
}