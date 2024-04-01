import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './Router';

function App() {
  return (
    <>
      <Router />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
