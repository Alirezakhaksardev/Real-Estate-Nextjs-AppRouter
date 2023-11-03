"use client"
import styles from '@/module/LogoutButton.module.css'
import { signOut } from 'next-auth/react'
import { FiLogOut } from 'react-icons/fi'
function LogoutButton() {
    const logouthandler = () => {
        signOut();
    }
  return (
    <button className={styles.button} onClick={logouthandler}>
        <FiLogOut />
        خروج
    </button>
  )
}

export default LogoutButton