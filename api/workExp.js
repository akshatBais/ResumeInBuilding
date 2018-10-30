import express from 'express';
import workExpData from '../public/data/workExp';

var router = express.Router();

router.get('/workexp', (req,res)=> {

  res.render('workexp' , {
    pageTitle : "workexp",
    exp : workExpData.experience
  });
});

//
// router.get('/workexp', (req,res)=> {
//   var details='';
//   workExpData.experience.forEach((experience) => {
//     details += `
//     <p><h2><b>${experience.role} :  ${experience.company}</h2></b></p>
//     <p>${experience.description}</p><br>
//     `
//   }) ;
//   res.send(details);
// });

export default router;
