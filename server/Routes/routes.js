const router = require('express').Router();
let { Data } = require('../models/data');
router.post('/', async (req, res) => {
    const { name, description, id, imgUrl,catagory,price } = req.body
    console.log(req.body)
    let newNFTData = new Data({ name, description, id, imgUrl,catagory,price })
    newNFTData.save().then(NFTData => {
        console.log(NFTData);
        res.send({NFTData,status: ' form saved successfully'})
    })
        .catch(err => console.log(err));

})


module.exports = router