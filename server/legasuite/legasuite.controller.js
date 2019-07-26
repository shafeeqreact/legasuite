const express = require('express');
const router = express.Router();
const legasuiteService = require('./legasuite.service');

// routes
router.get('/WLMGALL', wlmgall);

module.exports = router;

async function wlmgall(req, res, next) {
    legasuiteService.wlmgall(req)
        .then(resp => res.json(resp))
        .catch(err => next(err));
}
