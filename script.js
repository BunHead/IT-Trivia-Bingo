const bingoTerms = [
  "IT", "CPU", "RAM", "HDD", "SSD", "GPU", "OS", "LAN", "WAN", "VPN", 
  "DNS", "IP", "HTTP", "HTTPS", "URL", "HTML", "CSS", "PHP", "SQL", 
  "API", "SDK", "IDE", "GUI", "CLI", "IoT", "WLAN", "VoIP", "NFC", 
  "SSL", "TLS", "RDP", "FTP", "SSH", "SMB", "TCP", "UDP", "XSS", 
  "CSRF", "HTML5", "CSS3", "SATA", "USB", "VPN", "API", "SaaS", 
  "PaaS", "IaaS", "DNS", "LAN", "WAN", "UI", "UX", "CMS", "ERP", 
  "CRM", "SMTP", "POP3", "IMAP", "RAID", "OOTBE"
];

const bingoAnswers = [
  "Information Technology",
  "Central Processing Unit",
  "Random Access Memory",
  "Hard Disk Drive",
  "Solid State Drive",
  "Graphics Processing Unit",
  "Operating System",
  "Local Area Network",
  "Wide Area Network",
  "Virtual Private Network",
  "Domain Name System",
  "Internet Protocol",
  "Hypertext Transfer Protocol",
  "Hypertext Transfer Protocol Secure",
  "Uniform Resource Locator",
  "Hypertext Markup Language",
  "Cascading Style Sheets",
  "Hypertext Preprocessor",
  "Structured Query Language",
  "Application Programming Interface",
  "Software Development Kit",
  "Integrated Development Environment",
  "Graphical User Interface",
  "Command Line Interface",
  "Internet of Things",
  "Wireless Local Area Network",
  "Voice over Internet Protocol",
  "Near Field Communication",
  "Secure Sockets Layer",
  "Transport Layer Security",
  "Remote Desktop Protocol",
  "File Transfer Protocol",
  "Secure Shell",
  "Server Message Block",
  "Transmission Control Protocol",
  "User Datagram Protocol",
  "Cross-Site Scripting",
  "Cross-Site Request Forgery",
  "Hypertext Markup Language 5",
  "Cascading Style Sheets 3",
  "Serial Advanced Technology Attachment",
  "Universal Serial Bus",
  "Virtual Private Network",
  "Application Programming Interface",
  "Software as a Service",
  "Platform as a Service",
  "Infrastructure as a Service",
  "Domain Name System",
  "Local Area Network",
  "Wide Area Network",
  "User Interface",
  "User Experience",
  "Content Management System",
  "Enterprise Resource Planning",
  "Customer Relationship Management",
  "Simple Mail Transfer Protocol",
  "Post Office Protocol 3",
  "Internet Message Access Protocol",
  "Redundant Array of Independent Disks",
  "Out of the Box Experience"
];

const bingoRiddles = [
  "What field deals with computers and data?",
  "What 'brain' is the heart of your computer?",
  "What memory allows quick data access but doesn't store long-term?",
  "What spins and stores your data like a digital record player?",
  "What drive has no moving parts but holds data like magic?",
  "What unit makes your games beautiful and videos smooth?",
  "What system manages all the software on your computer?",
  "What network connects devices within a small area like an office?",
  "What network spans larger distances?",
  "What network connection lets you browse securely and privately?",
  "What system translates human-friendly URLs to IP addresses?",
  "What protocol routes data packets across the internet?",
  "What protocol is used to fetch web pages?",
  "What protocol adds a layer of security to web communication?",
  "What's the web address that helps you find sites?",
  "What language structures web content and documents?",
  "What language styles web content?",
  "What scripting language is often used in web development?",
  "What language manages and queries databases?",
  "What interface lets different software systems communicate?",
  "What kit provides tools to build software applications?",
  "What environment makes coding easier with tools and features?",
  "What interface uses icons and visuals to interact with software?",
  "What interface relies on text commands for computer interaction?",
  "What's the concept of interconnected devices sharing data?",
  "What wireless network covers a limited area like a cafe?",
  "What protocol lets you make phone calls over the internet?",
  "What technology enables contactless data exchange?",
  "What technology encrypts data for secure online communication?",
  "What security protocol protects data during transmission?",
  "What protocol lets you control a computer remotely?",
  "What protocol is used for transferring files over a network?",
  "What protocol provides secure remote access to a computer?",
  "What protocol allows file and printer sharing over a network?",
  "What protocol ensures reliable data transmission?",
  "What protocol is faster but less reliable for data transmission?",
  "What attack involves injecting malicious scripts into websites?",
  "What attack tricks users into performing actions without their knowledge?",
  "What version of HTML brought multimedia and interactivity?",
  "What version of CSS added animations and more styling options?",
  "What technology connects storage devices to computers?",
  "What common interface connects devices like printers and flash drives?",
  "What network connection lets you browse securely and privately?",
  "What interface lets different software systems communicate?",
  "What model offers software access over the internet?",
  "What model provides a platform for developing?",
  "What model offers virtualized computing resources over the internet?",
  "What system translates human-friendly URLs to IP addresses?",
  "What network connects devices within a small area like an office?",
  "What network spans larger distances?",
  "What's the part of software that users interact with?",
  "What focuses on how users feel when interacting with software?",
  "What system manages digital content like websites?",
  "What software integrates and manages business processes?",
  "What system manages interactions with customers?",
  "What protocol sends email from a client to a server or between servers?",
  "What protocol retrieves email from a server and stores it locally?",
  "What protocol lets you access and manage email on a server?",
  "What technology combines multiple drives for data protection and speed?",
  "When you first install an OS and don't change any settings, what is this known as?"
];

const bingoCard = document.getElementById("bingo-card");

function getRandomElements(arr, num) {
  const shuffled = arr.map((term, index) => ({ term, index }))
                     .sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, num);
  console.log("Number of selected terms:", num); // Debug
  console.log("Selected terms:", selected); // Debug
  return selected;
}

function createBingoCard(terms) {
  const termIndices = terms.map(({ index }) => index); // Get the indices
  termIndices.forEach((index) => {
    const term = bingoTerms[index]; // Get the term using the index
    const cell = document.createElement("div");
    cell.classList.add("bingo-cell");
    cell.setAttribute("data-index", index);

    const riddleButton = document.createElement("button");
    riddleButton.classList.add("bingo-button");
    riddleButton.textContent = term;

    console.log("Index of selected term:", index); // Debug

    riddleButton.addEventListener("click", (function(selectedIndex) {
      return function() {
        console.log("Button clicked for index:", selectedIndex); // Debug
        displayRiddleAndCheckAnswer(selectedIndex);
      };
    })(index));

    cell.appendChild(riddleButton);

    bingoCard.appendChild(cell);
  });
}

function displayRiddleAndCheckAnswer(index) {
  const term = bingoTerms[index];
  const riddle = bingoRiddles[index];
  const answer = bingoAnswers[index];

  const userInput = prompt(riddle);
  
  if (userInput && userInput.toLowerCase() === answer.toLowerCase()) {
    const termCell = bingoCard.querySelector(`[data-index="${index}"]`);
    termCell.style.backgroundColor = 'green';
    termCell.style.color = 'white';

    const termButton = termCell.querySelector(".bingo-button");
    termButton.style.backgroundColor = 'green';
    termButton.style.color = 'white';

    // Check if all buttons are green
    const allButtons = document.querySelectorAll(".bingo-button");
    const allGreen = [...allButtons].every(button => button.style.backgroundColor === 'green');

    if (allGreen) {
      const bingoMessage = document.createElement("div");
      bingoMessage.classList.add("bingo-message");
      bingoMessage.textContent = "Bingo!";
      document.body.appendChild(bingoMessage);
    }
  }
}



const selectedTerms = getRandomElements(bingoTerms, 15);
createBingoCard(selectedTerms);
