export async function fetchFromApi(endpoint) {
  const res = await fetch(`https://v3.football.api-sports.io/${endpoint}`, {
    method: 'GET',
    headers: {
      'x-apisports-key': process.env.NEXT_PUBLIC_API_FOOTBALL_KEY
    }
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
