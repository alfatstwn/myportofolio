// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}
        let thisForm = this;
  
        let action = thisForm.getAttribute('action');
        let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');