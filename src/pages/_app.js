import SharedLayout from "../components/SharedLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  );
}

export default MyApp;
