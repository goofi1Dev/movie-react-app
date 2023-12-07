export async function signUp(user) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("user SignUp Error");
}
export async function signIn(user) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("user SignUp Error");
}
