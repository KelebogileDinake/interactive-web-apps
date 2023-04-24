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
  document.querySelector(SV782).appendChild(createHtml(SV782));



  /*const contenders2022=[ 
    'schalk',
    'mary',
    'tracy',
    'john',
    'Nwabisa',]
const contenders2023=[
    'john',
    'mary',
    'nwabisa',
    'schalk',
    'tracy',]
const calcWinners =( array1, array2 ) => { 
    array1.splice( 3,2, array2[0], array2[1], array2[2]) 
    return array1}

console.log(calcWinners(contenders2022, contenders2023))*/

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
    const firstName = athlete.firstName;
    const surname = athlete.surname;
    const races = athlete.races;
    const id = athlete.id;
    const totalRaces = races.length;
    const latestRace = races[races.length -1];
    const [dateString] = latestRace.date.split('T');
  const date = new Date(dateString);
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
    const[first, second, third, fourth] = latestRace.time;
    const totalTime = (first + second + third + fourth).toString();
    const hours = Math.floor (totalTime / 60).toString();
    const minutes = totalTime.split('T');
    const Time = `${hours}:${minutes}`;
  // Create an HTML element to represent the athlete
  const athleteElement = document.createElement('div');
  athleteElement.classList.add('athlete');
  athleteElement.dataset.id = athlete.id;
  // Create a definition list to display the athlete's information
  const list = document.createElement('dl');
    list.innerHTML = /* html */ /*`
      <dt><h2>Athlete:</h2>${athlete.id}</dt>
      <dd>${firstName} ${surname}</dd>
      <dt>Total Races</dt>
      <dd>${totalRaces}</dd>
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
      <dt>Total Time (Latest)</dt>
      <dd>${Time.padStart(4, '0') }</dd>
    `;
    athleteElement.appendChild(list);
    fragment.appendChild(athleteElement)
    return fragment;
  };
  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(data.response.data.NM372));
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(data.response.data.SV782));*/