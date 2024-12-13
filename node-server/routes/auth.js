const express = require('express');
const router = express.Router();
const { auth } = require('../Middleware/auth')
const UserG = require('../models/Product')

const { register , login }  = require('../controllers/auth')


router.post('/register', register);

router.post('/login',login);

// Profile endpoint
/* router.get('/profile', auth ,async (req, res,next) => {
  const token = req.headers.authorization.split(' ')[1];
   
   try{
    //process.env.JWT_SECRET
      // const decoded = jwt.verify(token, 'jwtsecret');
      const decoded = jwt.verify(token, auth);
      const user = await User.findById(decoded.id).select('-password');
     res.status(200).send("welcome to profile");
     
   }catch (err) {
     res.status(401).json({
      message: 'Unauthorized'
     })
   }
   
  });
 */

  router.get('/profile', auth ,async (req, res) => {
        try {
            // code
         /*    const producted = await Product.find({}).exec();
            res.send(producted) */
            
          /*  const user = await User.findOne({ name: req.user });
           if (!user) {
             return res.status(404).json({ message: 'User not found' });
           } */
        

          res.status(200).send("welcome")

        } catch (err) {
            // error
            console.log(err)
            res.status(500).send('Server Error')
        }
  
  });

 

module.exports = router;