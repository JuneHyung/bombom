const express = require('express');

const {verifyToken} = require('../middlewares');
const {createToken, tokenTest} = require('../controllers/auth');
