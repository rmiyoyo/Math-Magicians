import { Routes, Route } from 'react-router-dom';
import Calcr from './routes/Calcr';
import Saying from './routes/Sayings';
import Home from './routes/Home';
import Layout from './routes/Layout';
import mobile from './assets/mobile.jpg';
import background from './assets/background.jpg';

function Calc() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '40px',
    minHeight: '100vh',
    backgroundImage: window.matchMedia('(min-width: 768px)').matches ? `url(${background})` : `url(${mobile})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'none',
  };
  return (
    <div style={appStyle}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calcr />} />
          <Route path="quote" element={<Saying />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Calc;
