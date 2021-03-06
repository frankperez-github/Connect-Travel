import '../styles/globals.css'
import LayOut from '../Components/LayOut'
import '../styles/Styles.css'
import '../styles/MobileStyles.css'

function MyApp({ Component, pageProps }) {
  return(
  <LayOut>
    <Component {...pageProps} />
  </LayOut>)
}

export default MyApp
