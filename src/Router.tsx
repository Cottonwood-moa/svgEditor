import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './routes/NotFound';
import Canvas from './routes/Canvas';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Canvas />}>
          {/* <Route path="/:coinId" element={<Coin />}>
            <Route path="weeks" element={<Weeks />} />
            <Route path="year" element={<Year />} />
            <Route path="price" element={<Price />} />
          </Route> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
