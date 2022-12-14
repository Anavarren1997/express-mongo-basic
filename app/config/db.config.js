const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = process.env.DBCON;
db.tutorials = require("../models/tutorial.model")(mongoose);
db.users = require("../models/user.model.js")(mongoose);
db.roles = require("../models/role.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];
/*
 * Aquí se insertan las demás colecciones?xd
 */

/* 
create a new Tutorial: object.save()
find a Tutorial by id: findById(id)
retrieve all Tutorials: find()
update a Tutorial by id: findByIdAndUpdate(id, data)
remove a Tutorial: findByIdAndRemove(id)
remove all Tutorials: deleteMany()
find all Tutorials by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
*/

module.exports = db;