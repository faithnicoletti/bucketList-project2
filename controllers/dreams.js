const Dream = require('../models/dream');

const Career = require('../models/career');
const Travel = require('../models/travel');
const Taste = require('../models/taste');
const Hobby = require('../models/hobby');
const Fitness = require('../models/fitness');

module.exports = {
    index,
    careers: careersList,
    travels: travelsList,
    taste: tasteList,
    hobbies: hobbiesList,
    fitness: fitnessList, 
    new: newCareer, 
    new: newTravel, 
    new: newTaste, 
    new: newHobby, 
    new: newFitness, 
    // createCareer, 
    // createTravel, 
    // createTaste, 
    // createHobby, 
    // createFitness
};


async function index(req, res) {
    res.render('dreams/index');
  }

async function careersList(req, res) {
    try {
      const careers = await Career.find({});
      res.render('dreams/careers', { careers });
    } catch (err) {
      console.log(err);
      res.render('dreams/careers', { errorMsg: err.message });
    }
  }
  
  async function travelsList(req, res) {
    try {
      const travels = await Travel.find({});
      res.render('dreams/travels', { travels });
    } catch (err) {
      console.log(err);
      res.render('dreams/travels', { errorMsg: err.message });
    }
  }
  
  async function tasteList(req, res) {
    try {
      const taste = await Taste.find({});
      res.render('dreams/taste', { taste });
    } catch (err) {
      console.log(err);
      res.render('dreams/taste', { errorMsg: err.message });
    }
  }
  
  async function hobbiesList(req, res) {
    try {
      const hobbies = await Hobby.find({});
      res.render('dreams/hobbies', { hobbies });
    } catch (err) {
      console.log(err);
      res.render('dreams/hobbies', { errorMsg: err.message });
    }
  }
  
  async function fitnessList(req, res) {
    try {
      const fitness = await Fitness.find({});
      res.render('dreams/fitness', { fitness });
    } catch (err) {
      console.log(err);
      res.render('dreams/fitness', { errorMsg: err.message });
    }
  }

  function newCareer(req, res){
    res.render('dreams/new-career', { errorMsg: ''});
  }
  function newTravel(req, res){
    res.render('dreams/new-travel', { errorMsg: ''});
  }
  function newTaste(req, res){
    res.render('dreams/new-taste', { errorMsg: ''});
  }
  function newHobby(req, res){
    res.render('dreams/new-hobby', { errorMsg: ''});
  }
  function newFitness(req, res){
    res.render('dreams/new-fitness', { errorMrsg: ''});
  }

  // async function createCareer(req, res){
  //   try{

  //   } catch {
      
  //   }
  // }
  // async function createTravel(req, res){
  //   try{

  //   } catch {

  //   }
  // }
  // async function createTaste(req, res){
  //   try{

  //   } catch {

  //   }
  // }
  // async function createHobby(req, res){
  //   try{

  //   } catch {

  //   }
  // }
  // async function createFitness(req, res){
  //   try{

  //   } catch {

  //   }
  // }
 