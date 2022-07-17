import React from 'react'
import Header from './Componets/Header'
import NotificationButton from './Componets/NotificationButton'

import SalesCard from './Componets/SalesCard'
import './index.css'


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />

          </div>
        </section >

      </main >

    </>


  )
}

export default App
