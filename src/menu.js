export default function Menu() {
    return (
        <div className='x'>
            <div className='menu'>
                <p onClick={scrollBio}>Bio</p>
            </div>
            <div className='menu' onClick={scrollProjects}>
                <p>Projects</p>
            </div>
            <div className='menu' onClick={scrollSkills}>
                <p>Skills</p>
            </div>
        </div>
    );
}

function scrollBio() {
    window.scrollTo({
      top: document.getElementById('introduction').offsetTop,
      behavior: 'smooth'
    });
  }
  
  function scrollProjects() {
    window.scrollTo({
      top: document.getElementById('second').offsetTop,
      behavior: 'smooth'
    });
  }
  
  function scrollSkills() {
    window.scrollTo({
      top: document.getElementById('skills').offsetTop,
      behavior: 'smooth'
    });
  }