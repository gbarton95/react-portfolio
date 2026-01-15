import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto p-4">
        <Outlet />
      </main>

      <footer className="border-t p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gaby
      </footer>
    </div>
  )
}
