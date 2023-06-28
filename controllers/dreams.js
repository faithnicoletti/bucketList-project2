const Dream = require('../models/dream');

const Career = require('../models/career');
const Travel = require('../models/travel');
const Taste = require('../models/taste');
const Hobby = require('../models/hobby');
const Fitness = require('../models/fitness');

module.exports = {
    index,

    careersList,
    travelsList,
    tasteList,
    hobbiesList,
    fitnessList,

    newCareer, 
    newTravel, 
    newTaste, 
    newHobby, 
    newFitness, 

    createCareer, 
    createTravel, 
    createTaste, 
    createHobby, 
    createFitness, 

    showCareer, 
    showTravel, 
    showTaste, 
    showHobby, 
    showFitness, 

    editCareer, 
    editTravel,
    editTaste, 
    editHobby, 
    editFitness, 

    updateCareer, 
    updateTravel, 
    updateTaste, 
    updateHobby, 
    updateFitness, 

    deleteCareer, 
    deleteTravel, 
    deleteTaste, 
    deleteHobby, 
    deleteFitness, 

    indexCompleted, 
    
    careersCompleted, 
    createCompletedCareer, 
    CompleteCareerButtonListener, 
    showCareerCompleted,
    editCareerCompleted, 
    updateCareerCompleted, 
    deleteCareerCompleted
};


async function index(req, res) {
    res.render('dreams/index');
  }

async function careersList(req, res) {
    try {
      const careers = await Career.find({completed: false});
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
    res.render('dreams/new-fitness', { errorMsg: ''});
  }







  async function createCareer(req, res){
    try{
      await Career.create(req.body);
      res.redirect('/dreams/careers');
    } catch (err) {
      console.log(err);
      res.render('dreams/new-career', {errorMsg: err.message});
    }
  }
  async function createTravel(req, res){
    try{
      await Travel.create(req.body);
      res.redirect('/dreams/travels');
    } catch (err) {
      console.log(err);
      res.render('dreams/new-travel', { errorMsg: err.message});
    }
  }
  async function createTaste(req, res){
    try{
      await Taste.create(req.body);
      res.redirect('/dreams/taste');
    } catch (err) {
      console.log(err);
      res.render('dreams/new-taste', {errorMsg: err.message});
    }
  }
  async function createHobby(req, res){
    try{
      await Hobby.create(req.body);
      res.redirect('/dreams/hobbies');
    } catch(err) {
      console.log(err);
      res.render('dreams/new-hobby', { errorMsg: err.message} )
    }
  }
  async function createFitness(req, res){
    try{
      await Fitness.create(req.body);
      res.redirect('/dreams/fitness', )
    } catch(err) {
      console.log(err);
      res.render('dreams/new-fitness', {errorMsg: err.message });
    }
  }






  async function showCareer(req, res){
    try {
      const career = await Career.findById(req.params.id);
      res.render('dreams/show-career', { career });
    } catch (err) {
      console.log(err);
      res.redirect('/dreams/careers');
    }
  } 
  async function showTravel(req, res){
    try {
      const travel = await Travel.findById(req.params.id);
      res.render('dreams/show-travel', { travel });
    } catch (err) {
      console.log(err);
      res.redirect('/dreams/travels');
    }
  } 
  async function showTaste(req, res){
    try {
      const taste = await Taste.findById(req.params.id);
      res.render('dreams/show-taste', { taste });
    } catch (err) {
      console.log(err);
      res.redirect('/dreams/taste');
    }
  } 
  async function showHobby(req, res){
    try {
      const hobby = await Hobby.findById(req.params.id);
      res.render('dreams/show-hobby', { hobby });
    } catch (err) {
      console.log(err);
      res.redirect('/dreams/hobbies');
    }
  } 
  async function showFitness(req, res){
    try {
      const fitness = await Fitness.findById(req.params.id);
      res.render('dreams/show-fitness', { fitness });
    } catch (err) {
      console.log(err);
      res.redirect('/dreams/fitness');
    }
  } 
 




  async function editCareer(req, res) {
    try {
      const career = await Career.findById(req.params.id);
      res.render('dreams/edit-career', { career });
    } catch (err) {
      res.redirect('dreams/careers/');
    }
  }
  async function editTravel(req, res) {
    try {
      const travel = await Travel.findById(req.params.id);
      res.render('dreams/edit-travel', { travel });
    } catch (err) {
      res.redirect('dreams/travels/');
    }
  }
  async function editTaste(req, res) {
    try {
      const taste = await Taste.findById(req.params.id);
      res.render('dreams/edit-taste', { taste });
    } catch (err) {
      res.redirect('dreams/taste/');
    }
  }
  async function editHobby(req, res) {
    try {
      const hobby = await Hobby.findById(req.params.id);
      res.render('dreams/edit-hobby', { hobby });
    } catch (err) {
      res.redirect('dreams/hobbies/');
    }
  }
  async function editFitness(req, res) {
    try {
      const fitness = await Fitness.findById(req.params.id);
      res.render('dreams/edit-fitness', { fitness });
    } catch (err) {
      res.redirect('dreams/fitness/');
    }
  }




  async function updateCareer(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/dreams/careers/' + req.params.id)
    }  catch (err) {
      res.render(`/dreams/careers/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }

  async function updateTravel(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/dreams/travels/' + req.params.id)
    }  catch (err) {
      res.render(`/dreams/travels/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }
  async function updateTaste(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/dreams/taste/' + req.params.id)
    }  catch (err) {
      res.render(`/dreams/taste/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }
  async function updateHobby(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/dreams/hobbies/' + req.params.id)
    }  catch (err) {
      res.render(`/dreams/hobbies/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }
  async function updateFitness(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/dreams/fitness/' + req.params.id)
    }  catch (err) {
      res.render(`/dreams/fitness/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }




  async function deleteCareer(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/dreams/careers');
    }  catch (err) {
      res.render('/dreams/careers', { errorMsg: err.message });
    }
  }
  async function deleteTravel(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/dreams/travels');
    }  catch (err) {
      res.render('/dreams/travels', { errorMsg: err.message });
    }
  }
  async function deleteTaste(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/dreams/taste');
    }  catch (err) {
      res.render('/dreams/taste', { errorMsg: err.message });
    }
  }
  async function deleteHobby(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/dreams/hobbbies');
    }  catch (err) {
      res.render('/dreams/hobbies', { errorMsg: err.message });
    }
  }
  async function deleteFitness(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/dreams/fitness');
    }  catch (err) {
      res.render('/dreams/fitness', { errorMsg: err.message });
    }
  }

  



  async function indexCompleted(req, res) {
    res.render('dreams/index-completed');
  }


  async function careersCompleted(req, res) {
    try {
      const careers = await Career.find({completed: true});
      res.render('dreams/careersCompleted', { careers: careers });
    } catch (err) {
      console.log(err);
      res.render('dreams/careersCompleted', { errorMsg: err.message });
    }
  }

  function CompleteCareerButtonListener() {
    const completeButton = document.getElementById('complete-button');
  
    completeButton.addEventListener('click', async () => {
      try {
        const careerId = '<%= career.id %>'; // Obtain the career ID dynamically
  
        const response = await fetch('/dreams/careersCompleted', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ careerId }),
        });
  
        // Handle the response as needed
      } catch (error) {
        console.error('Error completing career:', error);
        // Handle the error appropriately
      }
    });
  }

  async function createCompletedCareer(req, res) {
    try {
      const { careerId } = req.body;
  
      // Find the career by ID
      const career = await Career.findById(careerId);
  
      if (!career) {
        return res.status(404).json({ error: 'Career not found' });
      }
  
      // Update the career's "completed" status to true
      career.completed = true;
      await career.save();
  
      // Respond with a success message or appropriate data
      res.json({ message: 'Career completed successfully' });
    } catch (error) {
      console.error('Error completing career:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async function showCareerCompleted(req, res){
    try {
      const career = await Career.findById(req.params.id);
      res.render('dreams/show-careerCompleted', { career });
    } catch (err) {
      console.log(err);
      res.redirect('/dreams/careersCompleted');
    }
  }

  async function editCareerCompleted(req, res) {
    try {
      const career = await Career.findById(req.params.id);
      res.render('dreams/edit-careerCompleted', { career });
    } catch (err) {
      res.redirect('dreams/careersCompleted/');
    }
  }

  async function updateCareerCompleted(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/dreams/careersCompleted/' + req.params.id)
    }  catch (err) {
      res.render(`/dreams/careersCompleted/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }

  async function deleteCareerCompleted(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/dreams/careersCompleted');
    }  catch (err) {
      res.render('/dreams/careersCompleted', { errorMsg: err.message });
    }
  }