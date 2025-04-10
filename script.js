const students = [
  { rollNumber: "22WJ1A04K3", name: "MOTHI ABHIRAM", parentPhone: "9701016317", parentName: "", studentPhone: "9963813930" },
  { rollNumber: "22WJ1A04K4", name: "MOTTE PUJITHA", parentPhone: "9573527903", parentName: "", studentPhone: "9347790933" },
  { rollNumber: "22WJ1A04K5", name: "MOTTE SATHWIKA", parentPhone: "9948385577", parentName: "", studentPhone: "8500520577" },
  { rollNumber: "22WJ1A04K6", name: "MUDDASANI MANISHA", parentPhone: "9110364970", parentName: "", studentPhone: "8639654060" },
  { rollNumber: "22WJ1A04K7", name: "MUDIGONDA SINDHUJA", parentPhone: "9603134441", parentName: "", studentPhone: "9032480948" },
  { rollNumber: "22WJ1A04K8", name: "MUDRABOINA LAXMI PRASANNA", parentPhone: "9959057116", parentName: "", studentPhone: "8019853915" },
  { rollNumber: "22WJ1A04K9", name: "MUKESH REDDY GUNDA", parentPhone: "9014476299", parentName: "", studentPhone: "6304421697" },
  { rollNumber: "22WJ1A04L0", name: "MULAMALLA SATHWIK REDDY", parentPhone: "9100334104", parentName: "", studentPhone: "9948240153" },
  { rollNumber: "22WJ1A04L1", name: "MUMMADI SRINIDHI", parentPhone: "9848455517", parentName: "", studentPhone: "9848315517" },
  { rollNumber: "22WJ1A04L2", name: "N SREE BHAVANI", parentPhone: "8978117975", parentName: "", studentPhone: "7093477790" },
  { rollNumber: "22WJ1A04L3", name: "NADIMINTI PRASANTH REDDY", parentPhone: "6281416184", parentName: "", studentPhone: "6304800846" },
  { rollNumber: "22WJ1A04L4", name: "NALLAGASU SREEJA", parentPhone: "9963708077", parentName: "", studentPhone: "9490021318" },
  { rollNumber: "22WJ1A04L5", name: "NALLANA ADITYA", parentPhone: "9618455065", parentName: "", studentPhone: "8130527665" },
  { rollNumber: "22WJ1A04L6", name: "NAMINDLA CHANDINI", parentPhone: "7997563407", parentName: "", studentPhone: "9640350697" },
  { rollNumber: "22WJ1A04L7", name: "NANDAGIRI VENKATA RAVIKIRAN", parentPhone: "9765444061", parentName: "", studentPhone: "9689326604" },
  { rollNumber: "22WJ1A04L8", name: "NAREDLA SRAVANKUMAR", parentPhone: "9989910353", parentName: "", studentPhone: "8106970384" },
  { rollNumber: "22WJ1A04L9", name: "NARIVEDDI ASHISH", parentPhone: "9059557878", parentName: "", studentPhone: "9182211334" },
  { rollNumber: "22WJ1A04M0", name: "NARVA DHEERAJ GOUD", parentPhone: "9440486513", parentName: "", studentPhone: "7794825107" },
  { rollNumber: "22WJ1A04M1", name: "NEELAM SRAVANTHI", parentPhone: "9490030191", parentName: "", studentPhone: "9440974047" },
  { rollNumber: "22WJ1A04M2", name: "NENAVATH AMRUTHA", parentPhone: "9381138715", parentName: "", studentPhone: "9182643072" },
  { rollNumber: "22WJ1A04M3", name: "NENAVATH SURESH", parentPhone: "8309038134", parentName: "", studentPhone: "6305540422" },
  { rollNumber: "22WJ1A04M4", name: "NENAVATH TEJA", parentPhone: "9866893791", parentName: "", studentPhone: "9391180262" },
  { rollNumber: "22WJ1A04M5", name: "NOMULA MAHENDAR", parentPhone: "8790278781", parentName: "", studentPhone: "9550447878" },
  { rollNumber: "22WJ1A04M6", name: "NOMULA MAYURI", parentPhone: "8919275997", parentName: "", studentPhone: "8919275997" },
  { rollNumber: "22WJ1A04M7", name: "OLEPU SAIKUMAR", parentPhone: "9030427020", parentName: "", studentPhone: "8639670488" },
  { rollNumber: "22WJ1A04M8", name: "ORSU NAVEEN", parentPhone: "7730011441", parentName: "", studentPhone: "9515540214" },
  { rollNumber: "22WJ1A04M9", name: "P R S SANTOSH NAIDU", parentPhone: "9866221031", parentName: "", studentPhone: "7075351027" },
  { rollNumber: "22WJ1A04N0", name: "P VENKATESHWAR REDDY", parentPhone: "6301840695", parentName: "", studentPhone: "7989517258" },
  { rollNumber: "22WJ1A04N1", name: "PADALA SAI PRATHYUSHA", parentPhone: "8801270620", parentName: "", studentPhone: "6303111711" },
  { rollNumber: "22WJ1A04N2", name: "PADAMATI ANUSH REDDY", parentPhone: "9492627481", parentName: "", studentPhone: "6281917597" },
  { rollNumber: "22WJ1A04N3", name: "PAGIDIMARRI NAVEEN", parentPhone: "9701771652", parentName: "", studentPhone: "8184940014" },
  { rollNumber: "22WJ1A04N4", name: "PAGIDIPALLI DURGA RAO", parentPhone: "7286907163", parentName: "", studentPhone: "6309857063" },
  { rollNumber: "22WJ1A04N5", name: "PALLA SAI TEJA", parentPhone: "9948978270", parentName: "", studentPhone: "9948215498" },
  { rollNumber: "22WJ1A04N6", name: "PARMESHWAR UPADHYAY", parentPhone: "9553605992", parentName: "", studentPhone: "9618032802" },
  { rollNumber: "22WJ1A04N7", name: "PATEL UDAY KIRAN REDDY", parentPhone: "9908394331", parentName: "", studentPhone: "6301974834" },
  { rollNumber: "22WJ1A04N8", name: "PATHURI SANTHOSH REDDY", parentPhone: "9963785449", parentName: "", studentPhone: "7569429156" },
  { rollNumber: "22WJ1A04N9", name: "PENTAPATI HEMANTH KUMAR", parentPhone: "8125263555", parentName: "", studentPhone: "9246063555" },
  { rollNumber: "22WJ1A04P0", name: "PINNAM HARSHAVARDHAN", parentPhone: "8978365784", parentName: "", studentPhone: "6305006860" },
  { rollNumber: "22WJ1A04P1", name: "PIPPIRI SHIVAPRASAD", parentPhone: "9553010238", parentName: "", studentPhone: "9848465719" },
  { rollNumber: "22WJ1A04P2", name: "POLISHETTY SAI KIRAN", parentPhone: "9705088261", parentName: "", studentPhone: "7207533072" },
  { rollNumber: "22WJ1A04P3", name: "POLWAR OM KRISHNA TEJA", parentPhone: "9010140200", parentName: "", studentPhone: "6303699441" },
  { rollNumber: "22WJ1A04P4", name: "PONNAGANDLA ROHINI", parentPhone: "9948612497", parentName: "", studentPhone: "6305866029" },
  { rollNumber: "22WJ1A04P5", name: "POREDDY AVINASH REDDY", parentPhone: "9949201506", parentName: "", studentPhone: "6302173378" },
  { rollNumber: "22WJ1A04P6", name: "POTHAGANI KAMALAKAR", parentPhone: "9347097547", parentName: "", studentPhone: "9652480489" },
  { rollNumber: "22WJ1A04P7", name: "POTHURAJU RAJU", parentPhone: "8790479209", parentName: "", studentPhone: "9121972693" },
  { rollNumber: "22WJ1A04P8", name: "PUCHAKAYALA SRI CHARAN REDDY", parentPhone: "8465954914", parentName: "", studentPhone: "7671953387" },
  { rollNumber: "22WJ1A04P9", name: "PULI ARUN", parentPhone: "9440838392", parentName: "", studentPhone: "6302171165" },
  { rollNumber: "22WJ1A04Q1", name: "PULI SUPRIYA", parentPhone: "7675848260", parentName: "", studentPhone: "9391540262" },
  { rollNumber: "22WJ1A04Q2", name: "PULLAKANDAM LAXMI VENKATA NARASIMHA SWAMY", parentPhone: "9441271382", parentName: "", studentPhone: "6304621330" },
  { rollNumber: "22WJ1A04Q3", name: "PURAM RAKESH", parentPhone: "9014065565", parentName: "", studentPhone: "8639867875" },
  { rollNumber: "22WJ1A04Q4", name: "PUSULURI MEGHANA", parentPhone: "8121389339", parentName: "", studentPhone: "7013401081" },
  { rollNumber: "22WJ1A04Q5", name: "R ANAND", parentPhone: "7075255280", parentName: "", studentPhone: "9390916046" },
  { rollNumber: "22WJ1A04Q6", name: "RAGAPURAM PRANAB SAI", parentPhone: "8497919111", parentName: "", studentPhone: "7680067675" },
  { rollNumber: "22WJ1A04Q7", name: "RAMINENI YASWITHA", parentPhone: "7036332286", parentName: "", studentPhone: "7815956124" },
  { rollNumber: "22WJ1A04Q8", name: "RANABOTHU NITHIN REDDY", parentPhone: "9989900516", parentName: "", studentPhone: "7075201361" },
  { rollNumber: "22WJ1A04Q9", name: "RANERU NARESH", parentPhone: "9963269357", parentName: "", studentPhone: "9573461594" },
  { rollNumber: "22WJ1A04R0", name: "RANGAPPA SAI KIRAN", parentPhone: "7036898066", parentName: "", studentPhone: "9398601171" },
  { rollNumber: "22WJ1A04R1", name: "RANGAREDDY LAXMI PRASANNA", parentPhone: "9949207419", parentName: "", studentPhone: "9866986521" },
  { rollNumber: "22WJ1A04R2", name: "RANKIREDDY OM SAI VARSHITHA", parentPhone: "9295003580", parentName: "", studentPhone: "9014697651" },
  { rollNumber: "22WJ1A04R3", name: "RAO VIJAY RAO", parentPhone: "9848912071", parentName: "", studentPhone: "7386880115" },
  { rollNumber: "22WJ1A04R4", name: "RENUKUNTA NIKHITHA", parentPhone: "9951390080", parentName: "", studentPhone: "7661987725" },
  { rollNumber: "22WJ1A04R5", name: "RESHMA", parentPhone: "9959291693", parentName: "", studentPhone: "9041909235" },
  { rollNumber: "22WJ1A04R6", name: "S KRISHNA TEJA", parentPhone: "9652050917", parentName: "", studentPhone: "9553477673" },
  { rollNumber: "23WJ5A0422", name: "R BOJA RAJU", parentPhone: "9182571047", parentName: "", studentPhone: "9346241543" },
  { rollNumber: "23WJ5A0423", name: "RENA SUKANYA", parentPhone: "9347342845", parentName: "", studentPhone: "9347342845" },
  { rollNumber: "23WJ5A0424", name: "SAKINALA KRISHNAGEETHIKA", parentPhone: "9948676602", parentName: "", studentPhone: "9059442608" },
  { rollNumber: "23WJ5A0425", name: "SATLA GANESH", parentPhone: "9391407627", parentName: "", studentPhone: "8985880785" },
  { rollNumber: "23WJ5A0426", name: "SHIVVA VINOD KUMAR", parentPhone: "9550148890", parentName: "", studentPhone: "7288803087" }
];
   
   let messageLogs = [];
   
   // FACULTY CONFIGURATION
   // Change this value when deploying to a different faculty
   const FACULTY_NAME = "Shashikala";
   const DISPLAY_FACULTY_NAME = "Shashikala"; //donot put underscore type full name or put dot
   
   // Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCs1Wgew-Y1hcY8xIUm9uFagdeByDTDGU0",
    authDomain: "collegeapp-59309.firebaseapp.com",
    projectId: "collegeapp-59309",
    storageBucket: "collegeapp-59309.firebasestorage.app",
    messagingSenderId: "298826677970",
    appId: "1:298826677970:web:3989fed84dd5bb4d73f70b"
  };
  
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   // Get a reference to the database service
   const database = firebase.database();
   
   // Replace localStorageDatabase with firebaseDatabase
   const firebaseDatabase = {
     saveMessage: function (log) {
       // Always save under the configured faculty name
       return database.ref(`faculty/${FACULTY_NAME}`).push(log);
     },
     getAllMessages: function () {
       return database.ref(`faculty/${FACULTY_NAME}`).once('value')
         .then(snapshot => {
           const messages = [];
           snapshot.forEach(childSnapshot => {
             messages.push(childSnapshot.val());
           });
           return messages;
         });
     },
     cleanupOldMessages: function () {
       const oneMonthAgo = new Date();
       oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
       
       return database.ref(`faculty/${FACULTY_NAME}`).once('value')
         .then(snapshot => {
           const updates = {};
           snapshot.forEach(childSnapshot => {
             const message = childSnapshot.val();
             if (new Date(message.timestamp) <= oneMonthAgo) {
               updates[childSnapshot.key] = null;
             }
           });
           return database.ref(`faculty/${FACULTY_NAME}`).update(updates);
         });
     },
     clearAllLogs: function () {
       return database.ref(`faculty/${FACULTY_NAME}`).remove();
     }
   };
   
   document.addEventListener('DOMContentLoaded', function () {
     fetchMessagesFromServer();
     periodicCleanup();
     setupEventListeners();
   });
   
   function fetchMessagesFromServer() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         messageLogs = messages;
         updateMessageLogs();
       })
       .catch(error => console.error('Error fetching messages:', error));
   }
   
   function periodicCleanup() {
     firebaseDatabase.cleanupOldMessages()
       .then(() => console.log('Old messages cleaned up'))
       .catch(error => console.error('Error cleaning up messages:', error));
   }
   
   function setupEventListeners() {
     const searchBtn = document.getElementById('searchBtn');
     if (searchBtn) searchBtn.addEventListener('click', toggleSearch);
   
     const whatsappParentBtn = document.getElementById('whatsappParentBtn');
     if (whatsappParentBtn) {
       whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
     }
   
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     if (sendCustomMessageBtn) {
       sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
     }
   
     const printBtn = document.getElementById('printBtn');
     if (printBtn) printBtn.addEventListener('click', openPrintModal);
   
     const closeModalBtn = document.getElementById('closeModal');
     if (closeModalBtn) closeModalBtn.addEventListener('click', closePrintModal);
   
     const printPreviewBtn = document.getElementById('printPreviewBtn');
     if (printPreviewBtn) printPreviewBtn.addEventListener('click', showPrintPreview);
   
     const clearLogsBtn = document.getElementById('clearLogsBtn');
     if (clearLogsBtn) clearLogsBtn.addEventListener('click', clearAllLogs);
   
     // Initialize date inputs with current date range
     const today = new Date();
     const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
   
     const startDateInput = document.getElementById('startDate');
     const endDateInput = document.getElementById('endDate');
     if (startDateInput) startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
     if (endDateInput) endDateInput.value = today.toISOString().split('T')[0];
   
     const exportLogsBtn = document.getElementById('exportLogsBtn');
     if (exportLogsBtn) exportLogsBtn.addEventListener('click', exportMessageLogs);
   
     const studentsBtn = document.getElementById('studentsBtn');
     if (studentsBtn) studentsBtn.addEventListener('click', openStudentsPage);
   
     // Add event listener for the new print button
     const newPrintBtn = document.getElementById('newPrintBtn');
     if (newPrintBtn) newPrintBtn.addEventListener('click', openPrintModal);
   
     const allParentsBtn = document.getElementById('allParentsBtn');
     if (allParentsBtn) allParentsBtn.addEventListener('click', toggleBulkMessageForm);
   
     const bulkMessageContent = document.getElementById('bulkMessageContent');
     if (bulkMessageContent) {
       bulkMessageContent.addEventListener('input', saveBulkMessage);
       loadBulkMessage(); // Load the saved message when the page loads
     }
  
     const dialNumberBtn = document.getElementById('dialNumberBtn');
     if (dialNumberBtn) dialNumberBtn.addEventListener('click', openDialPad);
   }
   
   function toggleSearch() {
     const profileCard = document.getElementById('profileCard');
     if (profileCard.style.display === 'none') {
       searchStudent();
     } else {
       profileCard.style.display = 'none';
     }
   }
   
   function toggleWhatsAppParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
       customMessageArea.style.display = 'block';
     } else {
       customMessageArea.style.display = 'none';
     }
   }
   
   function searchStudent() {
     const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
     const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
     const profileCard = document.getElementById('profileCard');
   
     // Hide the profile card first
     profileCard.style.display = 'none';
   
     if (student) {
       document.getElementById('studentName').textContent = student.name;
       document.getElementById('studentRoll').textContent = student.rollNumber;
       document.getElementById('parentName').textContent = student.parentName || 'Not available';
       document.getElementById('parentPhone').textContent = student.parentPhone;
       document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';
   
       profileCard.style.display = 'block';
       profileCard.classList.add('fade-in');
     } else {
       alert('Student not found. Please check the roll number and try again.');
     }
   }
   
   function toggleBulkMessageForm() {
     const bulkMessageForm = document.getElementById('bulkMessageForm');
     if (bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '') {
       bulkMessageForm.style.display = 'block';
       bulkMessageForm.classList.add('fade-in');
       document.getElementById('bulkMessageContent').value = ''; // Clear previous message
     } else {
       bulkMessageForm.style.display = 'none';
     }
   }
   
   function toggleCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     if (crProfiles.style.display === 'none') {
       showCRProfiles();
       crProfiles.style.display = 'block';
       crProfiles.classList.add('fade-in');
     } else {
       crProfiles.style.display = 'none';
     }
   }
   
   function showCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     crProfiles.innerHTML = ''; // Clear existing profiles
   
     const crs = [
      { name: 'MEGHANA', rollNumber: '22WJ1A04Q4', email: '', photo: '' },
      
      
    ];
   
     crs.forEach(cr => {
       const profileCard = document.createElement('div');
       profileCard.className = 'profile-card cr-card';
       profileCard.innerHTML = `
         <div class="cr-info">
           <h3>${cr.name}</h3>
           <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
           <p><strong>Email:</strong> ${cr.email}</p>
           <button onclick="callCR('${cr.rollNumber}')">Call</button>
           <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
         </div>
       `;
       crProfiles.appendChild(profileCard);
     });
   }
   
   function openPrintModal() {
     document.getElementById('printModal').style.display = 'block';
   }
   
   function closePrintModal() {
     document.getElementById('printModal').style.display = 'none';
   }
   
   function filterData() {
     const startDate = new Date(document.getElementById('startDate').value);
     const endDate = new Date(document.getElementById('endDate').value);
     endDate.setHours(23, 59, 59, 999); // Set to end of day

     // This path is correct - it's using the faculty-specific path
     return firebase.database().ref(`faculty/${FACULTY_NAME}`).once('value')
       .then(snapshot => {
         const messages = [];
         snapshot.forEach(childSnapshot => {
           const message = childSnapshot.val();
           const messageDate = new Date(message.timestamp);
           
           // Ensure recipient is always 10 digits
           if (message.recipient && message.recipient.startsWith('+91')) {
             message.recipient = message.recipient.slice(3);
           }
           
           if (messageDate >= startDate && messageDate <= endDate) {
             messages.push(message);
           }
         });
         
         // Sort messages by timestamp (newest first)
         messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
         
         return messages;
       });
   }
   
   function generatePrintableTable(data) {
    let tableHtml = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p>Message Logs Report</p>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Parent Name</th>
            <th style="width: 25%;">Message</th>
            <th>Status</th>
            <th>Platform</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    let currentDate = '';
    data.forEach(log => {
      const date = new Date(log.timestamp);
      const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const highlightClass = dateString !== currentDate ? 'highlight' : '';
      currentDate = dateString;
  
      const formattedPhone = log.recipient ? log.recipient.slice(-10) : 'N/A';
      tableHtml += `
        <tr class="${highlightClass}">
          <td>${dateString}</td>
          <td>${log.sender || 'N/A'}</td>
          <td>${formattedPhone}</td>
          <td>${log.studentName || 'N/A'}</td>
          <td>${log.studentRoll || 'N/A'}</td>
          <td>${log.parentName || 'N/A'}</td>
          <td style="width: 25%;">${log.message || 'N/A'}</td>
          <td>${log.status || 'N/A'}</td>
          <td>${log.platform || 'N/A'}</td>
          <td>${log.duration || 'N/A'}</td>
        </tr>
      `;
    });
  
    tableHtml += `
        </tbody>
      </table>
      <div style="text-align: center; margin-top: 20px;">
       
      </div>
    `;
  
    return tableHtml;
  }
   
   function showPrintPreview() {
     filterData().then(filteredData => {
       const printContent = generatePrintableTable(filteredData);
       const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
       const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  
       // Open a new window for the print preview
       const printWindow = window.open('', '_blank');
       printWindow.document.write(`
         <html>
           <head>
             <title>Message Logs ${startDate} to ${endDate}</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 margin: 0;
                 padding: 20px;
               }
               .header, .footer {
                 text-align: center;
                 margin-bottom: 20px;
               }
               table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
               }
               th, td {
                 border: 1px solid #ddd;
                 padding: 8px;
                 text-align: left;
                 font-size: 12px;
               }
               th {
                 background-color: #f2f2f2;
                 font-weight: bold;
               }
               .highlight {
                 background-color: #ffffd0;
               }
               td:nth-child(7) {
                 width: 25%;
                 word-break: break-word;
               }
               @media print {
                 @page {
                   size: A4 landscape;
                   margin: 10mm;
                 }
                 body {
                   padding: 0;
                 }
                 .no-print {
                   display: none;
                 }
               }
             </style>
           </head>
           <body>
             <div class="header">
               <h2>${DISPLAY_FACULTY_NAME} - Message Logs Report</h2>
               <p>Date Range: ${startDate} to ${endDate}</p>
             </div>
             ${printContent}
             <div class="footer">
               
             </div>
             <div class="no-print" style="text-align: center; margin-top: 20px;">
               <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
               <button onclick="downloadCSV()" style="background-color: #008CBA; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Download CSV</button>
             </div>
             <script>
               function downloadCSV() {
                 const rows = document.querySelectorAll('table tr');
                 let csv = [];
                 for (let i = 0; i < rows.length; i++) {
                   let row = [], cols = rows[i].querySelectorAll('td, th');
                   for (let j = 0; j < cols.length; j++) {
                     let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ');
                     data = data.replace(/"/g, '""');
                     row.push('"' + data + '"');
                   }
                   csv.push(row.join(','));
                 }
                 let csvContent = csv.join('\\n');
                 let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                 let link = document.createElement('a');
                 if (link.download !== undefined) {
                   let url = URL.createObjectURL(blob);
                   link.setAttribute('href', url);
                   link.setAttribute('download', 'Message_Logs_${startDate}_to_${endDate}.csv');
                   link.style.visibility = 'hidden';
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
                 }
               }
               window.onload = function() {
                 // Automatically open print dialog when the page loads
                 window.print();
               }
             </script>
           </body>
         </html>
       `);
       printWindow.document.close();
  
       // Hide the modal
       document.getElementById('printModal').style.display = 'none';
     });
   }
   
   function updateMessageLogs() {
     const logsContainer = document.getElementById('messageLogs');
     logsContainer.innerHTML = '';
   
     // Only show the most recent message
     if (messageLogs.length > 0) {
       const mostRecentLog = messageLogs[messageLogs.length - 1];
       const logEntry = document.createElement('p');
       const timestamp = new Date(mostRecentLog.timestamp);
       const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
       logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
       logEntry.classList.add('fade-in');
       logsContainer.appendChild(logEntry);
     }
   
     // Add a message indicating there are more logs if applicable
     if (messageLogs.length > 1) {
       const moreLogsMessage = document.createElement('p');
       moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
       moreLogsMessage.style.fontStyle = 'italic';
       moreLogsMessage.style.color = '#666';
       logsContainer.appendChild(moreLogsMessage);
     }
   }
   
   function clearAllLogs() {
     if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
       firebaseDatabase.clearAllLogs()
         .then(() => {
           messageLogs = [];
           updateMessageLogs();
           alert("All message logs have been cleared.");
         })
         .catch(error => {
           console.error('Error clearing logs:', error);
           alert("An error occurred while clearing logs. Please try again.");
         });
     }
   }
   
   function callParent() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (parentPhone) {
       const startTime = new Date();
       window.location.href = `tel:${parentPhone}`;
       
       // Create and show popup after 10 seconds
       setTimeout(() => {
         const popup = document.createElement('div');
         popup.style.position = 'fixed';
         popup.style.left = '50%';
         popup.style.top = '50%';
         popup.style.transform = 'translate(-50%, -50%)';
         popup.style.backgroundColor = '#ffffff';
         popup.style.padding = '30px';
         popup.style.borderRadius = '10px';
         popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
         popup.style.zIndex = '1000';
         popup.style.fontFamily = 'Arial, sans-serif';
         popup.style.textAlign = 'center';
         popup.innerHTML = `
           <h3 style="margin-top: 0; color: #333;">Call Status</h3>
           <p style="margin-bottom: 20px; color: #666;">Was the call answered?</p>
           <button id="yesBtn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">Yes</button>
           <button id="noBtn" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">No</button>
         `; 
         document.body.appendChild(popup);
   
         document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
         document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));
   
         function handleCallResponse(wasAnswered) {
           const endTime = new Date();
           const durationInSeconds = Math.round((endTime - startTime) / 1000);
           let durationString;
           
           if (durationInSeconds >= 60) {
             const minutes = Math.floor(durationInSeconds / 60);
             const seconds = durationInSeconds % 60;
             durationString = `${minutes} min${minutes > 1 ? 's' : ''} ${seconds} sec${seconds !== 1 ? 's' : ''}`;
           } else {
             durationString = `${durationInSeconds} sec${durationInSeconds !== 1 ? 's' : ''}`;
           }
           
           // Log the call
           const log = {
             sender: DISPLAY_FACULTY_NAME,
             recipient: parentPhone,
             studentName: studentName,
             studentRoll: studentRoll,
             parentName: parentName,
             message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
             timestamp: new Date().toISOString(),
             status: wasAnswered ? 'answered' : 'not answered',
             platform: 'Phone',
             duration: wasAnswered ? durationString : 'N/A'
           };
           firebaseDatabase.saveMessage(log)
             .then(() => fetchMessagesFromServer())
             .catch(error => console.error('Error saving message:', error));
           document.body.removeChild(popup);
         }
       }, 10000);
     } else {
       alert('Parent phone number not available.');
     }
   }
   
   function callStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       window.location.href = `tel:${studentPhone}`;
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function whatsappParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     customMessageArea.style.display = 'block';
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
   }
   
   function whatsappStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent('Hello, this is a message from your faculty.');
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the WhatsApp message
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: 'WhatsApp message sent to student',
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function sendCustomWhatsAppMessage() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     const customMessage = document.getElementById('customMessageContent').value;
     
     if (parentPhone && customMessage.trim() !== '') {
       // Format the phone number with country code
       const formattedPhone = `+91${parentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent(customMessage);
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the custom WhatsApp message
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: customMessage,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
       
       // Clear and hide the custom message area
       document.getElementById('customMessageContent').value = '';
       document.getElementById('customMessageArea').style.display = 'none';
     } else {
       alert('Please enter a message and ensure parent phone number is available.');
     }
   }
   
   function exportMessageLogs() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         const today = new Date();
         const dateString = today.toISOString().split('T')[0];
         const csvContent = "data:text/csv;charset=utf-8,"
           + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
           + messages.map(e => {
             return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
           }).join("\n");
   
         const encodedUri = encodeURI(csvContent);
         const link = document.createElement("a");
         link.setAttribute("href", encodedUri);
         link.setAttribute("download", `message_logs_${dateString}.csv`);
         document.body.appendChild(link);
         link.click();
       })
       .catch(error => console.error('Error exporting logs:', error));
   }
   
   function callCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       window.location.href = `tel:${cr.studentPhone}`;
     } else {
       alert('Phone number not available for this CR.');
     }
   }
   
   function whatsappCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
       window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
     } else {
       alert('WhatsApp number not available for this CR.');
     }
   }
   
   function openStudentsPage() {
     window.open('students.html', '_blank');
   }
   
   function sendBulkWhatsAppMessage(parentPhones, message) {
     const encodedMessage = encodeURIComponent(message);
     const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
     window.open(whatsappUrl, '_blank');
   }
   
   function sendBulkSMSMessage(parentPhones, message) {
     const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
     window.location.href = smsUrl;
   }
   
   function sendBulkMessage(group) {
     const messageTextArea = document.getElementById('bulkMessageContent');
     const message = messageTextArea.value;
     if (message.trim() === '') {
       alert('Please enter a message.');
       return;
     }
   
     let parentPhones = students.map(student => student.parentPhone);
     let startIndex, endIndex;
   
     switch (group) {
       case 'first':
         startIndex = 0;
         endIndex = 25;
         break;
       case 'second':
         startIndex = 25;
         endIndex = 50;
         break;
       case 'third':
         startIndex = 50;
         endIndex = parentPhones.length;
         break;
     }
   
     parentPhones = parentPhones.slice(startIndex, endIndex);
     const phoneNumbers = parentPhones.join(',');
   
     // Open SMS app with pre-filled message for bulk sending
     window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
   
     // Log the bulk message to Firebase
     const bulkLog = {
       sender: DISPLAY_FACULTY_NAME,
       recipients: parentPhones,
       message: message,
       timestamp: new Date().toISOString(),
       status: 'sent',
       platform: 'SMS (Bulk)',
       group: group
     };
   
     // Save bulk message log
     firebaseDatabase.saveMessage(bulkLog)
       .then(() => console.log('Bulk message logged successfully'))
       .catch(error => console.error('Error saving bulk message:', error));
   
     // Log individual messages
     parentPhones.forEach(phone => {
       const student = students.find(s => s.parentPhone === phone);
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: phone,
         studentName: student ? student.name : 'N/A',
         studentRoll: student ? student.rollNumber : 'N/A',
         parentName: student ? student.parentName : 'N/A',
         message: message,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'SMS',
         bulkGroup: group
       };
       firebaseDatabase.saveMessage(log)
         .then(() => console.log('Individual message logged successfully'))
         .catch(error => console.error('Error saving individual message:', error));
     });
   
     // Fetch updated messages
     fetchMessagesFromServer();
   
     alert(`Bulk message sent to ${group} group (${parentPhones.length} recipients)`);
   }
   
   // Add this function to save the message to local storage
   function saveBulkMessage() {
     const message = document.getElementById('bulkMessageContent').value;
     localStorage.setItem('bulkMessage', message);
   }
  
   // Add this function to load the message from local storage
   function loadBulkMessage() {
     const message = localStorage.getItem('bulkMessage') || '';
     document.getElementById('bulkMessageContent').value = message;
   }
  
   function openDialPad(event) {
     // Get the parent profile card of the clicked button
     const profileCard = event.target.closest('.profile-card');
    
     // Extract information from this specific card
     const studentPhone = profileCard.querySelector('#studentPhone').textContent;
     const studentName = profileCard.querySelector('#studentName').textContent;
     const studentRoll = profileCard.querySelector('#studentRoll').textContent;
     const parentName = profileCard.querySelector('#parentName').textContent;
  
     localStorage.setItem('dialpadInfo', JSON.stringify({
       phone: studentPhone,
       studentName: studentName,
       studentRoll: studentRoll,
       parentName: parentName
     }));
  
     window.location.href = 'dialpad.html';
   }
  
   // Add this function to add sample data (for testing purposes)
   // document.addEventListener('DOMContentLoaded', addSampleData);

// Add this showMessageLogs function to your script.js
function showMessageLogs() {
  // Hide other sections
  hideAllSections();
  
  // Show message logs section
  document.getElementById('messageLogs').style.display = 'block';
  
  // Update active tab in navbar
  updateActiveTab('messages');
  
  // Load/refresh message logs
  loadMessageLogs();
}

// Helper function to hide all sections
function hideAllSections() {
  // Hide profile card
  document.getElementById('profileCard').style.display = 'none';
  
  // Hide bulk message form if it exists
  if (document.getElementById('bulkMessageForm')) {
    document.getElementById('bulkMessageForm').style.display = 'none';
  }
  
  // Hide message form
  if (document.getElementById('messageForm')) {
    document.getElementById('messageForm').style.display = 'none';
  }
  
  // Hide CR profiles
  if (document.getElementById('crProfiles')) {
    document.getElementById('crProfiles').style.display = 'none';
  }
}

// Function to update active tab in the navbar
function updateActiveTab(activeTab) {
  // Remove active class from all tabs
  document.querySelectorAll('.nav-item').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Add active class to selected tab
  if (activeTab === 'home') {
    document.querySelector('.nav-item:nth-child(1)').classList.add('active');
  } else if (activeTab === 'messages') {
    document.querySelector('.nav-item:nth-child(2)').classList.add('active');
  } else if (activeTab === 'students') {
    document.querySelector('.nav-item:nth-child(3)').classList.add('active');
  }
}

// Load message logs from Firebase
function loadMessageLogs() {
  const logsContainer = document.getElementById('logsContent');
  
  // Clear existing logs display
  logsContainer.innerHTML = '';
  
  // Get logs from Firebase using faculty-specific path
  firebaseDatabase.getAllMessages()
    .then(logs => {
      if (logs.length === 0) {
        // Display a message if no logs exist
        logsContainer.innerHTML = '<p class="no-logs">No message logs found.</p>';
        return;
      }
      
      // Sort logs by timestamp (newest first)
      logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      // Create log entries
      logs.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        
        const formattedDate = new Date(log.timestamp).toLocaleString();
        
        logEntry.innerHTML = `
          <div class="log-header">
            <span class="log-recipient">${log.recipient || 'N/A'}</span>
            <span class="log-timestamp">${formattedDate}</span>
          </div>
          <div class="log-message">${log.message || 'N/A'}</div>
        `;
        
        logsContainer.appendChild(logEntry);
      });
    })
    .catch(error => {
      console.error('Error loading message logs:', error);
      logsContainer.innerHTML = '<p class="error">Error loading messages. Please try again later.</p>';
    });
}

// Function to show home screen (main search interface)
function showHomeScreen() {
  hideAllSections();
  updateActiveTab('home');
  
  // Optional: Clear search field
  document.getElementById('rollNumber').value = '';
}

// Add event listener for the home tab
document.addEventListener('DOMContentLoaded', function() {
  // Set up click events for bottom navbar
  const homeTab = document.querySelector('.nav-item:nth-child(1)');
  homeTab.addEventListener('click', function(e) {
    e.preventDefault();
    showHomeScreen();
  });
  
  // Initial setup
  showHomeScreen();
  
  // Set up clear logs button
  const clearLogsBtn = document.getElementById('clearLogsBtn');
  clearLogsBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all message logs?')) {
      localStorage.removeItem('messageLogs');
      loadMessageLogs();
    }
  });
});

/**
 * Handles user logout using Firebase Authentication
 */
function logout() {
  // Save the remembered credentials before logout
  const rememberedEmail = localStorage.getItem('rememberedEmail');
  const rememberedPassword = localStorage.getItem('rememberedPassword');
  const rememberMe = !!rememberedEmail && !!rememberedPassword;
  
  // Check if Firebase auth is initialized
  if (firebase.auth) {
    firebase.auth().signOut().then(() => {
      // Clear localStorage except for remembered credentials
      localStorage.clear();
      sessionStorage.clear();
      
      // Restore remembered credentials if needed
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', rememberedEmail);
        localStorage.setItem('rememberedPassword', rememberedPassword);
      }
      
      // Redirect to login page
      window.location.href = 'index.html';
    }).catch((error) => {
      console.error('Logout error:', error);
      alert('Failed to log out. Please try again.');
    });
  } else {
    // Fallback if Firebase auth is not available
    localStorage.clear();
    sessionStorage.clear();
    
    // Restore remembered credentials if needed
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', rememberedEmail);
      localStorage.setItem('rememberedPassword', rememberedPassword);
    }
    
    window.location.href = 'index.html';
  }
}
