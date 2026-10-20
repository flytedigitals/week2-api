async function createUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const result = document.getElementById('result');

  if (!name || !email) {
    result.innerText = "Please fill in both fields ❤️";
    return;
  }

  result.innerText = "Connecting to your backend...";

  try {
    const res = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    const data = await res.json();
    
    if (res.ok) {
      result.innerText = `Welcome ${data.user.name}! 🎉 Check console - You did it!`;
      console.log("SUCCESS FROM YOUR SERVER:", data);
    } else {
      result.innerText = "Error: " + data.message;
    }
  } catch (err) {
    result.innerText = "Is your server running? Run npm start on port 3000!";
  }
}
