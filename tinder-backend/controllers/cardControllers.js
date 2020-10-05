const cardeModel = require('../Modeles/dbCards')

module.exports={
    createCarde:function(req,res){
      console.log(req.body)
        cardeModel.create( req.body  ,function (err, card) {
               
                  if (err) {
                    console.log(err);
                    res.json({ msg: "error", status: 500, data: null });
                  } else {
                    res.json({ msg: "bien ajouté", status: 200, data: card });
                  }

                
                }
        )
    },
    getCardes:function(req,res){
        cardeModel.find(function (err, card){
            if (err) {
                console.log(err);
                res.json({ msg: "error", status: 500, data: null });
              } else {
                res.json({ msg: "list of cardes", status: 200, data: card });
              }
        })
    }
}