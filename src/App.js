import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
// import { sendRecipes } from "./data/send";

// sendRecipes();
function App() {
  return (
    <div className={`d-flex flex-column  ${styles.appContainer}`}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
