let Model = require("./Model");

module.exports = {
    postLog: (req, res) => {
        const { log, orderedAt } = req.body;
        if (log, orderedAt) {
            let model = new Model({
                log: req.body.log,
                orderedAt: Date.parse(orderedAt)
            });
            model.save((err, log) => {
                if (err) { 
                    console.log(err);
                    return res.send({success: false});
                }
                else {
                    console.log(log);
                    return res.send({log, success: true});
                }
            });
        } else {
            return res.send({success: false});
        }
    },
    getLog: (req, res) => {
        const { start, end } = req.params;
        if (start, end) {
            Model.find({orderedAt: {"$gte": new Date(start), "$lt": new Date(end)}}).then((value) => {
                if (value) {
                    let d = new Date(value[0].orderedAt);
                    let data = []
                    let result;
                    let t;
                    let nb = 0;
                    for (let i = 0; i < value.length; i++) {
                        t = new Date(value[i].orderedAt);
                        if (t.getDate() != d.getDate()) {
                            d = new Date(value[i].orderedAt);
                            data.push(nb);
                            nb = 0;
                        } else {
                            result = value[i].log.split("=");
                            if (result[0] == "WIN") {
                                nb += 1
                            } else if (result[0] == "LOSS") {
                                nb -= 1
                            }
                        }
                    }
                    return res.send(data);
                }
                else return res.send({msg: "No values"});
            }).catch((err) => {
                return res.send({err});
            });
        } else {
            return res.send({success: false});
        }
    }
}