// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  } else {
    return `\n* [License](#license)\n`;
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `## [License](#table-of-contents)
  The application is covered under:
  ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.description}

  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  [Github Profile](${data.github})
  Contact me with any questions at [email:${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
