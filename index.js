// Form interactivity 

const emailCollectorForm = document.getElementById("email-collector");

emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault();

  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get('firstName');
  let userEmail = ourFormData.get('emailAddress');
  // console.log(ourFormData.get("firstName"))
  // console.log(ourFormData.get('emailAddress'));

  let updatedHtmlContent = `
    <h2>Congratulations, ${userFirstName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>

    <p class="fine-print">You will get weekly BBQ tips delivered to: ${userEmail}</p>
  `;

  let ourMainContent = document.getElementById('main-content');
  ourMainContent.innerHTML = updatedHtmlContent;
})

