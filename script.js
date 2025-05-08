// Original static student data array (keeping for fallback)
// const defaultStudents = [
//   { rollNumber: "22WJ1A04K3", name: "MOTHI ABHIRAM", parentPhone: "9701016317", parentName: "", studentPhone: "9963813930" },
//   { rollNumber: "22WJ1A04K4", name: "MOTTE PUJITHA", parentPhone: "9573527903", parentName: "", studentPhone: "9347790933" },
//   { rollNumber: "22WJ1A04K5", name: "MOTTE SATHWIKA", parentPhone: "9948385577", parentName: "", studentPhone: "8500520577" },
//   { rollNumber: "22WJ1A04K6", name: "MUDDASANI MANISHA", parentPhone: "9110364970", parentName: "", studentPhone: "8639654060" },
//   { rollNumber: "22WJ1A04K7", name: "MUDIGONDA SINDHUJA", parentPhone: "9603134441", parentName: "", studentPhone: "9032480948" },
//   { rollNumber: "22WJ1A04K8", name: "MUDRABOINA LAXMI PRASANNA", parentPhone: "9959057116", parentName: "", studentPhone: "8019853915" },
//   { rollNumber: "22WJ1A04K9", name: "MUKESH REDDY GUNDA", parentPhone: "9014476299", parentName: "", studentPhone: "6304421697" },
//   { rollNumber: "22WJ1A04L0", name: "MULAMALLA SATHWIK REDDY", parentPhone: "9100334104", parentName: "", studentPhone: "9948240153" },
//   { rollNumber: "22WJ1A04L1", name: "MUMMADI SRINIDHI", parentPhone: "9848455517", parentName: "", studentPhone: "9848315517" },
//   { rollNumber: "22WJ1A04L2", name: "N SREE BHAVANI", parentPhone: "8978117975", parentName: "", studentPhone: "7093477790" },
//   { rollNumber: "22WJ1A04L3", name: "NADIMINTI PRASANTH REDDY", parentPhone: "6281416184", parentName: "", studentPhone: "6304800846" },
//   { rollNumber: "22WJ1A04L4", name: "NALLAGASU SREEJA", parentPhone: "9963708077", parentName: "", studentPhone: "9490021318" },
//   { rollNumber: "22WJ1A04L5", name: "NALLANA ADITYA", parentPhone: "9618455065", parentName: "", studentPhone: "8130527665" },
//   { rollNumber: "22WJ1A04L6", name: "NAMINDLA CHANDINI", parentPhone: "7997563407", parentName: "", studentPhone: "9640350697" },
//   { rollNumber: "22WJ1A04L7", name: "NANDAGIRI VENKATA RAVIKIRAN", parentPhone: "9765444061", parentName: "", studentPhone: "9689326604" },
//   { rollNumber: "22WJ1A04L8", name: "NAREDLA SRAVANKUMAR", parentPhone: "9989910353", parentName: "", studentPhone: "8106970384" },
//   { rollNumber: "22WJ1A04L9", name: "NARIVEDDI ASHISH", parentPhone: "9059557878", parentName: "", studentPhone: "9182211334" },
//   { rollNumber: "22WJ1A04M0", name: "NARVA DHEERAJ GOUD", parentPhone: "9440486513", parentName: "", studentPhone: "7794825107" },
//   { rollNumber: "22WJ1A04M1", name: "NEELAM SRAVANTHI", parentPhone: "9490030191", parentName: "", studentPhone: "9440974047" },
//   { rollNumber: "22WJ1A04M2", name: "NENAVATH AMRUTHA", parentPhone: "9381138715", parentName: "", studentPhone: "9182643072" },
//   { rollNumber: "22WJ1A04M3", name: "NENAVATH SURESH", parentPhone: "8309038134", parentName: "", studentPhone: "6305540422" },
//   { rollNumber: "22WJ1A04M4", name: "NENAVATH TEJA", parentPhone: "9866893791", parentName: "", studentPhone: "9391180262" },
//   { rollNumber: "22WJ1A04M5", name: "NOMULA MAHENDAR", parentPhone: "8790278781", parentName: "", studentPhone: "9550447878" },
//   { rollNumber: "22WJ1A04M6", name: "NOMULA MAYURI", parentPhone: "8919275997", parentName: "", studentPhone: "8919275997" },
//   { rollNumber: "22WJ1A04M7", name: "OLEPU SAIKUMAR", parentPhone: "9030427020", parentName: "", studentPhone: "8639670488" },
//   { rollNumber: "22WJ1A04M8", name: "ORSU NAVEEN", parentPhone: "7730011441", parentName: "", studentPhone: "9515540214" },
//   { rollNumber: "22WJ1A04M9", name: "P R S SANTOSH NAIDU", parentPhone: "9866221031", parentName: "", studentPhone: "7075351027" },
//   { rollNumber: "22WJ1A04N0", name: "P VENKATESHWAR REDDY", parentPhone: "6301840695", parentName: "", studentPhone: "7989517258" },
//   { rollNumber: "22WJ1A04N1", name: "PADALA SAI PRATHYUSHA", parentPhone: "8801270620", parentName: "", studentPhone: "6303111711" },
//   { rollNumber: "22WJ1A04N2", name: "PADAMATI ANUSH REDDY", parentPhone: "9492627481", parentName: "", studentPhone: "6281917597" },
//   { rollNumber: "22WJ1A04N3", name: "PAGIDIMARRI NAVEEN", parentPhone: "9701771652", parentName: "", studentPhone: "8184940014" },
//   { rollNumber: "22WJ1A04N4", name: "PAGIDIPALLI DURGA RAO", parentPhone: "7286907163", parentName: "", studentPhone: "6309857063" },
//   { rollNumber: "22WJ1A04N5", name: "PALLA SAI TEJA", parentPhone: "9948978270", parentName: "", studentPhone: "9948215498" },
//   { rollNumber: "22WJ1A04N6", name: "PARMESHWAR UPADHYAY", parentPhone: "9553605992", parentName: "", studentPhone: "9618032802" },
//   { rollNumber: "22WJ1A04N7", name: "PATEL UDAY KIRAN REDDY", parentPhone: "9908394331", parentName: "", studentPhone: "6301974834" },
//   { rollNumber: "22WJ1A04N8", name: "PATHURI SANTHOSH REDDY", parentPhone: "9963785449", parentName: "", studentPhone: "7569429156" },
//   { rollNumber: "22WJ1A04N9", name: "PENTAPATI HEMANTH KUMAR", parentPhone: "8125263555", parentName: "", studentPhone: "9246063555" },
//   { rollNumber: "22WJ1A04P0", name: "PINNAM HARSHAVARDHAN", parentPhone: "8978365784", parentName: "", studentPhone: "6305006860" },
//   { rollNumber: "22WJ1A04P1", name: "PIPPIRI SHIVAPRASAD", parentPhone: "9553010238", parentName: "", studentPhone: "9848465719" },
//   { rollNumber: "22WJ1A04P2", name: "POLISHETTY SAI KIRAN", parentPhone: "9705088261", parentName: "", studentPhone: "7207533072" },
//   { rollNumber: "22WJ1A04P3", name: "POLWAR OM KRISHNA TEJA", parentPhone: "9010140200", parentName: "", studentPhone: "6303699441" },
//   { rollNumber: "22WJ1A04P4", name: "PONNAGANDLA ROHINI", parentPhone: "9948612497", parentName: "", studentPhone: "6305866029" },
//   { rollNumber: "22WJ1A04P5", name: "POREDDY AVINASH REDDY", parentPhone: "9949201506", parentName: "", studentPhone: "6302173378" },
//   { rollNumber: "22WJ1A04P6", name: "POTHAGANI KAMALAKAR", parentPhone: "9347097547", parentName: "", studentPhone: "9652480489" },
//   { rollNumber: "22WJ1A04P7", name: "POTHURAJU RAJU", parentPhone: "8790479209", parentName: "", studentPhone: "9121972693" },
//   { rollNumber: "22WJ1A04P8", name: "PUCHAKAYALA SRI CHARAN REDDY", parentPhone: "8465954914", parentName: "", studentPhone: "7671953387" },
//   { rollNumber: "22WJ1A04P9", name: "PULI ARUN", parentPhone: "9440838392", parentName: "", studentPhone: "6302171165" },
//   { rollNumber: "22WJ1A04Q1", name: "PULI SUPRIYA", parentPhone: "7675848260", parentName: "", studentPhone: "9391540262" },
//   { rollNumber: "22WJ1A04Q2", name: "PULLAKANDAM LAXMI VENKATA NARASIMHA SWAMY", parentPhone: "9441271382", parentName: "", studentPhone: "6304621330" },
//   { rollNumber: "22WJ1A04Q3", name: "PURAM RAKESH", parentPhone: "9014065565", parentName: "", studentPhone: "8639867875" },
//   { rollNumber: "22WJ1A04Q4", name: "PUSULURI MEGHANA", parentPhone: "8121389339", parentName: "", studentPhone: "7013401081" },
//   { rollNumber: "22WJ1A04Q5", name: "R ANAND", parentPhone: "7075255280", parentName: "", studentPhone: "9390916046" },
//   { rollNumber: "22WJ1A04Q6", name: "RAGAPURAM PRANAB SAI", parentPhone: "8497919111", parentName: "", studentPhone: "7680067675" },
//   { rollNumber: "22WJ1A04Q7", name: "RAMINENI YASWITHA", parentPhone: "7036332286", parentName: "", studentPhone: "7815956124" },
//   { rollNumber: "22WJ1A04Q8", name: "RANABOTHU NITHIN REDDY", parentPhone: "9989900516", parentName: "", studentPhone: "7075201361" },
//   { rollNumber: "22WJ1A04Q9", name: "RANERU NARESH", parentPhone: "9963269357", parentName: "", studentPhone: "9573461594" },
//   { rollNumber: "22WJ1A04R0", name: "RANGAPPA SAI KIRAN", parentPhone: "7036898066", parentName: "", studentPhone: "9398601171" },
//   { rollNumber: "22WJ1A04R1", name: "RANGAREDDY LAXMI PRASANNA", parentPhone: "9949207419", parentName: "", studentPhone: "9866986521" },
//   { rollNumber: "22WJ1A04R2", name: "RANKIREDDY OM SAI VARSHITHA", parentPhone: "9295003580", parentName: "", studentPhone: "9014697651" },
//   { rollNumber: "22WJ1A04R3", name: "RAO VIJAY RAO", parentPhone: "9848912071", parentName: "", studentPhone: "7386880115" },
//   { rollNumber: "22WJ1A04R4", name: "RENUKUNTA NIKHITHA", parentPhone: "9951390080", parentName: "", studentPhone: "7661987725" },
//   { rollNumber: "22WJ1A04R5", name: "RESHMA", parentPhone: "9959291693", parentName: "", studentPhone: "9041909235" },
//   { rollNumber: "22WJ1A04R6", name: "S KRISHNA TEJA", parentPhone: "9652050917", parentName: "", studentPhone: "9553477673" },
//   { rollNumber: "23WJ5A0422", name: "R BOJA RAJU", parentPhone: "9182571047", parentName: "", studentPhone: "9346241543" },
//   { rollNumber: "23WJ5A0423", name: "RENA SUKANYA", parentPhone: "9347342845", parentName: "", studentPhone: "9347342845" },
//   { rollNumber: "23WJ5A0424", name: "SAKINALA KRISHNAGEETHIKA", parentPhone: "9948676602", parentName: "", studentPhone: "9059442608" },
//   { rollNumber: "23WJ5A0425", name: "SATLA GANESH", parentPhone: "9391407627", parentName: "", studentPhone: "8985880785" },
//   { rollNumber: "23WJ5A0426", name: "SHIVVA VINOD KUMAR", parentPhone: "9550148890", parentName: "", studentPhone: "7288803087" }
// ];

// Variable to store the students data (will be populated from Firebase or fallback to default)
let students = [...defaultStudents]; // Initialize with default

let messageLogs = [];

// FACULTY CONFIGURATION
// Use localStorage value or fallback to default
const FACULTY_NAME = localStorage.getItem('currentFaculty') || "Shashikala";
const DISPLAY_FACULTY_NAME = FACULTY_NAME; //donot put underscore type full name or put dot

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs1Wgew-Y1hcY8xIUm9uFagdeByDTDGU0",
  authDomain: "collegeapp-59309.firebaseapp.com",
  projectId: "collegeapp-59309",
  storageBucket: "collegeapp-59309.firebasestorage.app",
  messagingSenderId: "298826677970",
  appId: "1:298826677970:web:3989fed84dd5bb4d73f70b",
  databaseURL: "https://collegeapp-59309-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Function to fetch faculty-specific student data from Firebase
function fetchStudentData() {
  // Check if we're on profile.html, if so, skip the loading indicator
  if (window.location.pathname.includes('profile.html')) {
    // Get faculty name from localStorage
    const facultyName = localStorage.getItem('currentFaculty');
    console.log("Fetching student data for faculty:", facultyName);

    if (!facultyName) {
      console.warn("No faculty name found in localStorage, using default data");
      return;
    }

    // Get student data from Firebase without showing loading
    database.ref('faculty/' + facultyName + '/studentData').once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          // Convert object to array
          const studentData = snapshot.val();
          students = Object.values(studentData);
          console.log("Loaded student data for faculty:", facultyName, students);

          // Update section display if needed
          updateSectionDisplay(facultyName);
        } else {
          console.warn("No student data found for faculty:", facultyName);
          // Keep default data (already initialized)
        }
      })
      .catch(error => {
        console.error("Error fetching student data:", error);
        // Keep default data (already initialized)
      });
    return;
  }

  // Skip loading screen for webapp.html too
  if (window.location.pathname.includes('webapp.html')) {
    // Get faculty name from localStorage
    const facultyName = localStorage.getItem('currentFaculty');
    console.log("Fetching student data for faculty:", facultyName);

    if (!facultyName) {
      console.warn("No faculty name found in localStorage, using default data");
      return;
    }

    // Get student data from Firebase without showing loading
    database.ref('faculty/' + facultyName + '/studentData').once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          // Convert object to array
          const studentData = snapshot.val();
          students = Object.values(studentData);
          console.log("Loaded student data for faculty:", facultyName, students);

          // Update section display if needed
          updateSectionDisplay(facultyName);
        } else {
          console.warn("No student data found for faculty:", facultyName);
          // Keep default data (already initialized)
        }
      })
      .catch(error => {
        console.error("Error fetching student data:", error);
        // Keep default data (already initialized)
      });
    return;
  }

  // For other pages, show loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading-indicator';
  loadingIndicator.innerHTML = '<div class="spinner"></div><p>Loading student data...</p>';
  loadingIndicator.style.position = 'fixed';
  loadingIndicator.style.top = '0';
  loadingIndicator.style.left = '0';
  loadingIndicator.style.width = '100%';
  loadingIndicator.style.height = '100%';
  loadingIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  loadingIndicator.style.display = 'flex';
  loadingIndicator.style.flexDirection = 'column';
  loadingIndicator.style.justifyContent = 'center';
  loadingIndicator.style.alignItems = 'center';
  loadingIndicator.style.zIndex = '9999';
  document.body.appendChild(loadingIndicator);

  // Create spinner style
  const style = document.createElement('style');
  style.textContent = `
    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border-left-color: #237a4e;
      animation: spin 1s linear infinite;
      margin-bottom: 10px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Get faculty name from localStorage
  const facultyName = localStorage.getItem('currentFaculty');
  console.log("Fetching student data for faculty:", facultyName);

  if (!facultyName) {
    console.warn("No faculty name found in localStorage, using default data");
    // Already initialized with default students
    document.body.removeChild(loadingIndicator);
    return;
  }

  // Get student data from Firebase
  database.ref('faculty/' + facultyName + '/studentData').once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        // Convert object to array
        const studentData = snapshot.val();
        students = Object.values(studentData);
        console.log("Loaded student data for faculty:", facultyName, students);

        // Update section display if needed
        updateSectionDisplay(facultyName);
      } else {
        console.warn("No student data found for faculty:", facultyName);
        // Keep default data (already initialized)
      }
    })
    .catch(error => {
      console.error("Error fetching student data:", error);
      // Keep default data (already initialized)
    })
    .finally(() => {
      // Remove loading indicator
      document.body.removeChild(loadingIndicator);
    });
}

// Function to update section display
function updateSectionDisplay(facultyName) {
  const sectionBanner = document.querySelector('.section-banner span');
  if (sectionBanner) {
    database.ref('faculty/' + facultyName + '/section').once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          sectionBanner.textContent = snapshot.val();
        }
      })
      .catch(error => {
        console.error("Error fetching section data:", error);
      });
  }
}

// Fetch student data when the page loads
document.addEventListener('DOMContentLoaded', function() {
  fetchStudentData();
  fetchMessagesFromServer();
  periodicCleanup();
  setupEventListeners();
});

// Firebase configuration
const firebaseDatabase = {
  saveMessage: function (log) {
    // Always save under the configured faculty name in communications node
    if (log.studentRoll) {
      return database.ref(`faculty/${FACULTY_NAME}/communications/${log.studentRoll}`).push(log);
    } else {
      // Fallback to push ID method if no student roll number is available
      return database.ref(`faculty/${FACULTY_NAME}`).push(log);
    }
  },
  getAllMessages: function () {
    // First check the communications node
    return database.ref(`faculty/${FACULTY_NAME}/communications`).once('value')
      .then(snapshot => {
        const messages = [];
        if (snapshot.exists()) {
          // Get messages from the communications node
          snapshot.forEach(studentSnapshot => {
            // Each student has multiple messages now
            studentSnapshot.forEach(messageSnapshot => {
              messages.push(messageSnapshot.val());
            });
          });
        }
        
        // Then check for messages stored directly under the faculty node (legacy method)
        return database.ref(`faculty/${FACULTY_NAME}`).once('value')
          .then(legacySnapshot => {
            if (legacySnapshot.exists()) {
              legacySnapshot.forEach(childSnapshot => {
                // Check if the childSnapshot key is not 'email', 'password', 'section', 'studentData', or 'communications'
                if (
                  childSnapshot.key !== 'email' && 
                  childSnapshot.key !== 'password' && 
                  childSnapshot.key !== 'section' && 
                  childSnapshot.key !== 'studentData' && 
                  childSnapshot.key !== 'communications'
                ) {
                  messages.push(childSnapshot.val());
                }
              });
            }
            return messages;
          });
      });
  },
  cleanupOldMessages: function () {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    // Cleanup communications node
    return database.ref(`faculty/${FACULTY_NAME}/communications`).once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          // For each student
          const allUpdates = {};
          
          snapshot.forEach(studentSnapshot => {
            const studentRoll = studentSnapshot.key;
            
            // For each message under this student
            studentSnapshot.forEach(messageSnapshot => {
              const messageId = messageSnapshot.key;
              const message = messageSnapshot.val();
              
              if (new Date(message.timestamp) <= oneMonthAgo) {
                // Mark this specific message for deletion
                allUpdates[`faculty/${FACULTY_NAME}/communications/${studentRoll}/${messageId}`] = null;
              }
            });
          });
          
          // Apply all updates at once
          if (Object.keys(allUpdates).length > 0) {
            return database.ref().update(allUpdates);
          }
        }
        return null;
      })
      .then(() => {
        // Also cleanup legacy messages
        return database.ref(`faculty/${FACULTY_NAME}`).once('value')
          .then(snapshot => {
            const legacyUpdates = {};
            snapshot.forEach(childSnapshot => {
              // Check if the childSnapshot key is not 'email', 'password', 'section', 'studentData', or 'communications'
              if (
                childSnapshot.key !== 'email' && 
                childSnapshot.key !== 'password' && 
                childSnapshot.key !== 'section' && 
                childSnapshot.key !== 'studentData' && 
                childSnapshot.key !== 'communications'
              ) {
                const message = childSnapshot.val();
                if (message.timestamp && new Date(message.timestamp) <= oneMonthAgo) {
                  legacyUpdates[childSnapshot.key] = null;
                }
              }
            });
            return database.ref(`faculty/${FACULTY_NAME}`).update(legacyUpdates);
          });
      });
  },
  clearAllLogs: function () {
    // Clear both the communications node and legacy messages
    return Promise.all([
      database.ref(`faculty/${FACULTY_NAME}/communications`).remove(),
      // For legacy messages, we need to selectively remove only message logs
      database.ref(`faculty/${FACULTY_NAME}`).once('value')
        .then(snapshot => {
          const updates = {};
          snapshot.forEach(childSnapshot => {
            // Check if the childSnapshot key is not 'email', 'password', 'section', 'studentData', or 'communications'
            if (
              childSnapshot.key !== 'email' && 
              childSnapshot.key !== 'password' && 
              childSnapshot.key !== 'section' && 
              childSnapshot.key !== 'studentData' && 
              childSnapshot.key !== 'communications'
            ) {
              updates[childSnapshot.key] = null;
            }
          });
          return database.ref(`faculty/${FACULTY_NAME}`).update(updates);
        })
    ]);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  fetchStudentData(); // Fetch faculty-specific student data
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
  hideAllSections(); // Ensure other sections are hidden
  const rollNumberInput = document.getElementById('rollNumber').value.trim().toUpperCase();
  const profileCard = document.getElementById('profileCard');
  const editProfileBtn = document.getElementById('editProfileBtn');
  const saveProfileBtn = document.getElementById('saveProfileBtn');

  // Hide the profile card first
  profileCard.style.display = 'none';
  
  // Reset edit state
  toggleProfileEdit(false); // Ensure it starts in non-edit mode

  // Find student either by exact roll number or by ending digits
  let student = null;
  
  // First try to find by exact roll number match
  student = students.find(s => s.rollNumber.toUpperCase() === rollNumberInput);
  
  // If not found, try to find by last part of roll number
  if (!student && rollNumberInput.length > 0) {
    student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumberInput));
  }

  if (student) {
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentRoll').textContent = student.rollNumber;

    // Populate display spans
    document.getElementById('displayParentName').textContent = student.parentName || 'Not available';
    document.getElementById('displayParentPhone').textContent = student.parentPhone;
    document.getElementById('displayStudentPhone').textContent = student.studentPhone || 'Not available';

    // Populate edit inputs (hidden initially)
    document.getElementById('editParentName').value = student.parentName || '';
    document.getElementById('editParentPhone').value = student.parentPhone;
    document.getElementById('editStudentPhone').value = student.studentPhone || '';

    profileCard.style.display = 'block';
    profileCard.classList.add('fade-in');

  } else {
    alert('Student not found. Please check the roll number and try again.');
  }
}

function toggleProfileEdit(forceState) {
  const displayParentName = document.getElementById('displayParentName');
  const editParentName = document.getElementById('editParentName');
  const displayParentPhone = document.getElementById('displayParentPhone');
  const editParentPhone = document.getElementById('editParentPhone');
  const displayStudentPhone = document.getElementById('displayStudentPhone');
  const editStudentPhone = document.getElementById('editStudentPhone');
  const editBtn = document.getElementById('editProfileBtn');
  const saveBtn = document.getElementById('saveProfileBtn');

  const isEditing = typeof forceState === 'boolean' ? forceState : editParentName.style.display === 'none';

  // Toggle display of spans and inputs
  displayParentName.style.display = isEditing ? 'none' : 'inline';
  editParentName.style.display = isEditing ? 'inline-block' : 'none';
  displayParentPhone.style.display = isEditing ? 'none' : 'inline';
  editParentPhone.style.display = isEditing ? 'inline-block' : 'none';
  displayStudentPhone.style.display = isEditing ? 'none' : 'inline';
  editStudentPhone.style.display = isEditing ? 'inline-block' : 'none';

  // Toggle buttons
  editBtn.style.display = isEditing ? 'none' : 'inline-block';
  saveBtn.style.display = isEditing ? 'inline-block' : 'none';
}

async function saveProfileChanges() {
  const rollNumber = document.getElementById('studentRoll').textContent;
  const studentIndex = students.findIndex(s => s.rollNumber === rollNumber);

  if (studentIndex === -1) {
    alert('Error: Could not find student data to update.');
    return;
  }

  const updatedParentName = document.getElementById('editParentName').value;
  const updatedParentPhone = document.getElementById('editParentPhone').value;
  const updatedStudentPhone = document.getElementById('editStudentPhone').value;

  // Update local student array (for immediate feedback)
  students[studentIndex].parentName = updatedParentName;
  students[studentIndex].parentPhone = updatedParentPhone;
  students[studentIndex].studentPhone = updatedStudentPhone;

  // Update Firebase (assuming you have a structure like students/{rollNumber})
  // Note: This assumes you want to store/update the main student list in Firebase.
  // If student data is only local, remove this Firebase part.
  try {
    await database.ref('students/' + rollNumber).update({
      parentName: updatedParentName,
      parentPhone: updatedParentPhone,
      studentPhone: updatedStudentPhone
    });
    console.log('Student profile updated in Firebase.');
  } catch (error) {
    console.error("Error updating student profile in Firebase: ", error);
    alert('Error saving changes to the server. Please try again.');
    // Optionally revert local changes if Firebase update fails
    // Re-fetch the original data or handle the error appropriately
    return; // Stop if Firebase update failed
  }

  // Update the display spans
  document.getElementById('displayParentName').textContent = updatedParentName || 'Not available';
  document.getElementById('displayParentPhone').textContent = updatedParentPhone;
  document.getElementById('displayStudentPhone').textContent = updatedStudentPhone || 'Not available';

  // Toggle back to non-edit mode
  toggleProfileEdit(false);
  alert('Profile updated successfully!');
}

function toggleBulkMessageForm() {
  const bulkMessageForm = document.getElementById('bulkMessageForm');
  const isCurrentlyHidden = bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '';

  hideAllSections(); // Ensure other sections are hidden

  if (isCurrentlyHidden) {
    bulkMessageForm.style.display = 'block';
    bulkMessageForm.classList.add('fade-in');
    document.getElementById('bulkMessageContent').value = ''; // Clear previous message
  }
}

function toggleCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  const isCurrentlyHidden = crProfiles.style.display === 'none' || crProfiles.style.display === '';

  hideAllSections(); // Ensure other sections are hidden

  if (isCurrentlyHidden) {
    showCRProfiles();
    crProfiles.style.display = 'block';
    crProfiles.classList.add('fade-in');
  }
}

function showCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  crProfiles.innerHTML = ''; // Clear existing profiles

  // Show loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'cr-loading';
  loadingIndicator.innerHTML = 'Loading CRs...';
  crProfiles.appendChild(loadingIndicator);

  // Get faculty name from localStorage
  const facultyName = localStorage.getItem('currentFaculty');
  
  // Get CRs from Firebase
  database.ref(`faculty/${facultyName}/classRepresentatives`).once('value')
    .then(snapshot => {
      // Create an array to store all promises for fetching student data
      const promises = [];
      let crs = [];
      
      if (snapshot.exists()) {
        // Use CRs from Firebase
        crs = snapshot.val();
        
        // For each CR, create a promise to fetch their complete student data
        if (Array.isArray(crs)) {
          crs.forEach((cr, index) => {
            const promise = database.ref(`faculty/${facultyName}/studentData/${cr.rollNumber}`).once('value')
              .then(studentSnapshot => {
                if (studentSnapshot.exists()) {
                  // Update the CR with complete student data
                  const studentData = studentSnapshot.val();
                  crs[index] = {
                    ...cr,
                    studentPhone: studentData.studentPhone || ''
                  };
                }
                return null;
              })
              .catch(error => {
                console.error(`Error fetching data for CR ${cr.rollNumber}:`, error);
                return null;
              });
            
            promises.push(promise);
          });
        }
      } else {
        // Fallback to default CRs
        // crs = [
        //   { name: 'MEGHANA', rollNumber: '22WJ1A04Q4' }
        // ];
        
        // Fetch data for default CRs too
        const promise = database.ref(`faculty/${facultyName}/studentData/${crs[0].rollNumber}`).once('value')
          .then(studentSnapshot => {
            if (studentSnapshot.exists()) {
              const studentData = studentSnapshot.val();
              crs[0].studentPhone = studentData.studentPhone || '';
            }
            return null;
          })
          .catch(error => {
            console.error(`Error fetching data for default CR:`, error);
            return null;
          });
        
        promises.push(promise);
      }
      
      // Wait for all student data to be fetched
      return Promise.all(promises).then(() => crs);
    })
    .then(crs => {
      // Remove loading indicator
      if (document.querySelector('.cr-loading')) {
        crProfiles.removeChild(document.querySelector('.cr-loading'));
      }
      
      if (!Array.isArray(crs) || crs.length === 0) {
        const noCRsMessage = document.createElement('p');
        noCRsMessage.className = 'no-crs-message';
        noCRsMessage.textContent = 'No Class Representatives found. Add CRs by long-pressing on your profile initial badge.';
        crProfiles.appendChild(noCRsMessage);
        return;
      }

      // Display all CRs
      crs.forEach(cr => {
        // Fallback to students array if studentPhone is still not available
        if (!cr.studentPhone) {
          const student = students.find(s => s.rollNumber === cr.rollNumber);
          if (student) {
            cr.studentPhone = student.studentPhone || '';
          }
        }
        
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card cr-card';
        profileCard.innerHTML = `
          <div class="cr-info">
            <h3>${cr.name}</h3>
            <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
            <p class="student-phone" style="display:none">${cr.studentPhone || ''}</p>
            <div class="cr-actions">
              <button onclick="callCR('${cr.rollNumber}', '${cr.studentPhone || ''}')">
                <i class="fas fa-phone"></i> Call
              </button>
              <button onclick="whatsappCR('${cr.rollNumber}', '${cr.studentPhone || ''}')">
                <i class="fab fa-whatsapp"></i> WhatsApp
              </button>
            </div>
          </div>
        `;
        crProfiles.appendChild(profileCard);
      });
    })
    .catch(error => {
      console.error('Error loading CRs:', error);
      // Remove loading indicator
      if (document.querySelector('.cr-loading')) {
        crProfiles.removeChild(document.querySelector('.cr-loading'));
      }
      
      // Show error message
      const errorMessage = document.createElement('p');
      errorMessage.className = 'error-message';
      errorMessage.textContent = 'Failed to load Class Representatives. Please try again later.';
      crProfiles.appendChild(errorMessage);
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

  const messages = [];
  
  // First get communications from the new structure
  return database.ref(`faculty/${FACULTY_NAME}/communications`).once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
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
      }
      
      // Then get messages from the legacy structure
      return database.ref(`faculty/${FACULTY_NAME}`).once('value')
        .then(legacySnapshot => {
          if (legacySnapshot.exists()) {
            legacySnapshot.forEach(childSnapshot => {
              // Skip non-message nodes
              if (
                childSnapshot.key !== 'email' && 
                childSnapshot.key !== 'password' && 
                childSnapshot.key !== 'section' && 
                childSnapshot.key !== 'studentData' && 
                childSnapshot.key !== 'communications'
              ) {
                const message = childSnapshot.val();
                const messageDate = new Date(message.timestamp);
                
                // Ensure recipient is always 10 digits
                if (message.recipient && message.recipient.startsWith('+91')) {
                  message.recipient = message.recipient.slice(3);
                }
                
                if (messageDate >= startDate && messageDate <= endDate) {
                  messages.push(message);
                }
              }
            });
          }
          
          // Sort messages by timestamp (newest first)
          messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          
          return messages;
        });
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
  const parentPhone = document.getElementById('displayParentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('displayParentName').textContent;
  
  if (parentPhone && parentPhone !== 'Not available') {
    const startTime = new Date();
    window.location.href = `tel:${parentPhone}`;
    
    // Create and show popup after 10 seconds
    setTimeout(() => {
      // Add body class to prevent background shifts
      document.body.classList.add('popup-active');
      
      const popup = document.createElement('div');
      popup.id = 'callStatusPopup';
      popup.style.position = 'fixed';
      popup.style.left = '50%';
      popup.style.top = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.backgroundColor = '#ffffff';
      popup.style.padding = '30px 40px';
      popup.style.borderRadius = '12px';
      popup.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
      popup.style.zIndex = '2001'; // Higher z-index
      popup.style.fontFamily = '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
      popup.style.textAlign = 'center';
      popup.style.border = '1px solid #e0e0e0';
      popup.style.maxWidth = '380px';
      popup.style.boxSizing = 'border-box';
      popup.style.opacity = '0'; // Start with opacity 0
      popup.style.transition = 'opacity 0.3s ease';

      popup.innerHTML = `
        <style>
          .call-status-btn {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 12px 0;
            cursor: pointer;
            border-radius: 6px;
            font-size: 1em;
            font-weight: 500;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.25s ease;
            flex: 1;
            letter-spacing: 0.5px;
            min-width: 100px;
          }
          .call-status-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          }
          .call-status-btn.yes-btn { background-color: #2ecc71; }
          .call-status-btn.yes-btn:hover { background-color: #27ae60; }
          .call-status-btn.no-btn { background-color: #e74c3c; }
          .call-status-btn.no-btn:hover { background-color: #c0392b; }
        </style>
        <h3 style="margin-top: 0; margin-bottom: 18px; color: #2c3e50; font-size: 1.3em; font-weight: 600;">Call Status</h3>
        <p style="margin-bottom: 30px; color: #555; font-size: 1.05em; line-height: 1.5;">Was the call answered?</p>
        <div style="display: flex; justify-content: space-around; gap: 15px;">
           <button id="yesBtn" class="call-status-btn yes-btn">Yes</button>
           <button id="noBtn" class="call-status-btn no-btn">No</button>
        </div>
      `;
      document.body.appendChild(popup);

      // Add overlay
      const overlay = document.createElement('div');
      overlay.id = 'callStatusOverlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.right = '0';
      overlay.style.bottom = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '2000'; // Higher z-index
      overlay.style.opacity = '0'; // Start with opacity 0
      overlay.style.transition = 'opacity 0.3s ease';
      document.body.appendChild(overlay);

      // Trigger reflow to ensure transition works
      void popup.offsetWidth;
      void overlay.offsetWidth;
      
      // Fade in the popup and overlay
      popup.style.opacity = '1';
      overlay.style.opacity = '1';

      // Define the functions before attaching event listeners
      const handleYesButtonClick = function() {
        const popup = document.getElementById('callStatusPopup');
        const overlay = document.getElementById('callStatusOverlay');
        if (popup && overlay) {
          document.body.removeChild(popup);
          document.body.removeChild(overlay);
          document.body.classList.remove('popup-active');
          showReasonPopup();
        }
      };
      
      const handleNoButtonClick = function() {
        const popup = document.getElementById('callStatusPopup');
        const overlay = document.getElementById('callStatusOverlay');
        if (popup && overlay) {
          handleCallResponse(false);
          document.body.removeChild(popup);
          document.body.removeChild(overlay);
          document.body.classList.remove('popup-active');
        }
      };

      // Add event listeners with direct function references
      const yesBtn = document.getElementById('yesBtn');
      const noBtn = document.getElementById('noBtn');
      
      if (yesBtn) {
        yesBtn.onclick = handleYesButtonClick;
      }
      
      if (noBtn) {
        noBtn.onclick = handleNoButtonClick;
      }
      
      function showReasonPopup() {
        // Add body class again for the reason popup
        document.body.classList.add('popup-active');
        
        const reasonPopup = document.createElement('div');
        reasonPopup.id = 'reasonPopup';
        reasonPopup.style.position = 'fixed';
        reasonPopup.style.left = '50%';
        reasonPopup.style.top = '50%';
        reasonPopup.style.transform = 'translate(-50%, -50%)';
        reasonPopup.style.backgroundColor = '#ffffff';
        reasonPopup.style.padding = '30px 40px';
        reasonPopup.style.borderRadius = '12px';
        reasonPopup.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        reasonPopup.style.zIndex = '2001'; // Higher z-index
        reasonPopup.style.fontFamily = '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
        reasonPopup.style.textAlign = 'center';
        reasonPopup.style.border = '1px solid #e0e0e0';
        reasonPopup.style.maxWidth = '400px';
        reasonPopup.style.width = '90%';
        reasonPopup.style.opacity = '0'; // Start with opacity 0
        reasonPopup.style.transition = 'opacity 0.3s ease';

        reasonPopup.innerHTML = `
          <style>
            .reason-btn {
              background-color: #3498db;
              color: white;
              border: none;
              padding: 12px 0;
              margin: 8px 0;
              width: 100%;
              cursor: pointer;
              border-radius: 6px;
              font-size: 1em;
              font-weight: 500;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              transition: all 0.25s ease;
            }
            .reason-btn:hover {
              background-color: #2980b9;
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }
            .reason-form {
              display: none;
              margin-top: 15px;
            }
            .reason-form textarea {
              width: 100%;
              padding: 12px;
              border: 1px solid #ddd;
              border-radius: 6px;
              font-size: 1em;
              margin-bottom: 15px;
              resize: vertical;
              min-height: 80px;
            }
            .submit-btn {
              background-color: #2ecc71;
              color: white;
              border: none;
              padding: 12px 24px;
              cursor: pointer;
              border-radius: 6px;
              font-size: 1em;
              font-weight: 500;
              transition: all 0.25s ease;
            }
            .submit-btn:hover {
              background-color: #27ae60;
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }
          </style>
          <h3 style="margin-top: 0; margin-bottom: 22px; color: #2c3e50; font-size: 1.3em; font-weight: 600;">Call Reason</h3>
          <p style="margin-bottom: 25px; color: #555; font-size: 1.05em; line-height: 1.5;">Select the reason for the call:</p>
          <button id="healthBtn" class="reason-btn">Health Issue</button>
          <button id="stationBtn" class="reason-btn">Out of Station</button>
          <button id="othersBtn" class="reason-btn">Others</button>
          <div id="otherReasonForm" class="reason-form">
            <textarea id="otherReasonText" placeholder="Please specify the reason..."></textarea>
            <button id="submitReasonBtn" class="submit-btn">Submit</button>
          </div>
        `;
        
        // Add new overlay for reason popup
        const reasonOverlay = document.createElement('div');
        reasonOverlay.id = 'reasonOverlay';
        reasonOverlay.style.position = 'fixed';
        reasonOverlay.style.top = '0';
        reasonOverlay.style.left = '0';
        reasonOverlay.style.right = '0';
        reasonOverlay.style.bottom = '0';
        reasonOverlay.style.width = '100%';
        reasonOverlay.style.height = '100%';
        reasonOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        reasonOverlay.style.zIndex = '2000'; // Higher z-index
        reasonOverlay.style.opacity = '0'; // Start with opacity 0
        reasonOverlay.style.transition = 'opacity 0.3s ease';
        
        document.body.appendChild(reasonOverlay);
        document.body.appendChild(reasonPopup);
        
        // Trigger reflow to ensure transition works
        void reasonPopup.offsetWidth;
        void reasonOverlay.offsetWidth;
        
        // Fade in the popup and overlay
        reasonPopup.style.opacity = '1';
        reasonOverlay.style.opacity = '1';
        
        // Define handlers
        const handleHealthBtnClick = function() {
          const popup = document.getElementById('reasonPopup');
          const overlay = document.getElementById('reasonOverlay');
          if (popup && overlay) {
            handleCallResponse(true, 'Health Issue');
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove('popup-active');
          }
        };
        
        const handleStationBtnClick = function() {
          const popup = document.getElementById('reasonPopup');
          const overlay = document.getElementById('reasonOverlay');
          if (popup && overlay) {
            handleCallResponse(true, 'Out of Station');
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove('popup-active');
          }
        };
        
        const handleOthersBtnClick = function() {
          const otherReasonForm = document.getElementById('otherReasonForm');
          if (otherReasonForm) {
            otherReasonForm.style.display = 'block';
          }
        };
        
        const handleSubmitReasonBtnClick = function() {
          const popup = document.getElementById('reasonPopup');
          const overlay = document.getElementById('reasonOverlay');
          const otherReasonText = document.getElementById('otherReasonText');
          
          if (popup && overlay && otherReasonText) {
            const otherReason = otherReasonText.value.trim();
            if (otherReason) {
              handleCallResponse(true, `Other: ${otherReason}`);
              document.body.removeChild(popup);
              document.body.removeChild(overlay);
              document.body.classList.remove('popup-active');
            } else {
              alert('Please enter a reason');
            }
          }
        };
        
        // Attach event handlers
        const healthBtn = document.getElementById('healthBtn');
        const stationBtn = document.getElementById('stationBtn');
        const othersBtn = document.getElementById('othersBtn');
        const submitReasonBtn = document.getElementById('submitReasonBtn');
        
        if (healthBtn) healthBtn.onclick = handleHealthBtnClick;
        if (stationBtn) stationBtn.onclick = handleStationBtnClick;
        if (othersBtn) othersBtn.onclick = handleOthersBtnClick;
        if (submitReasonBtn) submitReasonBtn.onclick = handleSubmitReasonBtnClick;
      }

      function handleCallResponse(wasAnswered, reason = '') {
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
        const reasonText = reason ? ` - Reason: ${reason}` : '';
        const log = {
          sender: DISPLAY_FACULTY_NAME,
          recipient: parentPhone,
          studentName: studentName,
          studentRoll: studentRoll,
          parentName: parentName,
          message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}${reasonText}`,
          timestamp: new Date().toISOString(),
          status: wasAnswered ? 'answered' : 'not answered',
          platform: 'Phone',
          reason: reason || 'N/A',
          type: 'call'
        };
        firebaseDatabase.saveMessage(log)
          .then(() => fetchMessagesFromServer())
          .catch(error => console.error('Error saving message:', error));
      }
    }, 10000);
  } else {
    alert('Parent phone number not available.');
  }
}

function callStudent() {
  const studentPhone = document.getElementById('displayStudentPhone').textContent;
  
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
  const studentPhone = document.getElementById('displayStudentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('displayParentName').textContent;
  
  if (studentPhone && studentPhone !== 'Not available') {
    const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
    const message = encodeURIComponent('Hello, this is a message from your faculty.');
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  } else {
    alert('Student phone number not available.');
  }
}

function sendCustomWhatsAppMessage() {
  const parentPhone = document.getElementById('displayParentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('displayParentName').textContent;
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
      platform: 'WhatsApp',
      type: 'whatsapp'
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

function callCR(rollNumber, phoneNumber) {
  // Use the provided phone number if available
  if (phoneNumber) {
    // Make the call without logging to Firebase
    window.location.href = `tel:${phoneNumber}`;
    return;
  }
  
  // Fallback to searching in students array if no phone provided
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    window.location.href = `tel:${cr.studentPhone}`;
  } else {
    alert('Phone number not available for this CR.');
  }
}

function whatsappCR(rollNumber, phoneNumber) {
  // Use the provided phone number if available
  if (phoneNumber) {
    // Format phone number for WhatsApp (add +91 if needed)
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber.replace(/\D/g, '')}`;
    const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
    
    // Open WhatsApp without logging to Firebase
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
    return;
  }
  
  // Fallback to searching in students array if no phone provided
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    const formattedPhone = `+91${cr.studentPhone.replace(/\D/g, '')}`;
    const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  } else {
    alert('WhatsApp number not available for this CR.');
  }
}

function openStudentsPage() {
  window.location.href = 'students.html';
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
    group: group,
    type: 'bulk-sms'
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
      bulkGroup: group,
      type: 'sms'
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
