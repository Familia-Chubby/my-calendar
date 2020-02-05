import MainLayout from '../components/MainLayout'

const mainWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px'
}

const item = {
  margin: '0 10px'
}
const inayIntro = {
  border: '1px solid #000'
}

const Page = () => {
  return (
  <div style={mainWrapper}>
    <div style={item}> Hello Family </div>
    <div>Inay Pic</div>
  </div>);
}

export default MainLayout(Page);