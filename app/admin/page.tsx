import { cookies } from 'next/headers'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

async function getIsAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get('lvk_admin')?.value
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || !session) return false
  return session === Buffer.from(adminPassword).toString('base64')
}

export default async function AdminPage() {
  const isAuthenticated = await getIsAuthenticated()

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  return <AdminDashboard />
}
