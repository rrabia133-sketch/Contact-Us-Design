import ContactPage from "./component/ContactPage";
import Navbar from "./component/Navigation/Navbar";
import "./App.css";
import ContactForm from "./component/ContactForm";
function App() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <ContactForm />
    </>
  );
}

export default App;
