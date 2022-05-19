// src/App.tsx
import { BaseStyling } from '@unocha/hpc-ui';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes as appRoutes } from './routes';

const App = () => {
  return (
    <>
      <BaseStyling />
      <Router>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
