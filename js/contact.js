function handleContactSubmit(event) {
    event.preventDefault();
    event.target.reset();
    window.location.href = "./mail_confirmation.html";
}
