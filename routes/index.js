const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// Non Routes
router.use((res, req) => {
    res.sendfile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;