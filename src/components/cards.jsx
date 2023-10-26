import { useState } from "react";
import '../styles/Cards.css'

export function Cards({data, setter}) {
  return (
    <div className="cards" onClick={setter}><img src={data.link} /></div>
  )
}