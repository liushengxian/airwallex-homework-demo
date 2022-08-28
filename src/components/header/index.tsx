import Container from '@mui/material/Container';
import './index.scss';


export default function Header() {
  const name = 'Broccoli & Co.';
  return (<div className="header">
    <Container>
      <div className='header-title'>
        {name}
      </div>
    </Container>
  </div>)
}