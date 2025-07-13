import { useState } from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CheckStats from './pages/CheckStats';
import Contact from './pages/Contact';
import Platforms from './components/Platforms';
import Grid from './components/Grid';
import LeetCode from './pages/LeetCode';
import CodeForces from './pages/CodeForces';
import Codechef from './pages/Codechef';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element:
          <div>
            <Grid />
            <Navbar />
            <Home />
          </div>
      },
      {
        path: '/stats',
        element:
          <div>
            <Grid />
            <Navbar />
            <CheckStats />
          </div>
      },
      {
        path: '/contact',
        element:
          <div>
            <Navbar />
            <Contact />
          </div>
      },
      {
        path: '/stats/leetcode',
        element:
          <div>
            <LeetCode />
          </div>
      },
      {
        path: '/stats/codeforces',
        element:
          <div>
            <CodeForces />
          </div>
      },
      {
        path: '/stats/codechef',
        element:
          <div>
            <Codechef />
          </div>
      },
    ]
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
