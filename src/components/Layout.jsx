import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <>
        <nav className="navv">
            <ul>
            <li style={{listStyle: 'none', marginBottom: '1.5em', }}>
                <Link className="main-met" to="/home">Main Metrics</Link>
            </li>
            
            <div style={{display: 'flex',}}>
                <li style={{listStyle: 'none',}}>
                    <Link className="last-hour" to="/LastHour">Last hour</Link>
                </li>
                    
                <li style={{listStyle: 'none',}}>
                    <Link className="today"  to="/today">Today</Link>
                </li>

                <li style={{listStyle: 'none', }}>
                    <Link className="yesterday"  to="/yesterday">Yesterday</Link>
                </li>

                <li style={{listStyle: 'none',}}>
                    <Link className="last3" to="/LastThreeDays">Last 3 days</Link>
                </li>
            </div>
            </ul>
        </nav>
        <Outlet />
    </>
    


  );
}


export default Layout;