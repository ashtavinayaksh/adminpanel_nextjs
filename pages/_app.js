import "@fortawesome/fontawesome-svg-core/styles.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/fontawesome.css'

function MyApp({ Component, pageProps }) {
  return (
    <div class="application application-offset ready">
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
