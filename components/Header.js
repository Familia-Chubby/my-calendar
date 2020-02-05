import Link from 'next/link';

const wrapper = {
  display: 'flex',
  justifyItem: 'center',
  alignItems: 'center',
  backgroundImage: "url('/images/background.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: '0 -75px',
  backgroundAttachment: 'fixed',
  minHeight: '335px'
};

const item = {
  maxWidth: '50%',
  margin: "20px"
}

const headerText = {
  display: "block",
  fontWeight: '600',
  fontSize: 16
}

const h5Text = {
  display: "block",
  fontSize: 10
}



const Header = () => (
  <div style={wrapper}>
    <div style={item}>
      <span style={headerText}>We are Familia Chubby</span>
      <span style={h5Text}>Iba iba ang Ama, ngunit iisa ang hulma</span>
    </div>
  </div>
);

export default Header;