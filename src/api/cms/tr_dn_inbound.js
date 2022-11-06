var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { Tr_dn_inbound } = require('@models');

const v = new Validator();

router.post('/', async (req, res) => {
    const schema = {
        dni_number: 'string',
        arrive_date: 'date'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json(validate);
    }

    const tr_dn_inbound = await Tr_dn_inbound.create(req.body);

    res.json(tr_dn_inbound);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    const tr_dn_inbound  = await Tr_dn_inbound.findByPk(id);

    if (!tr_dn_inbound) {
        return res.json({message: 'Inbound not found'});
    }

    res.send('success');
});

module.exports = router;