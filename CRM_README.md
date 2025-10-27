# Travelo+ CRM Enquiry Management System

## Overview
This is a complete CRM (Customer Relationship Management) system for managing customer enquiries from the website contact form.

## Features
- ✅ Admin Login System
- ✅ Dashboard with Statistics
- ✅ View All Enquiries
- ✅ Filter Enquiries by Status (New, Pending, Contacted, Closed)
- ✅ Search Functionality
- ✅ Update Enquiry Status
- ✅ Delete Enquiries
- ✅ Automatic Enquiry Capture from Contact Form

## Files Created

### 1. **admin-login.html**
- Admin login page
- Default credentials:
  - **Username:** admin
  - **Password:** admin123
- Secure authentication system
- Session management using localStorage

### 2. **admin-dashboard.html**
- Main CRM dashboard
- Statistics cards showing:
  - Total Enquiries
  - New Enquiries
  - Pending Enquiries
  - Contacted Enquiries
- Enquiry management table with:
  - View details
  - Update status
  - Delete enquiry
- Filter and search functionality

### 3. **contact.html (Updated)**
- Contact form now saves enquiries to CRM
- Updated service options to match new services
- Automatic enquiry submission to localStorage
- Success message on form submission

### 4. **terms.html**
- Complete Terms & Conditions page
- Professional legal content
- Covers all services

### 5. **policy.html**
- Comprehensive Privacy Policy
- GDPR and CCPA compliant
- Data protection information

## How to Use

### For Website Visitors:
1. Visit the contact page
2. Fill out the contact form
3. Select a service from the dropdown
4. Submit the form
5. Enquiry is automatically saved to the CRM system

### For Administrators:

#### Login:
1. Navigate to `admin-login.html`
2. Enter credentials:
   - Username: `admin`
   - Password: `admin123`
3. Click Login

#### Dashboard:
1. View statistics at the top
2. See all enquiries in the table
3. Use filters to view specific status enquiries
4. Use search to find specific enquiries

#### Manage Enquiries:
1. **View Details:** Click "View" button to see full enquiry details
2. **Update Status:** In the detail modal, select new status and click "Update Status"
3. **Delete:** Click "Delete" button to remove an enquiry (with confirmation)

#### Status Types:
- **New:** Fresh enquiries from the contact form
- **Pending:** Enquiries being processed
- **Contacted:** Customer has been contacted
- **Closed:** Enquiry resolved

## Data Storage

The system uses **localStorage** for data storage:
- All enquiries are stored in browser's localStorage
- Data persists across browser sessions
- Admin session is managed via localStorage

### Important Notes:
- Data is stored locally in the browser
- Clearing browser data will delete all enquiries
- For production use, integrate with a backend database (MySQL, MongoDB, etc.)

## Security Features

1. **Login Protection:** Dashboard is only accessible after login
2. **Session Management:** Automatic redirect if not logged in
3. **Logout Function:** Secure logout with session cleanup

## Customization

### Change Admin Credentials:
Edit `admin-login.html` line 104-105:
```javascript
if (username === 'admin' && password === 'admin123') {
```

### Add More Status Options:
Edit `admin-dashboard.html` status select dropdown (around line 350)

### Modify Enquiry Fields:
Update both `contact.html` form and `admin-dashboard.html` display logic

## Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browsers

## Future Enhancements (Recommended)

1. **Backend Integration:**
   - Connect to PHP/Node.js backend
   - Store data in MySQL/MongoDB database
   - Email notifications for new enquiries

2. **Advanced Features:**
   - Export enquiries to CSV/Excel
   - Email templates for responses
   - Multiple admin users
   - Role-based access control
   - Analytics and reporting

3. **Security:**
   - Password hashing
   - JWT authentication
   - HTTPS enforcement
   - Rate limiting

## Support

For questions or issues:
- Email: support@travelokaav.com
- Phone: +1 (506) 701-2255 | +91-8882580756

## License

Copyright © 2025 Travelokaav. All Rights Reserved.
