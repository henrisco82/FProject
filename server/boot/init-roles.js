module.exports = function(app) {
    var Role = app.models.Role;

    Role.findOne({where: {name: 'admin'}}, function(err, result) {
        if (err) throw err;
        else if (!result) {
            Role.create({name: 'admin'}, function(err, role) {})
        }
    })
}