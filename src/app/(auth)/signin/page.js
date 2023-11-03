import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SigninPage from '@/template/SigninPage'
import React from 'react'
import { redirect } from 'next/navigation';

async function page() {
  
  const session = await getServerSession(authOptions);
  
  if(session) redirect('/')
  
  return (
    <SigninPage />
  )
}

export default page


