'use strict';
const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);

router.get('/login', ctrl.login);

module.exports= router;

//여기는 라우팅을 어떻게 할지 즉 사용자의 req.url에 따른 연결을 중간처리하는 곳