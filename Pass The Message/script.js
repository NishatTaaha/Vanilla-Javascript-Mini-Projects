const form = document.getElementById('form');
form.addEventListener('submit', function (e){
    e.preventDefault();

    const input = document.getElementById('input');
    const feedback = document.getElementById('feedback');
    const message = document.getElementById('message-content');

    if (input.value === '')
    {
        feedback.style.display = 'block';
        setTimeout(function ()
        {
            feedback.style.display = 'none';
        }, 2000);
    }

    else
    {
        message.textContent = input.value;
        input.value='';
    }
});