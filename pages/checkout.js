import { useState } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const [language, setLanguage] = useState("nl");
  const [form, setForm] = useState({
    name: "",
    email: "",
    color: "blauw"
  });

  const content = {
    nl: {
      title: "Bestellen",
      name: "Naam",
      email: "E-mailadres",
      color: "Kleurkeuze",
      optionBlue: "Blauw",
      optionWhite: "Wit",
      submit: "Plaats bestelling",
      info: "Je wordt doorgestuurd naar Payconiq voor de betaling."
    },
    en: {
      title: "Checkout",
      name: "Name",
      email: "Email address",
      color: "Color choice",
      optionBlue: "Blue",
      optionWhite: "White",
      submit: "Place order",
      info: "You will be redirected to Payconiq for payment."
    }
  };

  const lang = content[language];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          product: "Jack's Case",
          amount: form.color === 'wit' ? 750 : 1050
        })
      });

      const data = await res.json();

      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        console.log('Foutdetails:', data);
alert('Er ging iets mis bij het starten van de betaling. Controleer de console.');

      }
    } catch (error) {
      alert('Verbinding mislukt. Probeer opnieuw.');
    }
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>{lang.title}</h1>
        <select onChange={(e) => setLanguage(e.target.value)} value={language} style={{ padding: '0.5rem' }}>
          <option value="nl">Nederlands</option>
          <option value="en">English</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>{lang.name}
          <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
        </label>
        <label>{lang.email}
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
        </label>
        <label>{lang.color}
          <select name="color" value={form.color} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="blauw">{lang.optionBlue}</option>
            <option value="wit">{lang.optionWhite}</option>
          </select>
        </label>
        <p>{lang.info}</p>
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '999px' }}>{lang.submit}</button>
      </form>

      <p style={{ marginTop: '2rem' }}>
        <Link href="/">← Terug naar homepage</Link>
      </p>
    </main>
  );
}

