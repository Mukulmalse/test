

function btnclick() {
    var x = parseInt(document.getElementById('first').value);
    var s = document.getElementById('sign').value;
    var y = parseInt(document.getElementById('second').value);

    var answer = document.getElementById('ans');
    // console.log(s);

    switch (s) {

        case 'add':
            answer.innerText = x+y;
            break;
        case 'sub':
            answer.innerText = x-y;
            break;
        case 'mul':
            answer.innerText = x*y;
            break;
        case 'div':
            answer.innerText = x/y;
            break;
        default:
            alert('Please select operator');

    }
    document.getElementById('first').value="";
    document.getElementById('second').value="";

}