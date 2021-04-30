window.addEventListener('load', () => {

  // TIME
  function time() {
    document.getElementById('time').textContent = moment().format("h:mm a");
    document.getElementById('date').textContent = moment().format("MMMM Do, YYYY");
    let updateTime = setTimeout(time, 1000)
  }
  time()

  function getWeather() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    fetch(`https://api.darksky.net/forecast/e20fe780791cad1d4d4d7b8484f970a5/39.892692,-86.290568`)
      .then(res => {
          return res.json()
      })
      .then(data => {
          currentTemp.textContent = Math.round(data.currently.temperature)
          currentSummary.textContent = data.currently.summary
          currentIcon.innerHTML = iconLooper(data.currently.icon)
          currentFeelLike.textContent = Math.round(data.currently.apparentTemperature)
          currentHumidity.textContent = Math.round(100 * (data.currently.humidity))
          dailySummary.textContent = data.daily.summary
          todayHi.textContent = Math.round(data.daily.data[0].temperatureHigh)
          todayLo.textContent = Math.round(data.daily.data[0].temperatureLow)
          todayIcon.innerHTML = iconLooper(data.daily.data[0].icon)

          dayTwo.textContent = moment.unix(data.daily.data[1].time).format('ddd')
          dayTwoHi.textContent = Math.round(data.daily.data[1].temperatureHigh)
          dayTwoLo.textContent = Math.round(data.daily.data[1].temperatureLow)
          dayTwoIcon.innerHTML = iconLooper(data.daily.data[1].icon)

          dayThree.textContent = moment.unix(data.daily.data[2].time).format('ddd')
          dayThreeHi.textContent = Math.round(data.daily.data[2].temperatureHigh)
          dayThreeLo.textContent = Math.round(data.daily.data[2].temperatureLow)
          dayThreeIcon.innerHTML = iconLooper(data.daily.data[2].icon)

          dayFour.textContent = moment.unix(data.daily.data[3].time).format('ddd')
          dayFourHi.textContent = Math.round(data.daily.data[3].temperatureHigh)
          dayFourLo.textContent = Math.round(data.daily.data[3].temperatureLow)
          dayFourIcon.innerHTML = iconLooper(data.daily.data[3].icon)

          dayFive.textContent = moment.unix(data.daily.data[4].time).format('ddd')
          dayFiveHi.textContent = Math.round(data.daily.data[4].temperatureHigh)
          dayFiveLo.textContent = Math.round(data.daily.data[4].temperatureLow)
          dayFiveIcon.innerHTML = iconLooper(data.daily.data[4].icon)

          function iconLooper(x) {
            switch (x) {
              case 'rain':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg' />";
                break;
              case 'snow':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg' />";
                break;
              case 'clear-day':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg' />";
                break;
              case 'clear-night':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg' />";
                break;
              case 'sleet':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg' />";
                break;
              case 'wind':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />"
                break;
              case 'fog':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />"
                break;
              case 'cloudy':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />";
                break;
              case 'partly-cloudy-day':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg' />";
                break;
              case 'snow':
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg' />";
                break;
              default:
                console.log('i dont know whats snowin on')
                iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />";
            }
            return iconCurrently
          }

          document.getElementById('currentIcon').childNodes[0].className += "img";
          document.getElementById('lastUpdate').innerHTML = moment().format("h:mm a");
        })

    let updateWeather = setTimeout(getWeather, 300000)
  }
  getWeather()
  // current
  let currentTemp = document.getElementById('currentTemp')
  let currentSummary = document.getElementById('currentSummary')
  let currentIcon = document.getElementById('currentIcon')
  let currentFeelLike = document.getElementById('currentFeelLike')
  let currentHumidity = document.getElementById('currentHumidity')
  let dailySummary = document.getElementById('dailySummary')
  let todayHi = document.getElementById('todayHi')
  let todayLo = document.getElementById('todayLo')
  let todayIcon = document.getElementById('todayIcon')

  // // tomorrow
  let dayTwo = document.getElementById('dayTwo')
  let dayTwoHi = document.getElementById('dayTwoHi')
  let dayTwoLo = document.getElementById('dayTwoLo')
  let dayTwoIcon = document.getElementById('dayTwoIcon')

  // // day three
  let dayThree = document.getElementById('dayThree')
  let dayThreeHi = document.getElementById('dayThreeHi')
  let dayThreeLo = document.getElementById('dayThreeLo')
  let dayThreeIcon = document.getElementById('dayThreeIcon')

  // // day four
  let dayFour = document.getElementById('dayFour')
  let dayFourHi = document.getElementById('dayFourHi')
  let dayFourLo = document.getElementById('dayFourLo')
  let dayFourIcon = document.getElementById('dayFourIcon')

  // // day five
  let dayFive = document.getElementById('dayFive')
  let dayFiveHi = document.getElementById('dayFiveHi')
  let dayFiveLo = document.getElementById('dayFiveLo')
  let dayFiveIcon = document.getElementById('dayFiveIcon')
});