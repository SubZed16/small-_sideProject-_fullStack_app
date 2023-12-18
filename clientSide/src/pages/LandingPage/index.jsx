
import {Link} from 'react-router-dom';
import logo from '../../assets/react.svg';
const LandingPage = () => {
    return (
        <div style={{ width: '100%', borderRadius:"12px",color:"#242424",backgroundColor:"#f8f9fa",height:"100vh",display:"grid",placeItems:"center",alignItems:"center"}}>
            <div>
            <img src={logo} className=" logo-react" alt="React Logo" style={{ height: '6rem', marginRight: '1rem' }} />
            <h1>Welcome to the Dashboard!</h1>
            <p>Here you can view all of your important information.</p>
            <Link to="/dashboard/seeitems" ><button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>Click me!</button></Link>
      
            </div>
        </div>
    );
};

export default LandingPage;
