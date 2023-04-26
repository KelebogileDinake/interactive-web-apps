/*const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
    },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const fragment = document.createDocumentFragment();
    firstName, surname, id, races = athlete
    [date], [time] = races.reverse()
  
    
  
    title = document.createElement(h2);
    title= id;
    fragment.appendChild(title);
  
    const list = document.createElement(dl);
  
    const day = date.getDate();
    const month = MONTHS[date.month];
    const year = date.year;
  
    first, second, third, fourth = timeAsArray;
    total = first + second + third + fourth;
  
    const hours = total / 60;
    const minutes = total / hours / 60;
  
    /*root.document.querySelector('[data-athlete="NM372"]') = 
    <dl>
      <dt>Athlete</dt>
      <dd>${firstName + surname}</dd>
  
      <dt>Total Races</dt>
      <dd>races</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day month year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0) minutes}</dd>
    `;
    </dl>
    fragment.appendChild(list);
  }
  
  [NM372], [SV782] = data
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782));*/


const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  // Only edit below this comment
  
  //Define a function that create an HTML fragment containing an athlete's info
  const createHtml = (athlete) => {
  //Create a ddocument fragment to hold the HTML elements
  const fragment = document.createDocumentFragment();
  //Extract details about the athlete
  const {firstName, surname, id,races} = athlete; //This line uses destructuring to extract the athlete's details data from the athlete's object
  //Extract the latest race date and time
  const {date, time} = races.slice(-1)[0]; //This line extracts the date and time of the latest race from the race array using destructing 
  //Parse the date to get the day, month and year to remove it from string 
  const day = new Date(date).getDate();
  const month = MONTHS[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();
    //Calculate the total time for the latest race and format it to a string
    const[first, second, third, fourth] = time;
    const totalTime = (first + second + third + fourth)//.toString();
    const hours = Math.floor (totalTime / 60)//.toString();
    const minutes = totalTime//.split('T');
    const Time = `${hours}:${minutes}`;

  
  // Create a definition list to display the athlete's information
    const list = document.createElement('dl');
    list.innerHTML = /* html */ //sets the inner HTML of the definition list to a string of HTML code that displays the athlete's information
    `
      <dt><h2>Athlete:</h2>${id}</dt>
      <dd>${firstName} ${surname}</dd>
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
      <dt>Total Time (Latest)</dt>
      <dd>${Time.padStart(4, '0') }</dd>
    `;
    //Add the list to the document fragment
    //athleteElement.appendChild(list);
    fragment.appendChild(list)
    //Return the complete document fragment
    return fragment;
  };

  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(data.response.data.NM372));
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(data.response.data.SV782));

  /*const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };

  const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete;
    const { date, time } = races[races.length - 1];
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h2');
    title.textContent = id;
    fragment.appendChild(title);
    const list = document.createElement('dl');
    const day = new Date(date).getDate();
    const month = MONTHS[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();
    const [fourth, third, second, first] = time;
    const total = first + second + third + fourth;
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    list.innerHTML = /* html *//* `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  <dt>Total Races</dt>
      <dd>${races.length}</dd>
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
    `;
    fragment.appendChild(list);
    return fragment;
  };
  const displayAthleteData = (athleteId) => {
    const athleteData = data.response.data[athleteId];
    const section = document.querySelector(`[data-athlete="${athleteId}"]`);
    section.appendChild(createHtml(athleteData));
  };
  displayAthleteData('NM372');
  displayAthleteData('SV782');*/
  
    //const firstName = athlete.firstName;
    //const surname = athlete.surname;
    //const races = athlete.races;
    //const id = athlete.id;
    //const totalRaces = races.length;
   //const latestRace = races[races.length -1];
    //const [dateString] = latestRace.date.split('T');
  //const date = new Date(dateString);
  // Create an HTML element to represent the athlete
  //const athleteElement = document.createElement('div');
  //athleteElement.classList.add('athlete');
  //athleteElement.dataset.id = athlete.id;
