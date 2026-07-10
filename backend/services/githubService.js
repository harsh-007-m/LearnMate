const axios = require("axios");

const fetchGithubProfile = async (username) => {
    try {

        // User Profile
        const userResponse = await axios.get(
            `https://api.github.com/users/${username}`
        );

        // Repositories
        const repoResponse = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        // Collect languages
        const languages = new Set();

        repoResponse.data.forEach(repo => {
            if (repo.language) {
                languages.add(repo.language);
            }
        });

        return {
            name: userResponse.data.name,
            username: userResponse.data.login,
            bio: userResponse.data.bio,
            publicRepos: userResponse.data.public_repos,
            followers: userResponse.data.followers,
            following: userResponse.data.following,
            profileUrl: userResponse.data.html_url,
            avatar: userResponse.data.avatar_url,
            topLanguages: [...languages]
        };

    } catch (error) {
        throw new Error("GitHub user not found");
    }
};

module.exports = {
    fetchGithubProfile
};