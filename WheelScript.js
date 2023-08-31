const selectButton = document.getElementById("select-button");
const hintButton = document.getElementById("hint-button");
const resultElement = document.getElementById("result");
const hintElement = document.getElementById("hint");

let currentTermIndex = -1;
let currentHintArrayIndex = 0; // Initialize with 0
let currentHintIndex = -1;

selectButton.addEventListener("click", () => {
  currentTermIndex = Math.floor(Math.random() * bingoTerms.length);
  const randomTerm = bingoTerms[currentTermIndex];
  resultElement.textContent = randomTerm;
  hintElement.textContent = "";
  currentHintIndex = -1; // Reset hint index
});

hintButton.addEventListener("click", () => {
  if (currentTermIndex !== -1) {
    currentHintArrayIndex = (currentHintArrayIndex + 1) % 3; // Cycle through hint arrays
    const hintArray = bingoHintArrays[currentHintArrayIndex];
	currentHintIndex = (currentTermIndex);
    const hint = hintArray[currentHintIndex];
    hintElement.textContent = hint;
    console.log("Current Term Index:", currentTermIndex, "Random Term:", bingoTerms[currentTermIndex]);
    console.log("Current Hint Array Index:", currentHintArrayIndex);
    console.log("Current Hint Index:", currentHintIndex);
  }
});

const bingoTerms = [
  "IT", "CPU", "RAM", "HDD", "SSD", "GPU", "OS", "LAN", "WAN", "VPN", 
  "DNS", "IP", "HTTP", "HTTPS", "URL", "HTML", "CSS", "PHP", "SQL", 
  "API", "SDK", "IDE", "GUI", "CLI", "IoT", "WLAN", "VoIP", "NFC", 
  "SSL", "TLS", "RDP", "FTP", "SSH", "SMB", "TCP", "UDP", "XSS", 
  "CSRF", "HTML5", "CSS3", "SATA", "USB", "VPN", "API", "SaaS", 
  "PaaS", "IaaS", "DNS", "LAN", "WAN", "UI", "UX", "CMS", "ERP", 
  "CRM", "SMTP", "POP3", "IMAP", "RAID", "OOTBE"
];

const bingoHint1 = [
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

const bingoHint2 = [
  "For all things digital, this is the key.",
  "The brain of a PC, as smart as can be.",
  "Quick data storage that's not built to last.",
  "Spinning disk magic, from the past.",
  "No moving parts, just data's grace.",
  "Graphics powerhouse for a visual embrace.",
  "Software core that runs the show.",
  "Local network hub where data does flow.",
  "Across wide spaces, connections fly.",
  "Secure tunnel for privacy, oh my!",
  "Translates names to numbers with grace.",
  "Unique address for every digital space.",
  "Web browsing protocol, plain to see.",
  "Encrypted browsing for security.",
  "Web address that points the way.",
  "Markup language that colors the day.",
  "Styling language for web design so neat.",
  "Server-side scripting for web feats.",
  "Database language with queries in a line.",
  "Bridging software worlds, a true sign.",
  "Toolkit for developers, a coding parade.",
  "Environment for software, where dreams are made.",
  "Visual interface for software's domain.",
  "Text-based control, where commands reign.",
  "Interconnected devices, a web they weave.",
  "Wireless network, devices receive.",
  "Voices over data, through the air.",
  "Near-field magic, without a care.",
  "Secure data tunnel, trust it's true.",
  "Encrypted transmission, for me and you.",
  "Remote connection, desktop's grace.",
  "Data transfer protocol, at a steady pace.",
  "Remote control of computers, no dismay.",
  "File sharing on networks, come what may.",
  "Reliable data delivery, smooth as a song.",
  "Fast transmission, but it may go wrong.",
  "Injections of code, a sneaky art.",
  "Deceptive actions, a trap to impart.",
  "HTML's new age, multimedia delight.",
  "CSS with flair, styles taking flight.",
  "Storage connection, data's path.",
  "Peripheral hub, no aftermath.",
  "Secure browsing tunnel, secrets untold.",
  "Software communication, stories unfold.",
  "Software on the cloud, a floating embrace.",
  "Platform for software, a developer's space.",
  "Virtualized resources, flexibility to find.",
  "Translating names, for data of any kind.",
  "Local connections, devices combine.",
  "Distance bridged, a global line.",
  "Software's face, where users unite.",
  "User experience, a guiding light.",
  "Content's manager, websites it guards.",
  "Business processes, in its cards.",
  "Customer relations, managed with care.",
  "Email sending, a message to bear.",
  "Email retrieval, a local quest.",
  "Email management, it's the best.",
  "Data protection, speed's true friend.",
  "Initial setup, where journeys ascend."
];

const bingoHint3 = [
  "Data Skills",
  "Core Execution Component",
  "Unpredictable Entry Storage",
  "Solid Disc Device",
  "Stable Condition Device",
  "Visuals Handling Component",
  "Functioning Structure",
  "Nearby Region Connectivity",
  "Extensive Region Connectivity",
  "Simulated Secure Connectivity",
  "Area Title Structure",
  "Web Procedure",
  "Linked text Movement Procedure",
  "Linked text Movement Procedure Protected",
  "Consistent Content Identifier", "A web address used to locate sites on the internet.",
  "A markup language employed to structure web content.",
  "A styling language used for web content presentation.",
  "A scripting language commonly utilized in web development.",
  "A language dedicated to managing and querying databases.",
  "An interface facilitating communication between diverse software systems.",
  "A kit providing tools for creating software applications.",
  "An environment equipped with coding utilities and features.",
  "An interface employing icons and visuals for software interaction.",
  "An interface relying on text commands for computer interaction.",
  "The interconnectedness of devices, facilitating data sharing.",
  "A wireless network catering to a confined area like a cafe.",
  "A protocol enabling voice calls over the internet.",
  "A technology enabling contactless data exchange.",
  "A technology ensuring secure online data transmission.",
  "A security protocol safeguarding data during transmission.",
  "A protocol used for remote computer control.",
  "A protocol dedicated to file transfer over networks.",
  "A protocol ensuring secure remote access to computers.",
  "A protocol designed for sharing files and printers over networks.",
  "A protocol ensuring dependable data transmission.",
  "A protocol designed for high-speed yet unreliable data transmission.",
  "An attack involving the injection of malicious scripts into websites.",
  "An attack that manipulates users into unintended actions.",
  "The version of HTML introducing multimedia and interactivity.",
  "The version of CSS incorporating animations and enhanced styling.",
  "A technology connecting storage devices to computers.",
  "A common interface linking devices like printers and flash drives.",
  "A network connection method offering secure and private browsing.",
  "An interface enabling communication between distinct software systems.",
  "A model offering internet-based software access.",
  "A model serving as a platform for software development.",
  "A model providing virtualized computing resources online.",
  "A system that translates user-friendly URLs into IP addresses.",
  "A network connecting devices within confined areas.",
  "A network spanning extensive geographical regions.",
  "A crucial software component facilitating user interaction.",
  "An approach emphasizing enhanced user experience during software interaction.",
  "A system overseeing digital content such as websites.",
  "Software responsible for integrating and managing business processes.",
  "A system managing interactions with customers.",
  "A protocol used for sending emails between servers and clients.",
  "A protocol for retrieving and storing emails locally.",
  "A protocol facilitating access and management of emails on servers.",
  "A technology combining multiple drives for data protection and speed.",
  "The initial installation of an OS without any customization."
];

const bingoHintArrays = [bingoHint1, bingoHint2, bingoHint3];

const termToHintArrayIndex = [
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0, // Indices for bingoHint1, bingoHint2, bingoHint3 for the first 10 terms
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0, // Indices for bingoHint1, bingoHint2, bingoHint3 for the next 10 terms
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0, // Indices for bingoHint1, bingoHint2, bingoHint3 for the next 10 terms
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0, // Indices for bingoHint1, bingoHint2, bingoHint3 for the next 10 terms
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0, // Indices for bingoHint1, bingoHint2, bingoHint3 for the last 9 terms
];

function getHintArrayByIndex(index) {
  return bingoHintArrays[index];
}