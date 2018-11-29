// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
// import './layout.css'

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }}
//         >
//           {children}
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
import React from 'react'
import { StaticQuery, Link, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render={data => (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )
    }
  />
)
