import { Link,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Standings from "./pages/Standings";
export default function App(){
  return <div className="app"><header className="topbar"><div><div className="brand">Campionato Ingegneri</div><div className="subtitle">Ordini Provinciali degli Ingegneri</div></div><nav><Link to="/">Home</Link><Link to="/classifiche">Classifiche</Link></nav></header><main className="container"><Routes><Route path="/" element={<Home/>}/><Route path="/classifiche" element={<Standings/>}/></Routes></main><footer className="footer">API-first · Supabase · GitHub Pages</footer></div>;
}