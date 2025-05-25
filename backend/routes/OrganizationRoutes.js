const express = require('express')
const { getOrganization, createOrganization, joinOrganisation } = require('../controllers/OrganizationController')
const OrgRouter = express.Router()

OrgRouter.get('/',getOrganization);
OrgRouter.post('/create',createOrganization)
OrgRouter.put('/join',joinOrganisation)

module.exports = OrgRouter