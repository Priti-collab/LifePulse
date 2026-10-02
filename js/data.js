/* Demo data – edit freely */
const BANKS=[
{n:"City Blood Centre",c:"Delhi",a:"Connaught Place",p:"011-2345-6789",g:["A+","O+","B+","O-"],s:"Available",lat:28.6179,lng:77.2030},
{n:"LifeLine Blood Bank",c:"Ghaziabad",a:"Raj Nagar, Sector 9",p:"0120-456-7890",g:["A+","B+","AB+","O+"],s:"Available",lat:28.6732,lng:77.4478},
{n:"Red Cross Noida",c:"Noida",a:"Sector 18",p:"0120-234-5678",g:["A-","B-","O-","O+"],s:"Limited",lat:28.5395,lng:77.3850},
{n:"Sanjeevani Blood Bank",c:"Lucknow",a:"Hazratganj",p:"0522-345-6789",g:["A+","AB-","B+"],s:"Available",lat:26.8507,lng:80.9402},
{n:"Pink City Blood Bank",c:"Jaipur",a:"MI Road",p:"0141-234-5678",g:["O+","O-","A+","AB+"],s:"Available",lat:26.9164,lng:75.7813},
{n:"Apex Blood Centre",c:"Delhi",a:"Karol Bagh",p:"011-4567-8901",g:["B-","AB-","A-"],s:"Limited",lat:28.6299,lng:77.2180},
{n:"Hope Blood Bank",c:"Ghaziabad",a:"Indirapuram",p:"0120-678-9012",g:["O+","A-","B+"],s:"Available",lat:28.6852,lng:77.4628},
{n:"Nawab Blood Bank",c:"Lucknow",a:"Gomti Nagar",p:"0522-456-7890",g:["AB+","O-","B-"],s:"Limited",lat:26.8627,lng:80.9552}];
const CAMPS=[
{i:"camp1.jpg",n:"Rakt Daan Utsav",o:"ABES Engineering College",d:"2026-10-12",t:"9:00 AM – 3:00 PM",l:"Ghaziabad"},
{i:"camp2.jpg",n:"Lifeline Drive",o:"Red Cross Society",d:"2026-10-18",t:"10:00 AM – 4:00 PM",l:"Delhi"},
{i:"camp3.jpg",n:"Noida Donor Meet",o:"Rotary Club",d:"2026-10-25",t:"9:30 AM – 2:30 PM",l:"Noida"},
{i:"camp4.jpg",n:"Gomti Blood Camp",o:"Sanjeevani Trust",d:"2026-11-02",t:"10:00 AM – 3:00 PM",l:"Lucknow"},
{i:"camp5.jpg",n:"Pink City Drive",o:"Jaipur Youth Club",d:"2026-11-08",t:"9:00 AM – 1:00 PM",l:"Jaipur"},
{i:"camp6.jpg",n:"Campus Care Camp",o:"NSS Unit",d:"2026-11-15",t:"10:00 AM – 4:00 PM",l:"Ghaziabad"}];
const GROUPS={"A+":"Can donate to A+ and AB+. Can receive from A+, A-, O+, O-.","A-":"Can donate to A+, A-, AB+, AB-. Can receive from A-, O-.","B+":"Can donate to B+ and AB+. Can receive from B+, B-, O+, O-.","B-":"Can donate to B+, B-, AB+, AB-. Can receive from B-, O-.","AB+":"Universal recipient – can receive from all groups.","AB-":"Can donate to AB+ and AB-. Can receive from A-, B-, AB-, O-.","O+":"Can donate to all positive groups. Can receive from O+ and O-.","O-":"Universal donor – can donate to all groups."};
const STORIES=[["Aarav Sharma","Delhi","Donating blood gave me a chance to help someone I may never meet.","avatar1.jpg"],["Neha Verma","Ghaziabad","A 20-minute visit became someone's second chance. I'll keep donating.","avatar2.jpg"],["Rohan Singh","Lucknow","LifePulse made finding a camp so easy. Proud to be a regular donor.","avatar3.jpg"]];
