export default function handler(req, res) {
  // Clear the auth cookie by setting an expired cookie
  const cookie = `auth=deleted; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  res.setHeader('Set-Cookie', cookie);
  // Redirect back to home
  res.writeHead(302, { Location: '/' });
  res.end();
}
