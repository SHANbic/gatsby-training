import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const PrimaryLayout = ({ children, title }) => (
  <div>
    <SEO />
    <Header title={`Header of ${title} page`} />
    <div className="container">
      <div className="row justify-content-md-center">{children}</div>
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout
