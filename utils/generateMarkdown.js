// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  !${data.license}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage) 

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
  ${data.collaborators || data.TPAssets ? "\n##Credits" : ""} ${data.collaborators ? "\n\nCollaborators:\n\n" + data.collaboratorsList : ""} ${data.TPAssets ? "\n\n3rd Party Assets:\n\n" + TPAssetsList : ""}
  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions?

  If you have any questions or issues please contact me via email at ${data.email}. You can find more examples of my work at [${data.user}](https://github.com/${data.user})
`;
}

module.exports = generateMarkdown;