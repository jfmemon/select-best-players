function getSelectPlayer(playerNameId) {
    // debugger;
    const selectedPlayerField = document.getElementById('selected-players-list');
    const playerName = document.getElementById(playerNameId);
    const playerNameString = playerName.innerText;
    const li = document.createElement('li');
    li.innerText = playerNameString;
    if(selectedPlayerField.childElementCount < 5){
        selectedPlayerField.appendChild(li);
    }else{
        alert("You are not able to select more than five players");
    }
    return selectedPlayerField.childElementCount;
}

document.getElementById('select-benjema-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-benjema');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-maradona-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-maradona');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-mbappe-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-mbappe');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-messi-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-messi');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-neymar-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-neymar');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-ozil-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-ozil');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-pele-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-pele');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-ronaldo-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-ronaldo');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});
document.getElementById('select-rooney-btn').addEventListener('click', function(event) {
    getSelectPlayer('name-rooney');
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
});

