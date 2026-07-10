const githubService = require("../services/githubService");

const getProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const data = await githubService.fetchGithubProfile(username);

        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: "Unable to fetch GitHub profile"
        });
    }
};

module.exports = {
    getProfile
};