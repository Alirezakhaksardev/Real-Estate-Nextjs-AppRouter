import DashboardSidebar from "@/layout/DashboardSidebar"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

async function layout({children}) {

    const session = await getServerSession(authOptions)
    if(!session) return redirect('/')
    return (
        <DashboardSidebar email={session?.user.email}>{children}</DashboardSidebar>
    )
}

export default layout