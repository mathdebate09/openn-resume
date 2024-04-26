import React from 'react'

export default function HeadingInput({ name, socialLinks, setName, setSocialLinks }) {

  //handlers functions
  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleGithubChange(e) {
  let updatedSocialLinks = [...socialLinks];
  updatedSocialLinks[0] = e.target.value;
  setSocialLinks(updatedSocialLinks);
}

function handleLinkedinChange(e) {
  let updatedSocialLinks = [...socialLinks];
  updatedSocialLinks[1] = e.target.value;
  setSocialLinks(updatedSocialLinks);
}

function handlePortfolioChange(e) {
  let updatedSocialLinks = [...socialLinks];
  updatedSocialLinks[2] = e.target.value;
  setSocialLinks(updatedSocialLinks);
}

function handleEmailChange(e) {
  let updatedSocialLinks = [...socialLinks];
  updatedSocialLinks[3] = e.target.value;
  setSocialLinks(updatedSocialLinks);
}

function handleContactChange(e) {
  let updatedSocialLinks = [...socialLinks];
  updatedSocialLinks[4] = e.target.value;
  setSocialLinks(updatedSocialLinks);
}

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Github username"
          value={socialLinks[0]}
          onChange={handleGithubChange}
        />
        <input
          placeholder="LinkedIn username"
          value={socialLinks[1]}
          onChange={handleLinkedinChange}
        />
        <input
          placeholder="Portfolio"
          value={socialLinks[2]}
          onChange={handlePortfolioChange}
        />
        <input
          placeholder="Email"
          value={socialLinks[3]}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Contact"
          value={socialLinks[4]}
          onChange={handleContactChange}
        />
      </form>
    </>
  );
}
