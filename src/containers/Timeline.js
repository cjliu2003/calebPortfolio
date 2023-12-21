import React from 'react'

const TIMELINE_DATA = [
    {
        year: '2023',
        months: [
           {
            name: 'December',
            events: []
           },
              {
                name: 'November',
                events: []
              },
              {
                name: 'October',
                events: []
              },
              {
                name: 'September',
                events: []
              },
              {
                name: 'August',
                events: []
              },
              {
                name: 'July',
                events: []
              },
              {
                name: 'June',
                events: []
              },
              {
                name: 'May',
                events: []
              },
              {
                name: 'April',
                events: []
              },
              {
                name: 'March',
                events: []
              },
              {
                name: 'February',
                events: []
              },
              {
                name: 'January',
                events: []
              },
        ]
    },
    {
        year: '2022',
        months: [
            {
                name: 'December',
                events: []
            },
            {
                name: 'November',
                events: []
            },
            {
                name: 'October',
                events: []
            },
            {
                name: 'September',
                events: []
            },
            {
                name: 'August',
                events: []
            },
            {
                name: 'July',
                events: []
            },
            {
                name: 'June',
                events: []
            },
            {
                name: 'May',
                events: []
            },
            {
                name: 'April',
                events: []
            },
            {
                name: 'March',
                events: []
            },
            {
                name: 'February',
                events: ['Covid...']
            },
            {
                name: 'January',
                events: ['Enrolled in a design sketching course', 'Got pretty good at predicting the outcome of basketball and football games']
            },
        ]
    },
    {
        year: 2021,
        months: [
            {
                name: 'December',
                events: [
                    'Big family reunion in Maryland'
                ]
            },
            {
                name: 'November',
                events: [
                    'Learning how to draw and paint digitally on Adobe Illustrator',
                    'First big game on campus (we lost)',

                ]
            },
            {
                name: 'October',
                events: [
                    'Rushed the field when we upset Oregon in Football (I was in ESPN Sportscenter that night)',
                    'IM Flag football season with my dorm!',
                    'SHIBA INU COIN TO THE MOON 🚀'
                ]
            },
            {
                name: 'September',
                events: [
                    'Went to a Cal football game (yuck)',
                    'Moved into Stanford!'
                ]
            },
            {
                name: 'August',
                events: [
                    'Broke 85 for the first time (golf)',
                    'Played in my first (and only) pro tennis tournament and almost pulled off a first round upset'
                ]
            },
            {
                name: 'July',
                events: [
                    'Opened my time capsule that I made when I was 6',
                    'Turned 18!',
                    'Learned how to work the deep fryer to make chicken tenders and fries at my summer job'
                ]
            },
            {
                name: 'June',
                events: ['Graduated from high school 🎓']
            },
        ]
    }
]
const Timeline = () => {
  return (
    <div>
        <h1>Timeline</h1>
        <p>Miscellaneous things that happened in the past few years</p>
        {TIMELINE_DATA.map((year) => {
            return (
                <div>
                    <h1>{year.year}</h1>
                    {year.months.map((month) => {
                        return (
                            <div>
                                <h2>{month.name}</h2>
                                {month.events.map((event) => {
                                    return (
                                        <li>{event}</li>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Timeline