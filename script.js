// Added smooth scroll to top functionality 

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 30);
    }
  };
  
  const scrollUp = document.getElementById('scroll-up');
  
  
  scrollUp.addEventListener('click', ()=>{
    scrollToTop();
  })



  // Contact form

 const contactLink = document.getElementById('contact');

// Validating Empty Field
function checkIfEmpty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }
  
  
    //Function To Display Popup
  function showContact() {
    document.getElementById('contact-form').style.display = "block";
    }
    //Function to Hide Popup
    function hideContact(){
    document.getElementById('contact-form').style.display = "none";
    }
  
    
  contactLink.addEventListener('click', showContact)