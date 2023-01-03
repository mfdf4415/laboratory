const today = new Date()
let dates = []
let day = today.getDate()
let month = today.getMonth()
let monthCountDay = [31, 29, 31, 30, 31, 31, 31, 31, 30, 31, 30, 31]

let monthDays = monthCountDay[month]

let count = 0

count += monthDays - day
let nextMonth = month + 1
if (nextMonth > 11) {
    nextMonth = 0
}

count += monthCountDay[nextMonth]

for (let i = 1; i <= count; i++) {
    let date = new Date()
    date.setDate(today.getDate() + i)
    dates[i] = date
}

export default dates
