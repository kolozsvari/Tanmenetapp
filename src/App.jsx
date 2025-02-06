import { useState } from "react";
import OraCard from "./components/OraCard";
import Oraszam from "./components/Oraszam";
import Temakorok from "./components/Temakorok";
import OraForm from "./components/OraForm";




const App = () => {
  const [orak, setOrak] = useState([
    {
      oraSzam: 1,
      cim: "Bevezetés a webfejlesztésbe",
      leiras: "Weboldalak működése és HTML áttekintés.",
    },
    {
      oraSzam: 2,
      cim: "Fejlesztői környezetek",
      leiras:
        "Az online és a professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása.",
    },
    {
      oraSzam: 3,
      cim: "Alapvető HTML tagek",
      leiras: "Legfontosabb tagek használata: h1-h6, p, img, a.",
    },
    {
      oraSzam: 4,
      cim: "HTML attribútumok és szövegformázás",
      leiras: "Attribútumok: id, class, és szövegformázás.",
    },
    {
      oraSzam: 5,
      cim: "HTML listák és táblázatok",
      leiras: "Listaelemek (ul, ol) és táblázatok (table).",
    },
  ])

  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <Oraszam orakATanmenetben={orak.length} />
      < Temakorok />
      <OraForm onOraHozzaad={(newOra) => setOrak((prev) => [...prev, newOra])}/>
      <section className="ora-grid">
  {orak.map((ora, index) => (
    <OraCard key={index} oraSzam={`${index + 1}. óra`}cim={ora.cim}
    onKartyaTorles={() => setOrak((prev) => prev.filter((ora, i) => i !== index))
      }
    >
      {ora.leiras}
    </OraCard>
  ))}
</section>
  </main>
  )
};

export default App;