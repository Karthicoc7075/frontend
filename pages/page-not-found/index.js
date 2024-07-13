import React from 'react'
import notFoundImage from '../../assets/icons/404.png'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

function index() {
  const localizer = momentLocalizer(moment)
  const events = [
    {
      start: new Date(),
      end: new Date(moment().add(1, 'days')),
      title: 'Some title',
    },
  ]

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100dvh',background:'#e8dff2'}}>
        {/* <img src={notFoundImage} style={{width:'800px'}} /> */}
        <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />

    </div>
  )
}

export default index