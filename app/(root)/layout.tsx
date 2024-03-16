import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            <Sidebar />
            <MobileNav />
            <div className='root-container'>
                <div className='max-w-5xl mx-auto px-5 md:px-10 w-full text-dark-400 p-16-regular'>
                    {children}
                </div>
            </div>
            <Toaster />
        </main>
    )
}

export default Layout