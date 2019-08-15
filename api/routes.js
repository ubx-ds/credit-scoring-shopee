const express = require('express');
const router = new express.Router();

const CreditController = require('../api/controllers/credit_scoring');

router.get('/scrape/:shop_name', CreditController.scrape);
router.get('/score', CreditController.home)

module.exports = router;