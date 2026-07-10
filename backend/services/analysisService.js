const githubService = require("./githubService");
const leetcodeService = require("./leetcodeService");

const analyze = async (profile) => {

    const github = await githubService.fetchGithubProfile(profile.github);

    const leetcode = await leetcodeService.fetchLeetcodeProfile(profile.leetcode);
const strengths = [];
const weakAreas = [];
const recommendations = [];

if (github.topLanguages.includes("JavaScript"))
    strengths.push("JavaScript");

if (github.topLanguages.includes("C++"))
    strengths.push("Problem Solving with C++");

if (github.publicRepos >= 10)
    strengths.push("Good GitHub Portfolio");
else
    weakAreas.push("Needs more public projects");

const solved = leetcode.solvedProblems;

const easy = solved.find(x => x.difficulty === "Easy").count;
const medium = solved.find(x => x.difficulty === "Medium").count;
const hard = solved.find(x => x.difficulty === "Hard").count;

if (medium >= 50)
    strengths.push("Strong DSA");

if (hard < 20)
    weakAreas.push("Advanced Problem Solving");

recommendations.push(
    "Learn Express.js",
    "Learn MongoDB",
    "Build REST APIs",
    "Deploy a backend project"
);

return {

    careerGoal: profile.careerGoal,

    github,

    leetcode,

    strengths,

    weakAreas,

    recommendations

};

};

module.exports = {
    analyze
};