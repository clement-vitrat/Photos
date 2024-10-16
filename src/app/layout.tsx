// Appel des fichiers de styles
import '@/styles/bootstrap.min.css'
import '@/styles/style.css'

//import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export default function Layout() {
  return (
    <html lang="fr">
      
      <head>
        <meta charSet="utf-8" />
        <title>Clément VITRAT - Photographe</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href='../public/favicon.png' type="image/x-icon" />
      </head>
      
      <body>
        <Footer />     
      </body>

    </html>
  )
}
