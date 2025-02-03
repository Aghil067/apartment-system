// Sidebar Navigation
const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
const pages = document.querySelectorAll('.page');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === target) {
        page.classList.add('active');
      }
    });
    sidebarLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Populate House Details
const houseDetailsBody = document.getElementById('house-details-body');
residents.forEach(resident => {
  const row = `
    <tr>
      <td>${resident.apartmentNumber}</td>
      <td>${resident.residentName}</td>
      <td>${resident.contactInfo}</td>
      <td>${resident.moveInDate}</td>
      <td>${resident.leaseDetails}</td>
      <td>
        <button class="edit-button"><i class="fas fa-edit"></i> Edit</button>
        <button class="delete-button"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `;
  houseDetailsBody.innerHTML += row;
});

// Populate Payment Status
const paymentStatusBody = document.getElementById('payment-status-body');
payments.forEach(payment => {
  const row = `
    <tr>
      <td>${payment.apartmentNumber}</td>
      <td>${payment.residentName}</td>
      <td>${payment.rentStatus}</td>
      <td>${payment.electricBillStatus}</td>
      <td>${payment.maintenanceStatus}</td>
      <td>
        <button class="edit-button"><i class="fas fa-edit"></i> Edit</button>
        <button class="delete-button"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `;
  paymentStatusBody.innerHTML += row;
});

// Populate Worker Management
const workerManagementBody = document.getElementById('worker-management-body');
workers.forEach(worker => {
  const row = `
    <tr>
      <td>${worker.workerName}</td>
      <td>${worker.jobTitle}</td>
      <td>${worker.contactInfo}</td>
      <td>${worker.assignedTasks}</td>
      <td>${worker.taskStatus}</td>
      <td>
        <button class="edit-button"><i class="fas fa-edit"></i> Edit</button>
        <button class="delete-button"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `;
  workerManagementBody.innerHTML += row;
});

// Populate Maintenance Requests
const maintenanceRequestsBody = document.getElementById('maintenance-requests-body');
maintenanceRequests.forEach(request => {
  const row = `
    <tr>
      <td>${request.apartmentNumber}</td>
      <td>${request.residentName}</td>
      <td>${request.issueDescription}</td>
      <td>${request.requestDate}</td>
      <td>${request.status}</td>
      <td>
        <button class="edit-button"><i class="fas fa-edit"></i> Edit</button>
        <button class="delete-button"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `;
  maintenanceRequestsBody.innerHTML += row;
});

// Populate Visitor Logs
const visitorLogsBody = document.getElementById('visitor-logs-body');
visitorLogs.forEach(log => {
  const row = `
    <tr>
      <td>${log.visitorName}</td>
      <td>${log.apartmentNumber}</td>
      <td>${log.residentName}</td>
      <td>${log.checkInTime}</td>
      <td>${log.checkOutTime}</td>
      <td>
        <button class="edit-button"><i class="fas fa-edit"></i> Edit</button>
        <button class="delete-button"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `;
  visitorLogsBody.innerHTML += row;
});

// Search Functionality for House Details
const searchHouseInput = document.getElementById('search-house');
searchHouseInput.addEventListener('input', () => {
  const searchTerm = searchHouseInput.value.toLowerCase();
  const rows = houseDetailsBody.querySelectorAll('tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});

// Search Functionality for Worker Management
const searchWorkerInput = document.getElementById('search-worker');
searchWorkerInput.addEventListener('input', () => {
  const searchTerm = searchWorkerInput.value.toLowerCase();
  const rows = workerManagementBody.querySelectorAll('tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});

// Search Functionality for Maintenance Requests
const searchMaintenanceInput = document.getElementById('search-maintenance');
searchMaintenanceInput.addEventListener('input', () => {
  const searchTerm = searchMaintenanceInput.value.toLowerCase();
  const rows = maintenanceRequestsBody.querySelectorAll('tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});

// Search Functionality for Visitor Logs
const searchVisitorInput = document.getElementById('search-visitor');
searchVisitorInput.addEventListener('input', () => {
  const searchTerm = searchVisitorInput.value.toLowerCase();
  const rows = visitorLogsBody.querySelectorAll('tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});

// Filter Payment Status
const filterPaymentSelect = document.getElementById('filter-payment');
filterPaymentSelect.addEventListener('change', () => {
  const filterValue = filterPaymentSelect.value;
  const rows = paymentStatusBody.querySelectorAll('tr');
  rows.forEach(row => {
    const status = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
    if (filterValue === 'all' || status === filterValue) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// Add New Resident (Example Functionality)
document.querySelector('#house-details .add-button').addEventListener('click', () => {
  alert('Add New Resident functionality will be implemented here.');
});

// Add New Worker (Example Functionality)
document.querySelector('#worker-management .add-button').addEventListener('click', () => {
  alert('Add New Worker functionality will be implemented here.');
});

// Add New Maintenance Request (Example Functionality)
document.querySelector('#maintenance-requests .add-button').addEventListener('click', () => {
  alert('Add New Maintenance Request functionality will be implemented here.');
});

// Add New Visitor (Example Functionality)
document.querySelector('#visitor-logs .add-button').addEventListener('click', () => {
  alert('Add New Visitor functionality will be implemented here.');
});

// Add New Announcement (Example Functionality)
document.querySelector('#community-announcements .add-button').addEventListener('click', () => {
  alert('Add New Announcement functionality will be implemented here.');
});