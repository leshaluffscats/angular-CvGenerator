export function parseJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(symbol => '%' + ('00' + symbol.charCodeAt(0).toString(16)).slice(-2))
      .join(''),
  );

  const parsedJwt = {
    email: JSON.parse(jsonPayload).email,
    issuedAt: JSON.parse(jsonPayload).iat,
    expires: JSON.parse(jsonPayload).exp,
  };

  return parsedJwt;
}
