// import React from 'react'
// import { Link } from 'gatsby'

// import Layout from '../components/layout'
// import Image from '../components/image'

// // const IndexPage = () => (
// //   <Layout>
// //     <h1>Hi people</h1>
// //     <p>Welcome to your new Gatsby site.</p>
// //     <p>Now go build something great.</p>
// //     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
// //       <Image />
// //     </div>
// //     <Link to="/page-2/">Go to page 2</Link>
// //   </Layout>
// // )

// // export default IndexPage

// export default () => (
//   <div style={{ margin: `3rem auto`, maxWidth: 600}}>
//     <h1>Richard Hamming on Luck</h1>
//     <div>
//       <p>
//         From Richard Hamming’s classic and must-read talk, “
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           You and Your Research
//         </a>
//         ”.
//       </p>
//       <blockquote>
//         <p>
//           There is indeed an element of luck, and no, there isn’t. The prepared
//           mind sooner or later finds something important and does it. So yes, it
//           is luck.{" "}
//           <em>
//             The particular thing you do is luck, but that you do something is
//             not.
//           </em>
//         </p>
//       </blockquote>
//     </div>
//     <p>Posted April 09, 2011</p>
//   </div>
// )

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)