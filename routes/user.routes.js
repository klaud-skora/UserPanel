const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('../user/no-permission');
  } else {
    next();
  }
};


router.get('/logged', isLogged, (req, res) => {
  res.render('logged');
});

router.get('/profile',isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  if(req.user) {
    res.render('settings');
  } else {
    res.redirect('/user/no-permission');
  }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;