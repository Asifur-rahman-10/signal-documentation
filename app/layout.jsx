import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
// import logoDark from '../public/signal_logo_dark.svg'
import logoLight from '../public/signal_logo_light.svg'
import Image from 'next/image'

export const metadata = {}

const image = (
  <Image
    src={logoLight}
    alt='Nextra Logo'
    height={30}
  />
)
const navbar = (
  <Navbar
    logo={image}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang='en'
      // Required to be set
      dir='ltr'
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/shuding/nextra/tree/main/docs'
          footer={footer}
          copyPageButton={false}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
