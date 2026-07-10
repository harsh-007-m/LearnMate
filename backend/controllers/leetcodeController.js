const leetcodeService = require("../services/leetcodeService");

const getProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const data = await leetcodeService.fetchLeetcodeProfile(username);

        res.json(data);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    getProfile
};