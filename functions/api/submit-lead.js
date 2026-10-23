export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const data = await request.json();

    const webhooks = {
      'adu-landing': env.WEBHOOK_ADU || atob('aHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoL1hYWC9ZWVkv'),
      'pacific-v5': env.WEBHOOK_PACIFIC_V5 || atob('aHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoL1hYWC9aWlov')
    };

    const landing = data.landing || 'adu-landing';
    const targetWebhook = webhooks[landing] || Object.values(webhooks)[0];

    const now = new Date();
    const pstDateString = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

    const payload = {
      name: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      address: data.address || '',
      adu_type: data.adu_type || '',
      message: data.message || '',
      landing: landing,
      submission_date_time: pstDateString,
      submission_date_iso: now.toISOString(),
      full_url: data.full_url || request.headers.get('referer') || '',
      client_ip: request.headers.get('cf-connecting-ip') || '',
      user_agent: request.headers.get('user-agent') || ''
    };

    if (targetWebhook.includes('XXX/YYY')) {
      // Mock / Dev response
      return new Response(JSON.stringify({ success: true, mock: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const webhookResponse = await fetch(targetWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (webhookResponse.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ success: false, error: 'Upstream error' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
