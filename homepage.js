
let toggleMenu = document.getElementById("navLinks");
function showMenu() {
  toggleMenu.style.top = "0"
}
function hideMenu() {
  toggleMenu.style.top = "-100vh"
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.addEventListener('DOMContentLoaded', function () { 
  var calendarEl = document.getElementById('calendar');

  // Function to generate events across multiple years
  function generateYearlyEvents(baseEvent, startYear, endYear) {
    let events = [];
    for (let year = startYear; year <= endYear; year++) {
      let event = Object.assign({}, baseEvent); // Clone the base event
      event.start = year + baseEvent.start.substr(0); // Adjust the year of the event
      if (baseEvent.end) {
        event.end = year + baseEvent.end.substr(0); // Adjust the year for the end date if it exists
      }
      events.push(event);
    }
    return events;
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Month view by default
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      ...generateYearlyEvents({
        title: 'Eid-Malud Holiday',
        start: '-09-16',
        allDay: true
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: 'Independence Day 💚🤍💚',
        start: '-10-01',
        allDay: true
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: 'National Day @ ICEL',
        start: '-10-02',
        allDay: true
      }, 2023, 2030),
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-09-30T13:00:00',
        end: '2024-09-30T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-10-28T13:00:00',
        end: '2024-09-28T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-11-25T13:00:00',
        end: '2024-11-25T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-12-30T13:00:00',
        end: '2024-12-30T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2025-01-27T13:00:00',
        end: '2025-01-27T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2025-02-24T13:00:00',
        end: '2025-02-24T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2025-03-31T13:00:00',
        end: '2025-03-31T14:00:00',
      },
      ...generateYearlyEvents({
        title: 'End of the Year Gift Distribution 🎁',
        start: '-12-11',
        end: '-12-14',
        allDay: true
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: 'End of the Year Celebration/Official Close of business 2024',
        start: '-12-19',
        end: '-12-21',
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: 'Christmas Holiday 🎄🎅🏽',
        start: '-12-23',
        end: '-12-27',
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "New Year's Holiday 🎆✨",
        start: '-12-31',
        end: '2025-01-02',
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Valentine's Day 💝💘",
        start: '-02-14',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Ash Wednesday",
        start: '-03-05',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Women's Day",
        start: '-03-08',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Good Friday",
        start: '-04-18',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Holy Saturday",
        start: '-04-19',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Easter Sunday",
        start: '-04-21',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Easter Monday",
        start: '-05-01',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Children's Day 👩‍👦",
        start: '-05-27',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Father's Day 👩‍👦",
        start: '-05-27',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Timothy's Birthday (EDO) 🎈🎉",
        start: '-02-03',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Adetola's Birthday (MD) 🎈🎉",
        start: '-01-20',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Dapo's Birthday (EDS) 🎈🎉",
        start: '-06-13',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Ladi's Birthday (CFO) 🎈🎉",
        start: '-04-17',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Chidi's Birthday (Legal) 🎈🎉",
        start: '-10-31',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Gbemi's Birthday (HR) 🎈🎉",
        start: '-03-13',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Miss Sandra's Birthday (BDM) 🎈🎉",
        start: '-12-29',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mrs Onyinyechi's Birthday 🎈🎉",
        start: '-11-11',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Miss Abosede's Birthday 🎈🎉",
        start: '-08-20',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Miss Cecelia's Birthday 🎈🎉",
        start: '-05-06',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Benjamin's Birthday 🎈🎉",
        start: '-05-27',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Joel's Birthday 🎈🎉",
        start: '-01-21',
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Henry's Birthday 🎈🎉",
        start: "-09-20",
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Democracy Day",
        start: "-06-12",
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Itoro's Birthday 🎈🎉",
        start: "-11-18",
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Bamisaye's Birthday 🎈🎉",
        start: "-06-12",
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Kevin's Birthday 🎈🎉",
        start: "-05-05",
        allDay: true,
      }, 2023, 2030),
      ...generateYearlyEvents({
        title: "Mr Uche's Birthday 🎈🎉",
        start: "-04-02",
        allDay: true,
      }, 2023, 2030),
      
      
      

      // Add other events here
    ]
  });

  calendar.render();
});