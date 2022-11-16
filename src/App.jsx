import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import WebPageInfoComponent from './components/WebPageInfoComponent/WebPageInfoComponent';
import Emergency from './components/Emergency/Emergency';
import BookAppointment from './components/BookAppointment/BookAppointment';

const App = () => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="App">
      <header>
        <Header toggle={toggle} open={open} />
      </header>
      <Emergency />
      <BookAppointment />
      <section>
        <WebPageInfoComponent />
      </section>
    </div>
  );
};

export default App;
