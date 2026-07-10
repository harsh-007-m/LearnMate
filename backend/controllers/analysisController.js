const analysisService = require("../services/analysisService");

const analyzeProfile = async (req, res) => {

    try {

        const result = await analysisService.analyze(req.body);

        res.json(result);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

module.exports = {
    analyzeProfile
};