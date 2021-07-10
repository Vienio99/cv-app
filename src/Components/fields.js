const fields = {
  personal: {
    firstName: { text: '', type: 'text', title: 'First name', key: 1 },
    lastName: { text: '', type: 'text', title: 'Last name', key: 2 },
    email: { text: '', type: 'email', title: 'E-mail', key: 3 },
    phoneNumber: { text: '', type: 'number', title: 'Phone number', key: 4 }
  },
  experience: {
    position: { text: '', type: 'text', title: 'Position', key: 1 },
    company: { text: '', type: 'text', title: 'Company', key: 2 },
    location: { text: '', type: 'text', title: 'Location', key: 3 },
    startDate: { text: '', type: 'date', title: 'Start date', key: 4 },
    endDate: { text: '', type: 'date', title: 'End date', key: 5 }
  },
  education: {
    schoolName: { text: '', type: 'text', title: 'School name', key: 1 },
    subject: { text: '', type: 'text', title: 'Subject', key: 2 },
    degree: { text: '', type: 'text', title: 'Degree', key: 3 },
    location: { text: '', type: 'text', title: 'Location', key: 4 },
    startDate: { text: '', type: 'date', title: 'Start date', key: 5 },
    endDate: { text: '', type: 'date', title: 'End date', key: 6 }
  }
}

export default fields
