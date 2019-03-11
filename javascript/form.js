let inputs = {
    'event': localStorage.getItem('event'),
    'team': 0,
    'match': 0,
    'alliance': 'red',
    'rocket-top-cargo': 0,
    'rocket-top-hatch': 0,
    'rocket-mid-cargo': 0,
    'rocket-mid-hatch': 0,
    'rocket-low-cargo': 0,
    'rocket-low-hatch': 0,
    'cargo-hatch': 0,
    'cargo-cargo': 0,
    'hab-level': 'low',
    'how-climb': 'self',
    'comment': '',
    'scouter': '',
    'time-stamp': ''
}

window.addEventListener('load', function() {
    document.querySelector('.submit').onclick = function() {
        event.preventDefault();
        submit();
    }
    let toggles = document.querySelectorAll('.toggle');
    for(let toggle of toggles) {
        toggle.querySelector('i').onclick();
    }
});

function inc(type) {
    if(inputs[type] > 24)
        return;
    inputs[type] ++;
    document.querySelector(`#${type}`).innerHTML = inputs[type];
}

function dec(type) {
    if(inputs[type] < 1)
        return;
    inputs[type] --;
    document.querySelector(`#${type}`).innerHTML = inputs[type];
}

function setTeam() {
    inputs['team'] = event.target.value;
}

function setMatch() {
    inputs['match'] = event.target.value;
}

function setAlliance() {
    inputs['alliance'] = event.target.value;
}

function setClimbTo() {
    inputs['level'] = event.target.value;
}

function setClimb() {
    inputs['how-climb'] = event.target.value;
}

function setComment() {
    inputs['comment'] = event.target.value;
}

function submit() {
    if(inputs.event == null) {
        inputs.event = prompt("Enter the event key.");
        localStorage.setItem('event', inputs.event);
    }
    inputs["time-stamp"] = new Date();
    let basecamp = new Basecamp();
    basecamp.postMatchData(JSON.stringify(inputs.event), JSON.stringify(inputs), res => {
        alert(res.msg);
        location.reload(true);
    });
}
