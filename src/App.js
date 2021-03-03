// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Background } from './components/Background';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';
import { DisplayCardProvider } from './utils/displayCardContext'; 
import { WidthProvider } from './utils/widthContext';

const App = () => {
  return (
    <>
        <WidthProvider>
            <DisplayCardProvider>
                <Background />
                <Header />
                <Main />
                <Footer />
            </DisplayCardProvider>
        </WidthProvider>
    </>
  );
}

export default App;
