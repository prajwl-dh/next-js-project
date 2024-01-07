"use client"
import React from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/NavLink";
import Image from 'next/image';

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

const session = true
const isAdmin = true

export default function Links(){
    const [open, setOpen] = React.useState()
    return(
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => {
                    return(
                        <NavLink item={link} key={link.title}/>
                    )
                })}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} /> }
                        <button className={styles.logout}>Logout</button>
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