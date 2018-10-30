import express from 'express';
import skills from '../public/data/skills';

var router = express.Router();

// console.log(skills);
 console.log(skills.programmingLanguages[0]);
// console.log(skills.toolsFramework);

router.get('/skills', (req,res) => {
  res.render('skills', {
    pageTitle : "skills",
    programmingLanguages : skills.programmingLanguages,
    toolsFramework : skills.toolsFramework
  });
});

export default router;
