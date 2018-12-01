var mongoose = require("mongoose");
var CustomFieldSchema = require("../db/schema/CustomFieldSchema");

var CustomField = mongoose.model("CustomField", CustomFieldSchema);

module.exports = CustomField;
