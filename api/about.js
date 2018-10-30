import express from 'express';
import aboutInfo from '../public/data/aboutInfo';
import workExpData from '../public/data/workExp';
import skills from '../public/data/skills';

var router = express.Router();
// console.log(aboutInfo);
// console.log(aboutInfo.name);
router.get('/about', (req,res) => {

  res.render('index',{
    pageTitle : "about",
    name : aboutInfo.name,
    address : aboutInfo.address,
    email : aboutInfo.email,
    contact : aboutInfo.contact,
    bio : aboutInfo.bio,
    exp : workExpData.experience,
    programmingLanguages : skills.programmingLanguages,
    toolsFramework : skills.toolsFramework
  });
});

export default router;
