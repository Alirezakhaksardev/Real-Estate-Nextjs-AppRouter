"use client";

import Link from 'next/link'
import styles from '@/layout/Header.module.css'
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from 'next-auth/react';

function Header() {
  const {data} = useSession();
  
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li><Link href='/'>صفحه اصلی</Link></li>
          <li><Link href='/bu-residential'>آگهی</Link></li>
        </ul>
      </div>
      <div className={styles.login}>
        {
          
          data ?  
            <Link href="/dashboard"><FaUserAlt /></Link> : 
            <Link href="/signin"><FiLogIn/> <span>ورود</span></Link>
        }
      </div>
    </header>
  )
}

export default Header