import Provider from './context/Provider';
import ApplicationRouter from './router/ApplicationRouter';
import './style.css';

function App() {
  return (
    <Provider>
      <ApplicationRouter />
    </Provider>
  );
}

export default App;
