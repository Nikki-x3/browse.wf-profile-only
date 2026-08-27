export default async function handler(request, response) {
  // 1. Set CORS headers so your website frontend can read the response
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*'); // Or replace '*' with your specific website URL
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Handle browser Preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  try {
    // 3. Fetch data from Warframe using a clean desktop browser User-Agent
    const warframeResponse = await fetch('https://api.warframe.com/cdn/getProfileViewingData.php?playerId=51fbaece1a4d80694900000c', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      }
    });

    if (!warframeResponse.ok) {
      throw new Error(`Warframe API responded with status: ${warframeResponse.status}`);
    }

    const data = await warframeResponse.json();

    // 4. Return the data to your frontend
    return response.status(200).json(data);

  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}