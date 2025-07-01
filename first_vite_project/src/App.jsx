import './App.css';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoSection />
        <Menu />
        <LoginForm />
      </main>
    </>
  );
}


export default App;
