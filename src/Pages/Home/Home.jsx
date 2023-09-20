import React from 'react'
import Header from '../../Components/Header/Header'
import Introduction from '../../Components/Introduction/Introduction'
import Rules from '../../Components/Rules/Rules'
import Judging from '../../Components/Judging/Judging'
import Faq from '../../Components/Faq/Faq'
import Timeline from '../../Components/Timeline/Timeline'
import Footer from '../../Components/Footer/Footer'
import Privacy from '../../Components/Privacy/Privacy'
import Partners from '../../Components/Partners/Partners'
import Prizes from '../../Components/Prizes/Prizes'

export default function Home() {
  return (
    <>
        <Header />
        <Introduction />
        <Rules />
        <Judging />
        <Faq />
        <Timeline />
        <Prizes />
        <Partners />
        <Privacy />
        <Footer />
    </>
  )
}
