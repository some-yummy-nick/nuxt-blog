export default async (req, res) => {
  const city = 'Kazan'
  const units = 'metric'
  const lang = 'ru'

  return await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}`)
}

