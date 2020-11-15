const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');

router.post('/single', upload.single('image'), async (req, res) => {
    try{
        const image = req.file.location;
    console.log(req.file);
    console.log(req.body);
    res.send({
      file: req.file,
      body: req.body,
      imageUrl : image,
    });

} catch (err) {
    console.error(err)
}
});

router.post('/array', upload.array('images', 3), async (req, res) => {
  const imageUrls = req.files.map(file => file.location);
  console.log(req.files);
  console.log(req.body);
  res.send({
    file: req.files,
    body: req.body,
    imageUrls : imageUrls,
  });
});

module.exports = router;