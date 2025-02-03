// Mock data for residents
const residents = [
  {
    apartmentNumber: '101',
    residentName: 'John Doe',
    contactInfo: 'john.doe@example.com',
    moveInDate: '2023-01-01',
    leaseDetails: '1 Year'
  },
  {
    apartmentNumber: '102',
    residentName: 'Jane Smith',
    contactInfo: 'jane.smith@example.com',
    moveInDate: '2023-02-15',
    leaseDetails: '6 Months'
  }
];

// Mock data for payments
const payments = [
  {
    apartmentNumber: '101',
    residentName: 'John Doe',
    rentStatus: 'Paid',
    electricBillStatus: 'Overdue',
    maintenanceStatus: 'Paid'
  },
  {
    apartmentNumber: '102',
    residentName: 'Jane Smith',
    rentStatus: 'Pending',
    electricBillStatus: 'Paid',
    maintenanceStatus: 'Pending'
  }
];

// Mock data for workers
const workers = [
  {
    workerName: 'Mike',
    jobTitle: 'Electrician',
    contactInfo: '555-1234',
    assignedTasks: 'Fix lights in 101',
    taskStatus: 'In Progress'
  },
  {
    workerName: 'Sarah',
    jobTitle: 'Cleaner',
    contactInfo: '555-5678',
    assignedTasks: 'Clean common area',
    taskStatus: 'Completed'
  }
];

// Mock data for maintenance requests
const maintenanceRequests = [
  {
    apartmentNumber: '101',
    residentName: 'John Doe',
    issueDescription: 'Leaking faucet in kitchen',
    requestDate: '2023-10-01',
    status: 'Pending'
  },
  {
    apartmentNumber: '102',
    residentName: 'Jane Smith',
    issueDescription: 'Broken AC',
    requestDate: '2023-10-05',
    status: 'In Progress'
  }
];

// Mock data for visitor logs
const visitorLogs = [
  {
    visitorName: 'Alice Johnson',
    apartmentNumber: '101',
    residentName: 'John Doe',
    checkInTime: '2023-10-10 10:00 AM',
    checkOutTime: '2023-10-10 12:00 PM'
  },
  {
    visitorName: 'Bob Williams',
    apartmentNumber: '102',
    residentName: 'Jane Smith',
    checkInTime: '2023-10-11 02:00 PM',
    checkOutTime: '2023-10-11 04:00 PM'
  }
];