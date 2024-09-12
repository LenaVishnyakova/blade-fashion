import { useState } from "react";

import "./styles/reset.css";
import "./styles/global.css";

import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Members from "./components/Members/Members";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const [tab, setTab] = useState('main')

  const styles = {
    backgroundColor: tab === 'main' ? "rgba(101, 78, 163, 0.87)" : "#fff",
    height: "100%",
  };

  return (
    <div style={styles}>
      <Header active={tab} changeTab={(current) => setTab(current)} />
      {tab === 'main' && <Hero />}
      {tab === 'members' && <Members />}
      {tab === 'contacts' && <Contacts />}
    </div>
  );
}

export default App;
