
const LocalStrategy = require('passport-local').Strategy;
const passport= require('passport');

// const Menu = require('./models/Menu');
// passport.use(new LocalStrategy(async (USERNAME, password, done)=>{
// try{
//  console.log('Recevied Credientials:',USERNAME,password);
//  const user =await Menu.findOne({username:USERNAME});
//  if(!user){
//   return done(null,false, { message:'Incorrect username'});
//  }
//   const isPasswordMatch = await user.comparePassword(password); 
//   if(isPasswordMatch){
//     return done(null,user);
//   }else{
//     return done(null,false, { message: 'Incorrect password.'});
//   }
//  }catch(error){
// return done(error);
// }
// }))

passport.use(
  'person-local',
  new LocalStrategy(async (USERNAME, password, done) => {
    try {
      const user = await Person.findOne({ username: USERNAME });
      if (!user) return done(null, false, { message: 'Incorrect username' });

      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) return done(null, user);

      return done(null, false, { message: 'Incorrect password' });
    } catch (error) {
      return done(error);
    }
  })
);


module.exports=passport;