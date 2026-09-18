import type { Metadata } from 'next'
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/footer'
import { AboutClient } from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | TechVision Academy',
  description:
    'Learn about TechVision Academy—Ethiopia premier frontend engineering bootcamp. Discover our mission, core values, curriculum roadmap, and mentor team.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <Footer />
    </>
  )
}
