const readDataFile = require('../db/readFiles');

module.exports = {
    getProducts: function(req, res) {
        let rand = Math.floor(Math.random() * 3000);
        readDataFile('../../data/product-data.json')
            .then(d => {
                setTimeout(() => {
                    res.status(200).json(d);
                    // res.status(401).json({});
                }, rand);
            })
            .catch(e => res.status(500).json(e));
    }
};

