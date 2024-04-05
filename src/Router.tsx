import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from 'routes/Test';
import Result from 'routes/Result';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
