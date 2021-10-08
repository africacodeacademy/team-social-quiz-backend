const Quiz = require('../models/Quiz');
/**
 * getPlatformQuiz
 * 
 * returns all platform Quizes
 * @returns Resolved promise with Platform Quizes
 */
exports.getPlatformQuiz = async () =>{
  try{
    let quiz = await Quiz.find({}).exec()
    return Promise.resolve(quiz)
  }catch(error){
    return Promise.reject(error)
  }
  
}
exports.getOnePlatformQuiz = async (_id) =>{
  try{
    let quiz =  await Quiz.find({ _id }).lean(true).exec();
    return Promise.resolve(quiz)
  }catch(error){
    return Promise.reject(error)
  }
}