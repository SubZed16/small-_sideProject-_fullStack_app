
import logo from '../../assets/react.svg';
import "../../App.css"

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} className=" logo-react" alt="React Logo" style={{ height: '3rem', marginRight: '1rem' }} />
        <h1 style={{ margin: 0 }}>A React Project</h1>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
      </ul>
    </nav>
  );
};

export default NavBar;
