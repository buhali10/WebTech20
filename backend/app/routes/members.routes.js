module.exports = app => {
    const members = require("../controller/members.controller.js");

    // Create a new Member
    app.post("/members", members.create);

    // GET all Members
    app.get("/members", members.findAll);

    // GET one single Member with memberId
    app.get("/members/:memberId", members.findOne);

    // Update one Member with memberId
    app.put("/members/:memberId", members.update);

    // Delete the Member with memberId
    app.delete("/members/:memberId", members.delete);

    // Delete all members
    app.delete("/members", members.deleteAll);
};
