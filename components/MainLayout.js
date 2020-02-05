import Header from './Header';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Montserrat, sans-serif',
};

const Layout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header></Header>
      <Page></Page>
      <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }
    `}</style>
    </div>
  );
}

export default Layout;