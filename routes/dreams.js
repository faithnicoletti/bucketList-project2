const express = require('express');
const router = express.Router();

const dreamsController = require('../controllers/dreams');

router.get('/', dreamsController.index);
router.get('/index-completed', dreamsController.indexCompleted);

router.get('/careers', dreamsController.careersList); // Route for careers schema
router.get('/new-career', dreamsController.newCareer);
router.post('/careers', dreamsController.createCareer);
router.get('/careers/:id', dreamsController.showCareer);
router.get('/careers/edit/:id', dreamsController.editCareer);
router.put('/careers/:id', dreamsController.updateCareer);
router.delete('/careers/:id', dreamsController.deleteCareer);
router.get('/careersCompleted', dreamsController.careersCompleted);
router.post('/careersCompleted', dreamsController.createCompletedCareer);
router.get('/careersCompleted/:id', dreamsController.showCareerCompleted);
router.get('/careersCompleted/edit/:id', dreamsController.editCareerCompleted);
router.put('/careersCompleted/:id', dreamsController.updateCareerCompleted);
router.delete('/careersCompleted/:id', dreamsController.deleteCareerCompleted);

router.get('/travels', dreamsController.travelsList); // Route for travels schema
router.get('/new-travel', dreamsController.newTravel);
router.post('/travels', dreamsController.createTravel);
router.get('/travels/:id', dreamsController.showTravel);
router.get('/travels/edit/:id', dreamsController.editTravel);
router.put('/travels/:id', dreamsController.updateTravel);
router.delete('/travels/:id', dreamsController.deleteTravel);
router.get('/travelsCompleted', dreamsController.travelsCompleted);
router.post('/travelsCompleted', dreamsController.createCompletedTravel);
router.get('/travelsCompleted/:id', dreamsController.showTravelCompleted);
router.get('/travelsCompleted/edit/:id', dreamsController.editTravelCompleted);
router.put('/travelsCompleted/:id', dreamsController.updateTravelCompleted);
router.delete('/travelsCompleted/:id', dreamsController.deleteTravelCompleted);

router.get('/taste', dreamsController.tasteList); // Route for taste schema
router.get('/new-taste', dreamsController.newTaste);
router.post('/taste', dreamsController.createTaste);
router.get('/taste/:id', dreamsController.showTaste);
router.get('/taste/edit/:id', dreamsController.editTaste);
router.put('/taste/:id', dreamsController.updateTaste);
router.delete('/taste/:id', dreamsController.deleteTaste);
router.get('/tasteCompleted', dreamsController.tasteCompleted);
router.post('/tasteCompleted', dreamsController.createCompletedTaste);
router.get('/tasteCompleted/:id', dreamsController.showTasteCompleted);
router.get('/tasteCompleted/edit/:id', dreamsController.editTasteCompleted);
router.put('/tasteCompleted/:id', dreamsController.updateTasteCompleted);
router.delete('/tasteCompleted/:id', dreamsController.deleteTasteCompleted);

router.get('/hobbies', dreamsController.hobbiesList); // Route for hobbies schema
router.get('/new-hobby', dreamsController.newHobby);
router.post('/hobbies', dreamsController.createHobby);
router.get('/hobbies/:id', dreamsController.showHobby);
router.get('/hobbies/edit/:id', dreamsController.editHobby);
router.put('/hobbies/:id', dreamsController.updateHobby);
router.delete('/hobbies/:id', dreamsController.deleteHobby);
router.get('/hobbiesCompleted', dreamsController.hobbiesCompleted);
router.post('/hobbiesCompleted', dreamsController.createCompletedHobby);
router.get('/hobbiesCompleted/:id', dreamsController.showHobbyCompleted);
router.get('/hobbiesCompleted/edit/:id', dreamsController.editHobbyCompleted);
router.put('/hobbiesCompleted/:id', dreamsController.updateHobbyCompleted);
router.delete('/hobbiesCompleted/:id', dreamsController.deleteHobbyCompleted);

router.get('/fitness', dreamsController.fitnessList); // Route for fitness schema
router.get('/new-fitness', dreamsController.newFitness);
router.post('/fitness', dreamsController.createFitness);
router.get('/fitness/:id', dreamsController.showFitness);
router.get('/fitness/edit/:id', dreamsController.editFitness);
router.put('/fitness/:id', dreamsController.updateFitness);
router.delete('/fitness/:id', dreamsController.deleteFitness);
router.get('/fitnessCompleted', dreamsController.fitnessCompleted);
router.post('/fitnessCompleted', dreamsController.createCompletedFitness);
router.get('/fitnessCompleted/:id', dreamsController.showFitnessCompleted);
router.get('/fitnessCompleted/edit/:id', dreamsController.editFitnessCompleted);
router.put('/fitnessCompleted/:id', dreamsController.updateFitnessCompleted);
router.delete('/fitnessCompleted/:id', dreamsController.deleteFitnessCompleted);

module.exports = router;




