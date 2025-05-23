// index.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [language, setLanguage] = useState("nl");
  const router = useRouter();
  const [showAbout, setShowAbout] = useState(false);

  const content = {
    nl: {
      title: "Jack's Case",
      description: "3D-geprinte cases voor DJ's",
      navAbout: "Over ons",
      navCheckout: "Bestellen",
      products: [
        {
          name: "Gold'n'Jack",
          description:
            "Een setje van onze case + een gouden (premium) jack verloopstekker (M.)",
          price: "€10,50",
          image: "/golden-jack.jpg"
        },
        {
          name: "Silver'n'Jack",
          description:
            "Een setje van onze basis case + een zilveren jack verloopstekker (M.)",
          price: "€7,50",
          image: "/silver-jack.jpg"
        }
      ],
      specs: [
        "Levertijd: binnen 24u",
        "Materiaal: Acrylonitril-Butadieen-Styreen (ABS)",
        "Compatibel met koptelefooncases en sleutelhangers"
      ],
      buy: "Toevoegen aan winkelmand",
      contact: "Contact: Eneas De Jongh",
      phone: "+32 494909945",
      instagram: "Instagram: eneas@dejongh",
      djname: "DJ-naam: E-DJ",
      about: {
        mission: "Het is mijn missie om djays en muziekliefhebbers een slimme en duurzame oplossing te bieden waarmee ze hun essentiële tools, zoals jack verloopstekkers en USB-sticks, altijd veilig en binnen handbereik hebben. Door functioneel design te combineren met mobiliteit en duurzaamheid, wil ik bijdragen aan een meer georganiseerde en zorgeloze muziekervaring, waar je ook speelt.",
        story: "Ik ben Eneas De Jongh, student Business Management – met een passie voor innovatie en ondernemerschap. Via Unizo zette ik Jack’s Case op poten, geboren uit een mix van creativiteit, zin voor praktisch nut, en de ervaring van talloze uren achter de draaitafel. Jack’s Case is geen solo-avontuur: ik werk samen met Juul Van Peer, een bevriende productdesigner en medeondernemer. Samen willen we DJ's een functioneel, stijlvol en lokaal ontworpen accessoire bieden dat mee op het podium kan."
      }
    },
    en: {
      title: "Jack's Case",
      description: "3D printed DJ equipment cases",
      navAbout: "About us",
      navCheckout: "Checkout",
      products: [
        {
          name: "Gold'n'Jack",
          description:
            "A set with our case + a premium gold jack adapter (M.)",
          price: "€10.50",
          image: "/golden-jack.jpg"
        },
        {
          name: "Silver'n'Jack",
          description:
            "A set with our basic case + a silver jack adapter (M.)",
          price: "€7.50",
          image: "/silver-jack.jpg"
        }
      ],
      specs: [
        "Delivery: within 24h",
        "Material: Acrylonitrile Butadiene Styrene (ABS)",
        "Compatible with headphone cases and keychains"
      ],
      buy: "Add to cart",
      contact: "Contact: Eneas De Jongh",
      phone: "+32 494909945",
      instagram: "Instagram: eneas@dejongh",
      djname: "DJ Name: E-DJ",
      about: {
        mission: "My mission is to offer DJs and music lovers a smart and sustainable way to keep their essential tools — like jack adapters and USB sticks — safe and always within reach. By combining functional design with mobility and sustainability, I aim to contribute to a more organized and stress-free music experience, wherever you play.",
        story: "I am Eneas De Jongh, a Business Management student with a passion for innovation and entrepreneurship. Through Unizo, I launched Jack’s Case — born from creativity, practicality, and countless hours behind the decks. Jack’s Case isn’t a solo act: I work with Juul Van Peer, a friend, product designer, and young entrepreneur. Together we want to deliver functional, stylish and locally designed accessories for DJs on the move."
      }
    }
  };

  const lang = content[language];

  return (
    <main style={{ backgroundColor: '#fff', color: '#000', fontFamily: 'sans-serif', minHeight: '100vh', padding: '2rem', lineHeight: 1.6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Image src="/logo.png" alt="Jack's Case logo" width={140} height={140} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => setShowAbout(!showAbout)} style={{ fontSize: '1rem', background: 'none', border: 'none', color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>{lang.navAbout}</button>
          <Link href="/checkout" style={{ fontSize: '1rem', color: '#000', textDecoration: 'underline' }}>{lang.navCheckout}</Link>
          <select onChange={(e) => setLanguage(e.target.value)} style={{ padding: '0.4rem', fontSize: '1rem' }}>
            <option value="nl">Nederlands</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {showAbout && (
        <div style={{ background: '#f1f1f1', padding: '1rem', borderRadius: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Missie</h2>
          <p>{lang.about.mission}</p>
          <h2 style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Ondernemersverhaal</h2>
          <p>{lang.about.story}</p>
        </div>
      )}

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{lang.title}</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{lang.description}</p>

      <div>
        {lang.products.map((product, idx) => (
          <div key={idx} style={{ marginBottom: '3rem', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #ddd', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '1.5rem' }}>{product.name}</h2>
            <Image src={product.image} alt={product.name} width={200} height={200} style={{ background: '#fff', borderRadius: '0.5rem', margin: '1rem 0' }} />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Image src="/case-open.jpg" alt="Open case" width={100} height={100} style={{ background: '#fff', borderRadius: '0.5rem' }} />
              <Image src="/case-closed.jpg" alt="Gesloten case" width={100} height={100} style={{ background: '#fff', borderRadius: '0.5rem' }} />
            </div>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <ul>
              {lang.specs.map((spec, i) => <li key={i}>{spec}</li>)}
            </ul>
            <button onClick={() => router.push('/checkout')} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '9999px', fontSize: '1rem' }}>{lang.buy}</button>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '3rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p>{lang.contact}</p>
        <p>{lang.phone}</p>
        <p>{lang.instagram}</p>
        <p>{lang.djname}</p>
      </footer>
    </main>
  );
}
