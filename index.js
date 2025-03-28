const form = document.querySelector("#mesaj");
const buton = document.querySelector("#buton");

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch("https://crucial-firstly-trout.ngrok-free.app/msg", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
  buton.innerText = "Gönderildi";
  setTimeout(() => {buton.innerText = "Bana mesaj gönder!"}, 1000)
});
