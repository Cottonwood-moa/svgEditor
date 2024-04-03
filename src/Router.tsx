import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from 'routes/Root';
import Test from 'routes/Test';
import Result from 'routes/Result';
import Excalidraw from './routes/Excalidraw';
import AntvX6 from './routes/Canvas';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/antv" element={<AntvX6 />} />
        <Route path="/excalidraw" element={<Excalidraw />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
