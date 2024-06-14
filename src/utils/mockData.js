import AssignmentIcon from "@/components/assignmentIcon/AssignmentIcon";
import CalenderIcon from "@/components/calenderIcon/CalenderIcon";
import ChatIcon from "@/components/chatIcon/ChatIcon";
import ClassIcon from "@/components/classIcon/ClassIcon";
import DashboardIcon from "@/components/dashboardIcon/DashboardIcon";
import DownloadIcon from "@/components/downloadIcon/DownloadIcon";
import EmailIcon from "@/components/emailIcon/EmailIcon";
import FileIcon from "@/components/fileIcon/FileIcon";
import GradeIcon from "@/components/gradeIcon/GradeIcon";
import GroupsIcon from "@/components/groupsIcon/GroupsIcon";
import LogoutIcon from "@/components/logoutIcon/LogoutIcon";
import PaymentIcon from "@/components/paymentIcon/PaymentIcon";
import SettingsIcon from "@/components/settingsIcon/SettingsIcon";
import TrashIcon from "@/components/trashIcon/TrashIcon";
import { title } from "process";

// Create account input fields
export const createAccountData = [
  { id: 1, label: "Email", placeholder: "Enter your email" },
  { id: 2, label: "Password", placeholder: "Enter your password" },
];

// Create account social icons
export const createAccountSocialLogin = [
  {
    id: 1,
    icon: "/svg/google.svg",
    text: "Continue with Google",
  },
  { id: 2, icon: "/svg/facebook.svg", text: "Continue with Facebook" },
];

export const navbarTabs = [
  { id: 1, tab: "Dashboard", icon: DashboardIcon },
  { id: 2, tab: "Projects", icon: AssignmentIcon },
  { id: 3, tab: "My Courses", icon: ClassIcon },
  { id: 4, tab: "Faq", icon: GroupsIcon },
  { id: 5, tab: "Profile", icon: EmailIcon },
  { id: 6, tab: "Task Board", icon: FileIcon },
  { id: 7, tab: "Downloads", icon: DownloadIcon },
  { id: 8, tab: "Settings", icon: SettingsIcon },
  { id: 9, tab: "Log Out", icon: LogoutIcon },
];

export const headerIcons = [
  {
    id: 1,
    icon: "/svg/notificationIcon.svg",
    alt: "notificationIcon",
    onclick: false,
  },
  { id: 2, icon: "/svg/flowerIcon.svg", alt: "flowerIcon", onclick: false },
  { id: 3, icon: "/svg/darkmodeIcon.svg", alt: "darkmodeIcon", onclick: true },
];

export const homepageProfileDetails = [
  {
    id: 1,
    icon: "/svg/hoursIcon.svg",
    title: "Hours Spent",
    subTxt: "34h",
    backgroundColor: "#CFE7CB",
    subTXTclr: "#37AD24",
  },
  {
    id: 2,
    icon: "/svg/resultsIcon.svg",
    title: "Test Results",
    subTxt: "82%",
    backgroundColor: "#F6DEC7",
    subTXTclr: "#FF7A00",
  },
  {
    id: 3,
    icon: "/svg/courseIcon.svg",
    title: "Course Completed",
    subTxt: "15",
    backgroundColor: "#C4E5F7",
    subTXTclr: "#00A3FF",
  },
];

export const homepageCourses = [
  {
    id: 1,
    bgClr: "#00A3FF",
    icon: "/svg/html.svg",
    title: "HTML CSS Basics",
    notes: "24",
    saved: "8",
    people: "99",
  },
  {
    id: 2,
    bgClr: "#FF7A00",
    icon: "/svg/branding.svg",
    title: "Branding Design",
    notes: "24",
    saved: "8",
    people: "99",
  },
  {
    id: 3,
    bgClr: "#00CC21",
    icon: "/svg/graphicDesign.svg",
    title: "Graphic Design",
    notes: "24",
    saved: "8",
    people: "99",
  },
];

export const statisticsData = [
  { id: 1, icon: "/svg/profile.svg", title: "Absence", subTXT: "10%" },
  { id: 2, icon: "/svg/tasks.svg", title: "Tasks & Exam", subTXT: "60%" },
  { id: 3, icon: "/svg/preparation.svg", title: "Preparation", subTXT: "80%" },
];

export const todoList = [
  { id: 1, title: "Deploy with Firebase", date: "Tuesday, 29 June 2021" },
  { id: 2, title: "Push on Github", date: "Monday, 28 June 2021" },
  { id: 3, title: "Design layout homepage", date: "Friday, 25 June 2021" },
  { id: 4, title: "Deploy with Firebase", date: "Friday, 25 June 2021" },
];

export const taskPorgressData = [
  { id: 1, title: "Web Programming", value: "60", text: "8/10" },
  { id: 2, title: "Data and Structures", value: "80", text: "6/15" },
  { id: 3, title: "Artificial Intelligence", value: "50", text: "17/20" },
  { id: 4, title: "UI/UX", value: "90", text: "19/20" },
  { id: 5, title: "Digital Marketing", value: "100", text: "13/20" },
];

export const uiuxHomeData = [
  { id: 1, title: "Monday, 28 June 2021", icon: "/svg/date.svg" },
  { id: 2, title: "Mr. Mark Jefferson", icon: "/svg/profileUiUx.svg" },
  { id: 3, title: "02.00 -03.30 PM", icon: "/svg/clock.svg" },
  { id: 4, title: "Zoom", icon: "/svg/zoom.svg" },
];

export const settingsNotificationData = [
  {
    id: 1,
    title: "Personalized Offers",
    para: "Receive offers made special for you",
  },
  {
    id: 2,
    title: "Online Webinars",
    para: "Get notified about upcoming webinars",
  },
  {
    id: 3,
    title: "New Features  ",
    para: "Updates about new features and product releases",
  },
  {
    id: 4,
    title: "Security and Billing",
    para: "Account security and notifications about billing",
  },
  {
    id: 5,
    title: "Marketing",
    para: "Receive marketing newsletters about our new products.",
  },
];

export const coursesData = [
  {
    id: 1,
    image: "/images/course1.png",
    title: "Basics of Angular",
    rating: "4.4",
    likes: "1.23k",
    para: "Introductory course for Angular and framework basics in web development.",
    time: "30 minutes",
  },
  {
    id: 2,
    image: "/images/course2.png",
    title: "Basics of Angular",
    rating: "4.4",
    likes: "1.23k",
    para: "Introductory course for Angular and framework basics in web development.",
    time: "30 minutes",
  },
  {
    id: 3,
    image: "/images/course3.png",
    title: "Basics of Angular",
    rating: "4.4",
    likes: "1.23k",
    para: "Introductory course for Angular and framework basics in web development.",
    time: "30 minutes",
  },
  {
    id: 4,
    image: "/images/course1.png",
    title: "Digital Marketing",
    rating: "4.4",
    likes: "1.23k",
    para: "Introductory course for Angular and framework basics in web development.",
    time: "30 minutes",
  },
  {
    id: 5,
    image: "/images/course2.png",
    title: "Basics of Angular",
    rating: "4.4",
    likes: "1.23k",
    para: "Introductory course for Angular and framework basics in web development.",
    time: "30 minutes",
  },
  {
    id: 6,
    image: "/images/course3.png",
    title: "Digital Marketing",
    rating: "4.4",
    likes: "1.23k",
    para: "Introductory course for Angular and framework basics in web development.",
    time: "30 minutes",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Chakra Soft UI Version",
    icon: "/svg/projectIcon1.svg",
    budget: "14,000",
    status: "Working",
    completion: 60,
  },
  {
    id: 2,
    title: "Add Progress Track",
    icon: "/svg/projectIcon2.svg",
    budget: "$3,000",
    status: "Canceled",
    completion: 100,
  },
  {
    id: 3,
    title: "Fix Platform Errors",
    icon: "/svg/projectIcon3.svg",
    budget: "14,000",
    status: "Done",
    completion: 70,
  },
  {
    id: 4,
    title: "Launch our Mobile App",
    icon: "/svg/projectIcon4.svg",
    budget: "$32,000",
    status: "Done",
    completion: 40,
  },
  {
    id: 5,
    title: "Add the New Pricing Page",
    icon: "/svg/projectIcon5.svg",
    budget: "14,000",
    status: "Working",
    completion: 90,
  },
  {
    id: 6,
    title: "Add the New Pricing Page",
    icon: "/svg/projectIcon5.svg",
    budget: "14,000",
    status: "Working",
    completion: 25,
  },
  {
    id: 7,
    title: "Add the New Pricing Page",
    icon: "/svg/projectIcon5.svg",
    budget: "14,000",
    status: "Working",
    completion: 50,
  },
  {
    id: 8,
    title: "Add the New Pricing Page",
    icon: "/svg/projectIcon5.svg",
    budget: "14,000",
    status: "Working",
    completion: 70,
  },
];

export const profileTabInputs = [
  { id: 1, label: "First Name" },
  { id: 2, label: "Last Name" },
  { id: 3, label: "Email" },
  { id: 4, label: "Official Mail" },
  { id: 5, label: "Phone Number", type: "number" },
  { id: 6, label: "Address" },
  { id: 7, label: "State" },
  { id: 8, label: "Zip Code", type: "number" },
];

export const profileTabDropdown = [
  {
    id: 1,
    label: "Country",
    options: {
      US: "United States",
      CA: "Canada",
      MX: "Mexico",
      BR: "Brazil",
      AR: "Argentina",
      DE: "Germany",
      FR: "France",
      NG: "Nigeria",
      IN: "India",
      JP: "Japan",
    },
  },
  {
    id: 2,
    label: "Language",
    options: {
      EN: "English",
      ES: "Spanish",
      FR: "French",
      DE: "German",
      JP: "Japanese",
    },
  },
];

export const FaqData = [
  { id: 1, title: "Payment" },
  { id: 2, title: "My Project" },
  { id: 3, title: "Service" },
  { id: 4, title: "Pricing", icon: "/svg/pricing.svg" },
  { id: 5, title: "Product Questions", icon: "/svg/questions.svg" },
];

export const paymentTabData = [
  {
    id: 1,
    title: "What is Webflow and why is it the best website builder?",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "How do you clone a Webflow Template from the Showcase?",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "How do you clone a Webflow Template from the Showcase?",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "How do you clone a Webflow Template from the Showcase?",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const taskBoardData = [
  {
    id: 1,
    title: "Research FAQ page UX Case study",
    // image: "/images/task1.png",
    task: "UI/UX Design",
    bgClr: "white",
    fontClr: "#00BD09",
  },
  {
    id: 2,
    title: "Research FAQ page UX Case study",
    image: "/images/task1.png",
    task: "Code Review",
    bgClr: "white",
    fontClr: "#FE1E1E",
  },
  {
    id: 3,
    title: "Research FAQ page UX Case study",
    image: "/images/task2.png",
    task: "UI/UX Design",
    bgClr: "white",
    fontClr: "#00BD09",
  },
  {
    id: 4,
    title: "Research FAQ page UX Case study",
    image: "/images/task3.png",
    task: "UI/UX Design",
    bgClr: "white",
    fontClr: "#00BD09",
  },
];

export const profileData = [
  { id: 1, icon: "/svg/figma.svg", title: "UI/UX Designer" },
  { id: 2, icon: "/svg/locationIcon.svg", title: "Newcastle upon Tyne" },
  { id: 3, icon: "/svg/Calendar.svg", title: "Joined April 2021" },
];

export const timelineData = [
  {
    id: 1,
    title: "8 Fees have been paid",
    para: "Fees have been paid to the company",
    date: "April, 18, 2023",
    icon: "/svg/pdfIcon.svg",
    iconTXT: "invoices.pdf",
    color: "#E10000",
  },
  {
    id: 2,
    title: "8 Fees have been paid",
    para: "Fees have been paid to the company",
    date: "April, 18, 2023",
    icon: "/svg/clientIcon.svg",
    iconTXT: "invoices.pdf",
    color: " #FF7A00",
  },
  {
    id: 3,
    title: "8 Fees have been paid",
    para: "Fees have been paid to the company",
    date: "April, 18, 2023",
    icon: "/svg/appIcon.svg",
    iconTXT: "invoices.pdf",
    color: "#37AD24",
  },
  {
    id: 4,
    title: "8 Fees have been paid",
    para: "Fees have been paid to the company",
    date: "April, 18, 2023",
    icon: "/svg/pdfIcon.svg",
    iconTXT: "invoices.pdf",
    color: "#00B0FC",
  },
  {
    id: 5,
    title: "8 Fees have been paid",
    para: "Fees have been paid to the company",
    date: "April, 18, 2023",
    icon: "/svg/appIcon.svg",
    iconTXT: "invoices.pdf",
    color: "#B900BD",
  },
];

export const profileAboutData = [
  { id: 1, title: "Full Name: John Doe", icon: "/svg/aboutProfile.svg" },
  { id: 2, title: "Status: Active", icon: "/svg/aboutStatus.svg" },
  { id: 3, title: "Role: UI/UX Designer", icon: "/svg/aboutUIUX.svg" },
  { id: 4, title: "Country: USA", icon: "/svg/aboutLoc.svg" },
  { id: 5, title: "Languages: English", icon: "/svg/aboutLan.svg" },
];
