const email = document.getElementById('email');
const subscribeButton = document.getElementById('subscribe');
const validEmail = document.getElementById('valid-email');

function goToPage(input) {
    const encodedInput = encodeURIComponent(input);
    window.location.href = `../Parcial-1/confirmation.html?text=${encodedInput}`;
}

subscribeButton.addEventListener('click',function(){
    if (email.value.includes('@') && email.value.includes('.com')){
        console.log(email.value);
        if (email.classList.contains('ring-red-500')){
            email.classList.remove('ring-red-500','bg-red-50');
        }
        email.classList.add('ring-green-500');
        validEmail.innerHTML='Email address';
        goToPage(email.value);
    }
    else {
        email.classList.add('ring-1','ring-red-500','bg-red-50');
        validEmail.innerHTML='Email address:<p style="color: red; font-size: 10px;">Please enter a valid e-mail</p>';

    }
});