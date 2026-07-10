const axios = require("axios");

const fetchLeetcodeProfile = async (username) => {

    const query = `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        username

        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
          reputation
          starRating
        }
      }
    }
    `;

    const response = await axios.post(
        "https://leetcode.com/graphql",
        {
            query,
            variables: {
                username
            }
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    const user = response.data.data.matchedUser;

    if (!user) {
        throw new Error("LeetCode user not found");
    }

    return {
        username: user.username,
        ranking: user.profile.ranking,
        reputation: user.profile.reputation,
        starRating: user.profile.starRating,
        solvedProblems: user.submitStats.acSubmissionNum
    };
};

module.exports = {
    fetchLeetcodeProfile
};