import "../styles/global.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function({ Component, pageProps }){
  const visited = useRouter()
    return(
        <>
         <h1>OurWebSite</h1>
         <div className="header-nav">
          <ul>
            <li>
              <Link className={visited.pathname == "/" ? "active" : ""}  href="/">HOME</Link>
            </li>
            <li>
              <Link className={visited.pathname == "/about" ? "active" : ""} href="/about">ABOUT</Link>
            </li>
            <li>
              <Link className={visited.pathname == "/blog" ? "active" : ""} href="/blog">BLOG</Link>
            </li>
          </ul>
         </div>
          <p>Header</p>
            <Component {...pageProps} />
           <p>Footer</p>
        </>
    )
}