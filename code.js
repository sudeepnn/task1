const userSlider = document.getElementById('userSlider');
const plan1 = document.getElementById('plan1');
const plan2 = document.getElementById('plan2');
const plan3 = document.getElementById('plan3');

userSlider.addEventListener('input', updateHighlightedPlan);

function updateHighlightedPlan() {
  const userCount = parseInt(userSlider.value);
  document.getElementById('userCount').textContent = userCount;
  
  // Remove the 'highlighted' class from all plans
  plan1.classList.remove('highlighted');
  plan2.classList.remove('highlighted');
  plan3.classList.remove('highlighted');

  // Highlight the appropriate plan based on user count
  if (userCount >= 0 && userCount < 10) {
    plan1.classList.add('highlighted');
  } else if (userCount >= 10 && userCount < 20) {
    plan2.classList.add('highlighted');
  } else {
    plan3.classList.add('highlighted');
  }
}

// Initial call to set the initial highlighted plan
updateHighlightedPlan();






// Get modal and buttons
const modal = document.getElementById('myModal');
const buttons = document.querySelectorAll('.open-modal-button');
const closeButton = document.querySelector('.close');

// Open modal when a button is clicked
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Close modal when the close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle form submission
// const form = document.getElementById('modalForm');

// form.addEventListener('submit', (event) => {
  // event.preventDefault();

  // // Get form data
  // const name = document.getElementById('name').value;
  // const email = document.getElementById('email').value;
  // const comments = document.getElementById('comments').value;

  // // You can now do something with the form data, e.g., send it to a server

  // const formData = {
  //   name: name,
  //   email: email,
  //   comments: comments,
  // };

  // // Send the form data as JSON to the specified URL
  // fetch('https://forms.maakeetoo.com/formapi/578', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     // Handle the response from the server (if needed)
  //     console.log('Server Response:', data);
  //   })
  //   .catch((error) => {
  //     // Handle any errors that occurred during the fetch
  //     console.error('Fetch Error:', error);
  //   });



  // Close the modal
//   modal.style.display = 'none';

//   // Reset the form
//   form.reset();
// });
