import React from 'react'

//importing images
import resetImg from '../assets/icons/reset.svg'

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

  function handleReset() {
    setSocialLinks(['', '', '', '', '', '']);
    setName('');
  }
  return (
    <>
      <div className="input-bts">
        <img src={resetImg} onClick={handleReset}></img>
      </div>
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
          pattern="https?://.+"
          title="Please enter a valid URL."
        />
        <input
          placeholder="Email"
          value={socialLinks[3]}
          onChange={handleEmailChange}
          type="email"
          title="Please enter a valid email address."
        />
        <input
          placeholder="Contact"
          value={socialLinks[4]}
          onChange={handleContactChange}
          type="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Please enter a valid phone number in the format: 123-456-7890"
        />
      </form>
    </>
  );
}
