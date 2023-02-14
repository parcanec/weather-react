
export async function getWeather(cityName) {
    try {
        const serverUrl = '//api.openweathermap.org/data/2.5/weather'
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`
        const response = await fetch(url)
        const chekBase = await response.json()
        if (chekBase.cod >= 300) {
            throw new Error(chekBase.message)
        } else {
            return chekBase
        }
    } catch {
        return error.message
    }
}