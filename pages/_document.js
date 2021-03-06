import Document, { Html, Head, Main, NextScript } from 'next/document'

 class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <meta charSet="utf-8" />
               <meta name="theme-color" content="#000000" />
               <link rel="shortcut icon" href={'/img/brand/favicon.ico'} />
               <link rel="apple-touch-icon" sizes="76x76" href={'/img/brand/apple-icon.png'} />

               <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                  crossOrigin="anonymous"
               />
               <script
                  src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                  crossorigin="anonymous"
               ></script>
               <script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                  crossorigin="anonymous"
               ></script>
               <link
                  rel="stylesheet"
                  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                  crossOrigin="anonymous"
               />
               
               <link /* FAVICON*/
                  rel="icon"
                  href="https://upload.wikimedia.org/wikipedia/commons/9/93/Yellow_stop_sign.svg"
               />
               

            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
