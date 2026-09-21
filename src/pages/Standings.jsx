import {useEffect,useState} from "react";
import {supabase} from "../lib/supabase";
export default function Standings(){
 const [rows,setRows]=useState([]); const [error,setError]=useState("");
 useEffect(()=>{async function load(){if(!supabase){setError("Configura VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.");return;}
 const {data,error}=await supabase.from("standings").select("*").order("group_id").order("points",{ascending:false}).order("goal_difference",{ascending:false}).order("goals_for",{ascending:false});
 if(error)setError(error.message); else setRows(data??[]);} load();},[]);
 return <section><span className="eyebrow">Classifiche</span><h1>Classifica ufficiale</h1><p className="muted">I dati provengono dalla view PostgreSQL <code>standings</code>.</p>{error&&<div className="notice">{error}</div>}{rows.length>0&&<div className="table-wrap"><table><thead><tr><th>Squadra</th><th>G</th><th>V</th><th>N</th><th>P</th><th>GF</th><th>GS</th><th>DR</th><th>Pt</th></tr></thead><tbody>{rows.map(r=><tr key={r.team_participation_id}><td>{r.team_name}</td><td>{r.played}</td><td>{r.wins}</td><td>{r.draws}</td><td>{r.losses}</td><td>{r.goals_for}</td><td>{r.goals_against}</td><td>{r.goal_difference}</td><td><strong>{r.points}</strong></td></tr>)}</tbody></table></div>}</section>;
}