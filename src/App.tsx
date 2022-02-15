import React from "react";
import styles from "./App.module.css";
import { Footer } from "./components/footer"; 
import { Header } from "./components/header";

function App() {
  return <div className={styles.App}>
    <Header />
    <Footer />
  </div>;
}

export default App;
