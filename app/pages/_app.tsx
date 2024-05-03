import '../styles/global.css';  // Make sure to import the global styles

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  return <Component {...pageProps} />
}

export default MyApp;