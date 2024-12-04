const express = require('express');
const router = express.Router(); // Create a new router instance
const register = require('../controllers/register');
const login = require('../controllers/login');
const doctorlogin = require('../controllers/doctorlogin');
const bookappointment = require('../controllers/bookappoint');
const viewdoctor = require('../controllers/viewdoctor');
const deleted = require('../controllers/delete');
const { isAuthenticated } = require('../middlewares/auth');
const { isAuthenticateddoctororadminoradmin } = require('../middlewares/authdoctor');

// Define the routes for authentication and appointments
router.post('/signup', register.register);
router.post('/signin', login.login);
router.post('/bookappointment', isAuthenticated, bookappointment.book);

router.get('/patient/viewdoctor', isAuthenticated, viewdoctor.doctor);
router.post('/patient/viewdoctor', isAuthenticated, viewdoctor.find);

router.get('/admin/viewpatient', viewdoctor.viewpatient);
router.post('/admin/viewpatient', viewdoctor.findpatient);

router.get('/editpatient/:id', viewdoctor.editpatient);
router.post('/editpatient/:id', viewdoctor.update);

router.get('/delete/:id', deleted.deleted);

router.get('/doctor/viewappointment', bookappointment.viewappointment);
router.get('/admin/viewappointment', bookappointment.viewappointment);

router.get('/viewappointment', bookappointment.findappointment);

router.get('/cancel/:id', bookappointment.updateappointment);

router.get('/editappointment/:id', bookappointment.editappointment);
router.post('/editappointment/:id', bookappointment.postponeappointment);

router.get('/dashboard/edit-profile/:id', isAuthenticated, login.viewprofile);
router.post('/dashboard/edit-profile/:id', isAuthenticated, login.updateprofile);

router.get('/doctor/dashboard/edit-profile/:id', login.doctorviewprofile);
router.post('/doctor/dashboard/edit-profile/:id', login.doctorupdateprofile);

router.post('/doctorregister', register.doctorregister);
router.post('/login', doctorlogin.doctorlogin);
router.post('/adduser', register.adduser);
router.post('/userlogin', login.userlogin);

module.exports = router; // Export the router to be used in server.js
