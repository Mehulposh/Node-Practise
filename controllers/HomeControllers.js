function HomeResponse(req,res) {
    res.send('welcome to the app');

}

function ContactResponse(req,res){
res.json({
    message: 'welcome to the contacts section'
});
}

module.exports = {HomeResponse,ContactResponse};