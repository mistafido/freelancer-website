const mongoose = require('mongoose');

const Post = require('./database/models/Post');
const Experience = require('./database/models/Experience');
const Education = require('./database/models/Education');
const Certification = require('./database/models/Certification');

mongoose.connect('mongodb://localhost/myPersonalWebsite');


    Experience.create({
        title: 'Web Developer',
        company: 'Isharp Solutions',
        content: 'Front-end Wed Development',
        date: 'Jan 2019 - August 2019'
    }, (error, experience) => {
        console.log(error, experience)
    })
    
    Experience.create({
        title: 'Waiter/Chef',
        company: 'Quickmeals Catering Services',
        content: 'Front-end Wed Development',
        date: 'June 2011 - August 2015'
    }, (error, experience) => {
        console.log(error, experience)
    })
    
    Education.create({
        college: 'AMC Engineering College, Visvesvaraya Technological University',
        degree: 'Masters of Computer Application',
        course: 'Computer Science, Computer Applications',
        gpa: '-.-',
        duration: 'Oct 2020 - Present'
    }, (error, education) => {
        console.log(error, education)
    })
    Education.create({
        college: 'IZEE College of Management and Information Science, Bangalore University',
        degree: 'Bachelor of Computer Application',
        course: 'Computer Science, Computer Applications',
        gpa: '4.5',
        duration: 'June 2016 - July 2019'
    }, (error, education) => {
        console.log(error, education)
    })
    Education.create({
        college: 'ECWA Staff School, Jos',
        degree: 'A Level',
        course: 'High School Examination',
        gpa: '4.5',
        duration: 'June 2005 - July 2011'
    }, (error, education) => {
        console.log(error, education)
    })
    Certification.create({
        position: 'Participant (Tiki-Taka)',
        college: 'Symbiosis Institute of Business management, Bangalore',
        competition: 'Utopia 2018, Eclectica'
    }, (error, certifications) => {
        console.log(error, certifications)
    })
    Certification.create({
        position: '3rd Place',
        college: 'St. Francis De Sales College, Bangalore',
        competition: 'MIMAMSA 2018, Cyber Security'
    }, (error, certifications) => {
        console.log(error, certifications)
    })
    Certification.create({
        position: 'Participant(Futsal)',
        college: 'Symbiosis Institute of Business management, Bangalore',
        competition: 'Utopia 2017, Cynosure'
    }, (error, certifications) => {
        console.log(error, certifications)
    })
    Certification.create({
        position: 'Participant(Poise)',
        college: 'Symbiosis Institute of Business management, Bangalore',
        competition: 'Utopia 2017, Cynosure'
    }, (error, certifications) => {
        console.log(error, certifications)
    })
    Certification.create({
        position: 'Participant',
        college: 'St. Francis De Sales College, Bangalore',
        competition: 'MIMAMSA 2017, Digital Connectivity'
    }, (error, certifications) => {
        console.log(error, certifications)
    })
    






