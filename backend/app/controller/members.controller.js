const Member = require("../model/members.model.js");

// Create and Save a new Member
// Create and Save a new Member
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Member
    const member = new Member({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    // Save Customer in the database
    Member.create(member, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Member."
            });
        else res.send(data);
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
    Member.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving members."
            });
        else res.send(data);
    });
};

// Find a single Member with a memberId
exports.findOne = (req, res) => {
    Member.findById(req.params.memberId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Member with id ${req.params.memberId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Member with id " + req.params.memberId
                });
            }
        } else res.send(data);
    });
};

// Update a Member identified by the memberId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Member.updateById(
        req.params.memberId,
        new Member(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Member with id ${req.params.memberId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Member with id " + req.params.memberId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Member with the specified memberId in the request
exports.delete = (req, res) => {
    Member.remove(req.params.memberId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Member with id ${req.params.memberId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Member with id " + req.params.memberId
                });
            }
        } else res.send({ message: `Member was deleted successfully!` });
    });
};

// Delete all Members from the database.
exports.deleteAll = (req, res) => {
    Member.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all members."
            });
        else res.send({ message: `All Members were deleted successfully!` });
    });
};
