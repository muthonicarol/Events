// let events = [
// {
//   title:'Graduation',
//   Date: new date (['2023-03-01']),
//   Location: 'JKUAT',
//   Attendees:new set (['Aaron', 'Papia', 'Rita', 'Mark', 'Jerome'])
// }
let events = [
  {
      title: 'Graduation',
      date: new Date('2024-03-01'),
      location: 'JKUAT',
      attendees: new Set(['Aaron', 'Papia', 'Rita', 'Mark', 'Jerome'])
  
  },
  {
    title: 'Wedding',
    date: new Date('2024-03-02'),
    location: 'Our Lady Queen of Peace',
    attendees: new Set(['Cate', 'Samara', 'Wambui', 'Martin', 'Ethan', 'Nelly', 'Wausi','James' ])},


  {
    title: 'Birthday',
    date: new Date('2024-03-03'),
    location: 'Nyayo Estate Grounds Gate B',
    attendees: new Set(['Audrey', 'Wangui', 'Maurice', 'Anne', 'Serena', 'Jason', 'Hope','John' ])},

  {
    title: 'Burial',
    date: new Date('2024-03-04'),
    location: 'Langata Cemetry',
    attendees: new Set(['Ikamba', 'Mwendwa', 'Okombo', 'Muthoni', 'Kioko', 'Daniel', 'Elijah' ])},

  {
    title: 'Parents Meeting',
    date: new Date('2024-03-05'),
    location: 'Reby Peter School',
    attendees: new Set(['Elizabet', 'Wacuka', 'Gleen', 'Esther', 'Shinga', 'Maryanne', 'Darlian' ])},


  {  
      title: 'Requiem Mass',
      date: new Date('2024-03-06'),
      location: 'Holy Family Basilica',
      attendees: new Set(['Jack', 'Mama Ruth', 'Mwai', 'Mercy', 'Mwende', 'Violet', 'Aurther' ])},


  {  
      title: 'Baby Shower',
      date: new Date('2024-03-07'),
      location: 'AfroSayari',
      attendees: new Set(['Njeri', 'Milkah', 'Janet', 'Rosebel', 'Jamima', 'Jacinta', 'Anita', 'Eva','Mary','Hariet' ])},

];


console.table(events);

//let eventorganiser = new WeakMap();
//eventorganiser.set({Graduationorganiser:'Graduation'},'Maria');
//eventorganiser.set({weddingorganiser:'wedding'},'Juliet');


//let Graduationorganiser = eventorganiser.get(Graduation);
//console.log("Organizerof the Graduation.",Graduationorganiser);

let eventorganiser = new WeakMap();


let graduationOrganiser = { Graduationorganiser: 'Graduation' };
let weddingOrganiser = { weddingorganiser: 'wedding' };
let birthdayorganiser = {birthdayorganiser: 'Birthday'};
let burialorganiser = {burialorganiser: 'Burial'};
let pmorganiser = {pmorganiser:'Parents meeting'};
let rmorganiser = {rmorganiser:'Requiem Mass'};
let bsorganiser= {bsorganiser:'Baby Shower'};

eventorganiser.set(graduationOrganiser, 'Maria');
eventorganiser.set(weddingOrganiser, 'Juliet');
eventorganiser.set(birthdayorganiser, 'Newton');
eventorganiser.set(burialorganiser, 'Karanja');
eventorganiser.set(pmorganiser, 'tr Agnes');
eventorganiser.set(rmorganiser, 'fr Anthony');
eventorganiser.set(bsorganiser, 'Abigael');


let graduationOrganiserName = eventorganiser.get(graduationOrganiser);
let weddingorganiserName = eventorganiser.get(weddingOrganiser);
let birthdayorganiserName = eventorganiser.get(birthdayorganiser);
let burialorganiserName = eventorganiser.get(burialorganiser);
let pmorganiserName = eventorganiser.get(pmorganiser);
let rmorganiserName = eventorganiser.get(rmorganiser);
let bsorganiserName = eventorganiser.get(bsorganiser);


console.log("Organizer of the Graduation:", graduationOrganiserName);
console.log("Organizer of the wedding",weddingorganiserName);
console.log("Organizer of the Birthday",birthdayorganiserName);
console.log("Organizer of the Burial",burialorganiserName);
console.log("Organizer of the Parents Meeting",pmorganiserName);
console.log("Organizer of the Requiem Mass",rmorganiserName);
console.log("organizer of the Babyshower",bsorganiserName );









const ceremony = [
  { name: 'Graduation', date: new Date('2024-03-01') },
  { name: 'Wedding', date: new Date('2024-03-02') },
  { name: 'Birthday', date: new Date('2024-03-03') },
  { name: 'Burial', date: new Date('2024-03-04') },
  { name: 'Parents meeting', date: new Date('2024-03-05') },
  { name: 'Requiem Mass', date: new Date('2024-03-06') },
  { name: 'Baby Shower', date: new Date('2024-03-07') },

];


const currentDate = new Date()
const sevenDaysFromNow = new Date(currentDate);

sevenDaysFromNow.setDate(currentDate.getDate() + 7);


const upcomingEvents = ceremony.filter(event => event.date >= currentDate && event.date <= sevenDaysFromNow);

const upcomingEventNames = upcomingEvents.map(event => event.name);

console.log('Upcoming events in the next 7 days:', upcomingEventNames);













// ]
// console.table(events);