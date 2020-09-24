// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](${licenseURL})

  ## Description

  ${description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage) 

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  ${install}

  ## Usage

  ${use}

  ## Contributing

  ${contribution}

  ## Installation

  To run, install using the following command:
  \`\`\`
  ${install}
  \`\`\`
  

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${test}
  \`\`\`







`;
}

module.exports = generateMarkdown;