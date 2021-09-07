
localHostUrl = "http://localhost:3001/users"


// const mondayCol = document.getElementById('monday')
// const tuesdayCol = document.getElementById('tuesday')
// const wednesdayCol = document.getElementById('wednesday')
// const thursdayCol = document.getElementById('thursday')
// const fridayCol = document.getElementById('friday')
// const saturdayCol = document.getElementById('saturday')
// const sundayCol = document.getElementById('sunday')

// next step document.select modal elements and dynamically change it based on selected card


const spawnCoachCard = (name, day, timezone, dayColumn) => {
    const coachDiv = document.createElement('div')
    coachDiv.className = "shadow p-3 mb-5 bg-white rounded";

    const makeAppointmentBtn = document.createElement('button');
    makeAppointmentBtn.className = "btn btn-primary";
    makeAppointmentBtn.innerHTML = "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#coachModal'> Book Appointment </button>"
    
    const nameTag = document.createElement('h7');
    nameTag.textContent = `Coach: ${name}`;
    nameTag.className = "font-weight-bold"
    const timezoneTag = document.createElement('p');
     timezoneTag.textContent = timezone;
    const availabilityTag = document.createElement('p');
    availabilityTag.textContent = `Availability: ${day[0]}-${day[1]}`;
    
    coachDiv.append(nameTag,timezoneTag,availabilityTag, makeAppointmentBtn)
    dayColumn.append(coachDiv)
    console.log('done')
}

fetch(localHostUrl)
    .then(response => response.json())
    .then(users => users.forEach(user => {
        const {id, name, coach, timezone, monday, tuesday, wednesday, thursday, friday, saturday, sunday} =  user
        //while statement didnt work, changed to if statements from "switch/case statement"
        if (coach === true) {
            if(monday[0] != ['N/A'] || monday[1] != undefined ){
                let dayColumn = document.getElementById(`monday`);
                spawnCoachCard(name, monday, timezone, dayColumn)
            } 
            if (tuesday[0] != ['N/A'] || tuesday[1] != undefined )  {
                let dayColumn = document.getElementById(`tuesday`);
                spawnCoachCard(name, tuesday, timezone, dayColumn)
            } 
            if (wednesday[0] != ['N/A'] || wednesday[1] != undefined)  {
                let dayColumn = document.getElementById(`wednesday`);
                spawnCoachCard( name, wednesday, timezone, dayColumn)
            } 
            if(thursday[0] != ['N/A'] || thursday[1] != undefined)  {
                console.log(thursday)
                let dayColumn = document.getElementById(`thursday`);
                spawnCoachCard(name, thursday, timezone, dayColumn)
            } 
            if (friday[0] != ['N/A'] || friday[1] != undefined)  {
                let dayColumn = document.getElementById(`friday`);
                spawnCoachCard(name, friday,timezone,dayColumn)
            } 
            if (saturday[0] != ['N/A'] || saturday[1] != undefined)  {
                let dayColumn = document.getElementById(`saturday`);
                spawnCoachCard(name, saturday, timezone, dayColumn)
            }
            if (sunday[0] != ['N/A'] || sunday[1] != undefined)  {
                let dayColumn = document.getElementById(`sunday`);
                spawnCoachCard(name, sunday, timezone, dayColumn)
            }
            
            }
        })
    );

    
