export default function Contact () {
    return (
        <div id="contactOuter" onClick={scrollContact}>
            <div id="contactInner">Contact me</div>
        </div>
    );
}

function scrollContact(){
    window.scrollTo({
      top: document.getElementById('contact').offsetTop,
      behavior: 'smooth'
    });
  }