import ContactPage from "./component/ContactPage";
import Navbar from "./component/Navigation/Navbar";
import "./App.css";
import ContactForm from "./component/ContactForm";
function App() {
  return (
    <>
      <Navbar />
      <main className="main_container">
        <ContactPage />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
