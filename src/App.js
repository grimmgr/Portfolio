// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Background } from './components/Background';
import { Welcome } from './pages/Welcome';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { WidthProvider } from './utils/widthContext';

const App = () => {
  return (
    <>
        <WidthProvider>
            <Background />
            <Header />
            <main>
                <Welcome />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </WidthProvider>
    </>
  );
}

export default App;
