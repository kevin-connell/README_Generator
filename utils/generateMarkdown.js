// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${data.license == "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : ""}${data.license == "APACHE 2.0" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : ""}${data.license == "GPL 3.0" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" : ""}${data.license == "BSD 3" ? "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" : ""}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage) 
  ${data.credits ? "\n  * [Credits](#credits)\n" : ""}
  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)
  
  ## Installation

  To run, install using the following command:
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  For use: ${data.use}
  ${data.credits ? "\n  ## Credits\n\n  " + data.collaborators + "   @  [" + data.collabGit + "](https://github.com/" + data.collabGit + ")\n" : ""}
  ## License

  This application is protected under a ${data.license} license

  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions?

  If you have any questions or issues please contact me via email at ${data.email}. You can find more examples of my work at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;