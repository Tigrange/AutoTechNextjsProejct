import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";

import "@/styles/globals.css";
import "@/styles/MudBlazor.min.css";
import '@/styles/fonts.scss';
import "@/styles/styles.scss";
import "@/styles/theme.scss";
import "@/styles/critical-img-fix.scss";

import Layout from 'components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
