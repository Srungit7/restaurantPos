const testUserController = (req, res)=>{
    try{
res.status(200).send("<h1>its working</h1>");
    } catch(error){
        console.log('error in test API', error)
    }
};


export default testUserController;