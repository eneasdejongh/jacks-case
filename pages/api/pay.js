export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Alleen POST toegestaan' });
  }

  const { name, email, color } = req.body;

  const productName = `Jack's Case – ${color}`;
  const amount = color === 'Goud' ? 1050 : 750;

  try {
    const response = await fetch('https://api.payconiq.com/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer e157a887-32e9-417f-aeb4-ed716b934e9b'
      },
      body: JSON.stringify({
        amount,
        currency: 'EUR',
        description: `${productName} voor ${name}`,
        reference: email,
        callbackUrl: 'https://jackscase.be/betaald',
        successUrl: 'https://jackscase.be/success'
      })
    });

    const data = await response.json();

    // GEEN redirect-check → gewoon het hele antwoord tonen
    return res.status(200).json({ antwoord: data });

  } catch (error) {
    return res.status(500).json({ error: 'Fout bij Payconiq-verbinding', details: error.message });
  }
}

