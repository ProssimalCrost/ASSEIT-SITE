import Section from "../components/section";
import Card from "../components/card";
import { empresas } from "../lib/data";
import { title } from "process";
import { colors } from "@mui/material";

const titleStyle = {
  color: "black"
}

export default function Empresas() {
  return (
  <main style={titleStyle}>
    <Section title="Empresas Associadas">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {empresas.map((empresa, i) => (
          <Card key={i} title={empresa.title} description={empresa.description} />
        ))}
      </div>
    </Section>
  </main>  
  );
}
