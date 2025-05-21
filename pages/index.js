import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [language, setLanguage] = useState("nl");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const content = {
    nl: {
      title: "Jack's Case",
      description: "3D-geprinte cases voor DJ's",
      products: [
        {
          name: "Gold'n'Jack",
          description: "Een setje van onze case + een gouden (premium) jack verloopstekker (M.)",
          price: "€9,20"
        },
        {
          name: "Silver'n'Jack",
          description: "Een setje van onze basis case + een zilveren jack verloopstekker (M.)",
          price: "€5,80"
        }
      ],
      colors: ["Blauw", "Wit"],
      buy: "Koop nu via Payconiq",
      reportDamage: "Schade melden (binnen garantie van 4 maanden)",
      subscribe: "Inschrijven op nieuwsbrief",
      contact: "Contact: Eneas De Jongh"
    },
    en: {
      title: "Jack's Case",
      description: "3D printed DJ equipment cases",
      products: [
        {
          name: "Gold'n'Jack",
          description: "A set with our case + a premium gold jack adapter (M.)",
          price: "€9.20"
        },
        {
          name: "Silver'n'Jack",
          description: "A set with our basic case + a silver jack adapter (M.)",
          price: "€5.80"
        }
      ],
      colors: ["Blue", "White"],
      buy: "Buy now via Payconiq",
      reportDamage: "Report damage (within 4-month warranty)",
      subscribe: "Subscribe to our newsletter",
      contact: "Contact: Eneas De Jongh"
    }
  };

  const lang = content[language];

  return (
    <main style={{ backgroundColor: '#000', color: 'gold', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image src="/logo.png" alt="Jack's Case logo" width={100} height={100} />
        <select onChange={(e) => setLanguage(e.target.value)} style={{ padding: '0.5rem' }}>
          <option value="nl">Nederlands</option>
          <option value="en">English</option>
        </select>
      </div>

      <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>{lang.title}</h1>
      <p>{lang.description}</p>

      <div>
        {lang.products.map((product, idx) => (
          <div key={idx} style={{ marginTop: '2rem', padding: '1rem', border: '1px solid gold' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <label>
              {language === "nl" ? "Kleur" : "Color"}:
              <select style={{ marginLeft: '0.5rem' }}>
                {lang.colors.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <div><button style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: 'gold', border: 'none', color: 'black' }}>{lang.buy}</button></div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>{lang.reportDamage}</h2>
        <textarea placeholder={language === "nl" ? "Beschrijf het probleem..." : "Describe the issue..."} rows="4" style={{ width: '100%' }}></textarea>
        <button style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: 'gold', border: 'none', color: 'black' }}>{language === "nl" ? "Verstuur" : "Submit"}</button>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>{lang.subscribe}</h2>
        <input type="email" placeholder="Email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} style={{ padding: '0.5rem', width: '100%' }} />
        <button style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: 'gold', border: 'none', color: 'black' }}>{language === "nl" ? "Inschrijven" : "Subscribe"}</button>
      </div>

      <footer style={{ marginTop: '3rem', borderTop: '1px solid gold', paddingTop: '1rem' }}>
        <p>{lang.contact}</p>
      </footer>
    </main>
  );
}
