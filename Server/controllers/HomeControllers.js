
function HomeResponse(req,res) {
   res.json({
    message: 'welcome to the home page'
   })
}

function ContactResponse(req,res){
res.json({
    message: 'welcome to the contacts section'
});
}



module.exports = {HomeResponse,ContactResponse};