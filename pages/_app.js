import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router';
import { Layout } from '../components';

const progress = new ProgressBar({
  size: 4,
  color: '#fe585e',
  className: 'z-50',
  delay: 100
});


Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return     <Layout>
                <Component {...pageProps} />
            </Layout>
}

export default MyApp
