import React from 'react'
import PropTypes from 'prop-types'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import localeJa from 'date-fns/locale/ja'
import { findWeekDay } from 'constants/utilities'

const formatValue = (value) => {
  return value < 10 ? `0${value}` : value
}

class CustomDateUtils extends DateFnsUtils {
  getYearText(date) {
    return date.getFullYear() + '年'
  }

  getCalendarHeaderText(date) {
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月'
  }

  getDatePickerHeaderText(date) {
    const result = `${formatValue(date.getMonth() + 1)}月${formatValue(date.getDate())}日(${findWeekDay(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    )})`
    return result
  }
}

function CustomCalendar({ date, setDate, label }) {
  const onSelectDate = (date) => {
    setDate(date)
  }
  return (
    <div className="calendar">
      <MuiPickersUtilsProvider locale={localeJa} utils={CustomDateUtils}>
        <KeyboardDatePicker
          margin="normal"
          label={label}
          format="yyyy-MM-dd"
          value={date}
          onChange={onSelectDate}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

CustomCalendar.propTypes = {
  setDate: PropTypes.func,
  label: PropTypes.string
}

export default CustomCalendar
