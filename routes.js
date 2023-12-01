const express = require('express');
const items = require('./fakeDB');
const router = new express.Router();

router.get('/')

router.get('/', (req, res) => {
    res.json({items:items})
});

router.get('/:name', (req, res) => {
    for (const item of items) {
        if (item.name == req.params.name) {
            res.json({"name":item.name, "price": item.price});
        }
    }
    res.json({failed:"item not in list"})
});

router.post('/', (req, res) => {
    const added = {'added': []};
    item = req.query;
    items.push({"name": item.name, "price": item.price})
    res.json({added:items[items.length-1]});
});

router.delete('/:name', (req, res) => {
    for (let i in items) {
        if (items[i].name == req.params.name) {
            items.splice(i,1);
            res.json({message:'deleted'});
        }
    }
});

router.patch('/', (req, res) => {
    const item = req.query;
    for (let i in items) {
        if (items[i].name == item.name) {
            items[i].price = item.price;
            res.json({updated: items[i]})
        }
    }
    res.json({failed: "item could not be found"})
})

module.exports = router;