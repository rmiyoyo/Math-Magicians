import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import '../styles/Menu.scss';

const Layout = () => (
  <div className="navDiv">
    <Menu />
    <Outlet />
  </div>
);
export default Layout;
