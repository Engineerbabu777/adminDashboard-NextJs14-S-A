import Navbar from '../ui/dashboard/Navbar/Navbar'
import Sidebar from '../ui/dashboard/Sidebar/Sidebar'
import styles from '@/app/ui/dashboard/dashboard.module.css'

export default function Layout ({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
      </div>
    </>
  )
}
