const express = require('express');

const router = express.Router();

router.get('/', async function (req, res) {
  res.render('admin/dashboard', {
    layout: 'admin',
    navbarBrand: 'Dashboard',
    dashboardActive: 'active',
  });
});

router.get('/user', async function (req, res) {
  res.render('admin/user', {
    layout: 'admin',
    navbarBrand: 'User Profile',
    userActive: 'active',
  });
});

router.get('/tables', async function (req, res) {
  res.render('admin/tables', {
    layout: 'admin',
    navbarBrand: 'Table List',
    tablesActive: 'active',
  });
});

router.get('/typography', async function (req, res) {
  res.render('admin/typography', {
    layout: 'admin',
    navbarBrand: 'Typography',
    typographyActive: 'active',
  });
});

router.get('/map', async function (req, res) {
  res.render('admin/map', {
    layout: 'admin',
    navbarBrand: 'Map',
    mapActive: 'active',
  });
});

router.get('/notifications', async function (req, res) {
  res.render('admin/notifications', {
    layout: 'admin',
    navbarBrand: 'Notifications',
    notificationsActive: 'active',
  });
});

router.get('/upgrade', async function (req, res) {
  res.render('admin/upgrade', {
    layout: 'admin',
    navbarBrand: 'Upgrade to PRO',
    upgradeActive: 'active',
  });
});

module.exports = router;