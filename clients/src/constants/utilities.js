/**
 * Format date with given specific format
 * @param date
 * @param format
 * @return formatted date
 */
function formatDateWithPadding(date, format) {
  if (date) {
    if (typeof date == 'string') {
      date = new Date(date)
    }

    format = format.replace(/yyyy/g, date.getFullYear())
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2))
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2))
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3))
  } else {
    format = ''
  }
  return format
}

/**
 * get week day from given year, month, day
 * @param year
 * @param month
 * @param day
 * @return desired week day
 */
const findWeekDay = (year, month, day) => {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var weekDay = days[new Date(year, --month, day).getDay()]
  switch (weekDay) {
    case 'Sunday':
      return '日'
    case 'Monday':
      return '月'
    case 'Tuesday':
      return '火'
    case 'Wednesday':
      return '水'
    case 'Thursday':
      return '木'
    case 'Friday':
      return '金'
    case 'Saturday':
      return '土'
    default:
      return ''
  }
}

/**
 * Get type of action
 * @param reduxAction sent action
 * @return type
 */
const getType = (reduxAction) => {
  return reduxAction().type
}

export { formatDateWithPadding, findWeekDay, getType }
