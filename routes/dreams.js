const express = require('express');
const router = express.Router();

const dreamsController = require('../controllers/dreams');

router.get('/', dreamsController.index);

router.get('/careers', dreamsController.careersList); // Route for careers schema
router.get('/new-career', dreamsController.newCareer);
router.post('/careers', dreamsController.createCareer);
router.get('/careers/:id', dreamsController.showCareer);
router.get('/careers/edit/:id', dreamsController.editCareer);
router.put('/careers/:id', dreamsController.updateCareer);

router.get('/travels', dreamsController.travelsList); // Route for travels schema
router.get('/new-travel', dreamsController.newTravel);
router.post('/travels', dreamsController.createTravel);
router.get('/travels/:id', dreamsController.showTravel);
router.get('/travels/edit/:id', dreamsController.editTravel);
router.put('/travels/:id', dreamsController.updateTravel);

router.get('/taste', dreamsController.tasteList); // Route for taste schema
router.get('/new-taste', dreamsController.newTaste);
router.post('/taste', dreamsController.createTaste);
router.get('/taste/:id', dreamsController.showTaste);
router.get('/taste/edit/:id', dreamsController.editTaste);
router.put('/taste/:id', dreamsController.updateTaste);

router.get('/hobbies', dreamsController.hobbiesList); // Route for hobbies schema
router.get('/new-hobby', dreamsController.newHobby);
router.post('/hobbies', dreamsController.createHobby);
router.get('/hobbies/:id', dreamsController.showHobby);
router.get('/hobbies/edit/:id', dreamsController.editHobby);
router.put('/hobbies/:id', dreamsController.updateHobby);

router.get('/fitness', dreamsController.fitnessList); // Route for fitness schema
router.get('/new-fitness', dreamsController.newFitness);
router.post('/fitness', dreamsController.createFitness);
router.get('/fitness/:id', dreamsController.showFitness);
router.get('/fitness/edit/:id', dreamsController.editFitness);
router.put('/fitness/:id', dreamsController.updateFitness);

module.exports = router;




