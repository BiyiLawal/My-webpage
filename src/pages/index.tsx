import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Biyi - Backend Developer</title>
        <meta name="description" content="Personal website of a backend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}