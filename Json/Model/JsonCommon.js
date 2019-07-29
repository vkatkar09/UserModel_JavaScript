
// serialization
function toJson(model){
    return JSON.stringify(model);
}

//de-serialization
function toObject(Json){
    return JSON.parse(Json);
}