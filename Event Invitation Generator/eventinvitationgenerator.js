const form = document.getElementById('event-form');
const message = document.getElementById('message');
const msgText = document.getElementById('msg-text');
const closeBtn = document.getElementById('close-btn');
const inviteSection = document.getElementById('inviteSection');

form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const eventName = document.getElementById('eventName').value.trim();
    const eventDate = document.getElementById('eventDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const eventDescription = document.getElementById('eventDescription').value.trim();
    const location = document.getElementById('location').value.trim();
  
    if (!eventName || !eventDate || !startTime || !endTime || !eventDescription || !location) {
      msgText.textContent = "Please fill in all fields";
      message.classList.remove("hidden");
      return;
    }
  
    form.style.display = "none";
    document.getElementById('form-heading').style.display = 'none';
    message.classList.add("hidden");
  
    const inviteHTML = `
      <div class="invite-card">
        <h2>YOU ARE INVITED</h2>
        <h3>To Join the</h3>
        <h1>${eventName}</h1>
        <p><strong>${new Date(eventDate).toDateString()}</strong></p>
        <p>${startTime} - ${endTime}</p>
        <p><strong>${location}</strong></p>
        <p>${eventDescription}</p>
      </div>
    `;
  
    inviteSection.innerHTML = inviteHTML;
  });  
