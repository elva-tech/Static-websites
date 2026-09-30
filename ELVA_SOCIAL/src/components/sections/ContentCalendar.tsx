import { useState } from 'react'
import { calendarPosts } from '../../data/calendarPosts'

export function ContentCalendar() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null)

  return (
    <section className="calendar">
      <div className="calendar-title">
        <p className="section-kicker">CONTENT CALENDAR</p>
        <h2>See everything before it gets published.</h2>
        <div className="legend">
          <span className="published" /> Published <span className="review" /> Needs approval{' '}
          <span className="scheduled" /> Scheduled
        </div>
      </div>
      <div className="calendar-ui">
        <div className="cal-header">
          <b>August 2026</b>
          <span>Month view⌄</span>
        </div>
        <div className="weekdays">{['MON', 'TUE', 'WED', 'THU', 'FRI'].map((x) => <span key={x}>{x}</span>)}</div>
        <div className="days">
          {calendarPosts.map(([d, t, status]) => (
            <button className={status} key={d} onClick={() => setSelectedPost(t)}>
              <b>{d}</b>
              <span>{t}</span>
            </button>
          ))}
        </div>
        {selectedPost && (
          <div className="post-detail">
            <b>{selectedPost}</b>
            <span>LinkedIn · Scheduled for 9:00 AM</span>
            <button onClick={() => setSelectedPost(null)}>×</button>
          </div>
        )}
      </div>
    </section>
  )
}
