const route = require("express").Router();

route.use("/inbound", require('./cms/tr_dn_inbound'));

module.exports = route;