// import React from "react";
// import {
//   homepageCourses,
//   homepageProfileDetails,
//   statisticsData,
//   taskPorgressData,
//   todoList,
//   uiuxHomeData,
// } from "@/utils/mockData";
// import styles from "./Dashboard.module.css";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import { centerTextPlugin } from "../../../plugins/centerTextPlugin";
// import Calender from "../calendar/Calendar";
// import ProgressBar from "@ramonak/react-progress-bar";
// import CommonButton from "../commonButton/CommonButton";

// ChartJs.register(ArcElement, Tooltip, Legend, centerTextPlugin);

// interface ProfileDetail {
//   id: number;
//   icon: string;
//   title: string;
//   subTxt: string;
//   backgroundColor: string;
//   subTXTclr: string;
// }

// interface CourseDetail {
//   id: number;
//   icon: string;
//   title: string;
//   bgClr: string;
// }

// const miniIcons = [
//   { id: 1, icon: "/svg/books.svg", title2: "24" },
//   { id: 2, icon: "/svg/notes.svg", title2: "24" },
//   { id: 3, icon: "/svg/people.svg", title2: "24" },
// ];

// interface MiniIconsDetail {
//   id: number;
//   icon: string;
//   title2: string;
// }

// interface StatisticsDetail {
//   id: number;
//   icon: string;
//   title: string;
//   subTXT: string;
// }

// interface ToDoList {
//   id: number;
//   title: string;
//   date: string;
// }

// interface TaskProgressDataDetail {
//   id: number;
//   title: string;
//   value: string;
//   text: string;
// }

// interface UiUxintroDetail {
//   id: number;
//   title: string;
//   icon: string;
// }

// const DashboardScreen: React.FC = () => {
//   const data = {
//     labels: ["Yes", "No"],
//     datasets: [
//       {
//         label: "Poll",
//         data: [75, 25],
//         backgroundColor: ["#25F446", "gray"],
//         borderColor: ["#25F446", "gray"],
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <div className="w-full">
//       <div className="flex items-center gap-2">
//         <h1>Hello Maietry</h1>
//         <img src="/svg/waveIcon.svg" alt="Wave Icon" />
//       </div>
//       <p className="text-subTXTColor montserrat-font font-thin">
//         Let’s learn something new today!
//       </p>
//       <div className="grid grid-cols-4 gap-5 w-full">
//         <div className="flex items-center my-10 col-span-2 border-r-2 border-gray-300 ">
//           {homepageProfileDetails.map((item: ProfileDetail) => (
//             <div key={item.id} className={styles.profile_details}>
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="p-4 rounded-xl"
//                 style={{ backgroundColor: item.backgroundColor }}
//               />
//               <div>
//                 <p>{item.title}</p>
//                 <span
//                   className="montserrat-font font-bold text-[22px]"
//                   style={{ color: item.subTXTclr }}
//                 >
//                   {item.subTxt}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center col-span-2 p-5  gap-24">
//           <div className="flex flex-col align-middle justify-center">
//             <div className="flex flex-col gap-2">
//               <h3>Time Spendings</h3>
//               <p className="text-subTXTColor">Weekly report</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <h3>231h 14m</h3>
//               <span className={`montserrat-font ${styles.percentage}`}>
//                 +18.4%
//               </span>
//             </div>
//           </div>
//           <div className={styles.doughnutContainer}>
//             <Doughnut data={data} options={options} />
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
//         <div className="lg:col-span-2 flex flex-col">
//           <div
//             className="mb-5 bg-white p-7 flex justify-between"
//             style={{ borderRadius: "30px" }}
//           >
//             {homepageCourses.map((item: CourseDetail) => (
//               <div
//                 key={item.id}
//                 style={{ backgroundColor: item.bgClr }}
//                 className={styles.contentContainer}
//               >
//                 <img
//                   src={item.icon}
//                   className="mx-auto mb-3"
//                   alt={item.title}
//                 />
//                 <h3 className="text-center text-white">{item.title}</h3>
//                 <div className="flex justify-between bg-white p-4 rounded-lg mt-7">
//                   {miniIcons.map((miniItem: MiniIconsDetail) => (
//                     <div
//                       key={miniItem.id}
//                       className="flex justify-center gap-2"
//                     >
//                       <img src={miniItem.icon} alt={miniItem.title2} />
//                       <p className="montserrat-font">{miniItem.title2}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-5">
//             <div className="mb-10 flex justify-between flex-grow bg-white rounded-lg p-7">
//               <div>
//                 <h3>Statistics</h3>
//                 <p className="text-subTXTColor my-2">Jan - June 2021</p>

//                 <div className="pt-3">
//                   {statisticsData.map((item: StatisticsDetail) => (
//                     <div key={item.id} className="flex gap-3 items-center mt-3">
//                       <img src={item.icon} alt={item.title} />
//                       <div>
//                         <h6>{item.title}</h6>
//                         <h6>{item.subTXT}</h6>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="w-2/4 flex items-center">
//                 <CircularProgressbar
//                   value={75}
//                   text="75%"
//                   styles={buildStyles({
//                     pathColor: "#37AD24",
//                     textColor: "#33AC72",
//                     trailColor: "#d6d6d6",
//                   })}
//                 />
//               </div>
//             </div>
//             <div className="mb-10 w-2/5 bg-white rounded-lg p-7">
//               <div>
//                 <h3>Performance</h3>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div
//                       className="w-[16px] h-[16px] rounded"
//                       style={{ backgroundColor: "#45A8A3" }}
//                     ></div>
//                     <p className="text-subTXTColor my-2">Point Progress</p>
//                   </div>
//                   <div>
//                     <select className="rounded p-1">
//                       <option value="weekly">Weekly</option>
//                       <option value="monthly">Monthly</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-5">
//             <div className="mb-10 flex justify-between flex-grow bg-white rounded-lg p-7">
//               <div className="w-full">
//                 <h3>Task Progress</h3>
//                 <div className="flex flex-col gap-5 pt-8 w-full">
//                   {taskPorgressData.map((item: TaskProgressDataDetail) => (
//                     <div key={item.id} className="w-full">
//                       <div className="flex align-middle justify-between">
//                         <h6 className="mb-2">{item.title}</h6>
//                         <p className="text-subTXTColor">{item.text}</p>
//                       </div>
//                       <ProgressBar
//                         completed={item.value}
//                         bgColor="#4caf50"
//                         baseBgColor="#e0e0df"
//                         width="100%"
//                         height="5px"
//                         labelAlignment="center"
//                         labelColor="#ffffff"
//                         labelSize="12px"
//                         isLabelVisible={false}
//                         transitionDuration="1s"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="mb-10 flex justify-between flex-grow bg-white rounded-lg p-7">
//               <div className="w-full">
//                 <div className="flex justify-between">
//                   <h3>UI/UX Introduction</h3>
//                   <div className="border-gray-300 border-2 rounded-lg">
//                     <select className="rounded p-1">
//                       <option value="weekly">Today</option>
//                       <option value="monthly">Yesterday</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-5">
//                   <div>
//                     {uiuxHomeData.slice(0, 2).map((item: UiUxintroDetail) => (
//                       <div
//                         key={item.id}
//                         className="flex align-middle gap-2 mr-10 mt-5"
//                       >
//                         <img src={item.icon} alt="icons" />
//                         <p className="text-subTXTColor">{item.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <div>
//                     {uiuxHomeData.slice(2).map((item: UiUxintroDetail) => (
//                       <div
//                         key={item.id}
//                         className="flex align-middle gap-2 mr-10 mt-5"
//                       >
//                         <img src={item.icon} alt="icons" />
//                         <p className="text-subTXTColor">{item.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="pt-9">
//                   <h6>Students</h6>
//                   <div className="flex align-middle gap-10 my-7">
//                     <img src="/images/studentsIMG.png" alt="students" />
//                     <p className="text-subTXTColor">
//                       + 25 people joined the class
//                     </p>
//                   </div>
//                   <CommonButton
//                     label="Join the class"
//                     bgClr="#F6BE0F"
//                     fontCLR="black"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="lg:col-span-1 bg-white"
//           style={{ borderRadius: "30px" }}
//         >
//           <div className="flex align-baseline justify-between p-7">
//             <h3>Profile</h3>
//             <img src="/svg/profileEditIcon.svg" alt="Profile Edit Icon" />
//           </div>
//           <div className="flex flex-col items-center justify-center mb-8 gap-2">
//             <img
//               src="/svg/profileIMG.svg"
//               alt="profilePicture"
//               className="mb-4"
//             />
//             <h6>Devon Lane</h6>
//             <p className="text-subTXTColor">College Student</p>
//             <div className="px-4">
//               <Calender />
//             </div>
//           </div>
//           <h3 className="px-7">To do List</h3>
//           <div className="my-5 flex flex-col">
//             {todoList.map((item: ToDoList) => (
//               <div
//                 key={item.id}
//                 className={`flex align-middle gap-5 border-b-2 border-gray-200 py-3 px-7 ${styles.custom_checkbox}`}
//               >
//                 <input type="checkbox" />
//                 <div>
//                   <h6>{item.title}</h6>
//                   <p className="text-subTXTColor">{item.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardScreen;
