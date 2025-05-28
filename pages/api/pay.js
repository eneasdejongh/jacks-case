export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Alleen POST toegestaan' });
  }

  const { name, email, product, amount } = req.body;

  const response = await fetch('https://api.payconiq.com/v3/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer e157a887-32e9-417f-aeb4-ed716b934e9b'
    },
    body: JSON.stringify({
      amount: amount,
      currency: 'EUR',
      description: `${product} voor ${name}`,
      reference: email,
      callbackUrl: 'https://jackscase.be/betaald',
      successUrl: 'https://jackscase.be/success'
    })
  });

  const data = await response.json();

if (!response.ok) {
  console.error('Fout van Payconiq:', data);
  return res.status(500).json({ error: 'Payconiq fout', data });
}

res.status(200).json({ redirect: data._links.redirect.href });


  if (!data._links || !data._links.redirect) {
    return res.status(500).json({ error: 'Betaling kon niet gestart worden', data });
  }

  res.status(200).json({ redirect: data._links.redirect.href });
}

