const { getAllVillains, getVillainById } = require('../db/villain-queries');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  getAllVillains((villainsArray) => {
    res.render('villains', { villains: villainsArray });
  });
});

router.get('/:id', (req, res) => {
  getVillainById(req.params.id)
    .then((villain) => {
      res.render('villain', { villain });
    });
});

module.exports = router;
