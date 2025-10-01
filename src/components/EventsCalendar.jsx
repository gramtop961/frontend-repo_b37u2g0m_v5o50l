import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks = [];
  let day = 1 - startDay; // start from Sunday
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(year, month, day);
      week.push({
        date,
        inCurrentMonth: date.getMonth() === month,
      });
      day++;
    }
    weeks.push(week);
  }
  return weeks;
}

const demoEvents = [
  { date: '2025-10-05', title: 'Compost Turning Party', type: 'compost', time: '9–11am' },
  { date: '2025-10-12', title: 'Seed Saving Workshop', type: 'workshop', time: '1–3pm' },
  { date: '2025-10-19', title: 'Fall Harvest Pickup', type: 'produce', time: '4–6pm' },
  { date: '2025-10-26', title: 'Irrigation 101', type: 'workshop', time: '12–1:30pm' },
];

const typeStyles = {
  compost: 'bg-lime-100 text-lime-800 border-lime-200',
  workshop: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  produce: 'bg-amber-100 text-amber-800 border-amber-200',
};

export default function EventsCalendar() {
  const today = new Date();
  const [view, setView] = useState({ month: today.getMonth(), year: today.getFullYear() });

  const matrix = useMemo(() => getMonthMatrix(view.year, view.month), [view]);

  const eventsByDate = useMemo(() => {
    const map = new Map();
    demoEvents.forEach((e) => {
      map.set(e.date, (map.get(e.date) || []).concat(e));
    });
    return map;
  }, []);

  const fmt = (d) => d.toISOString().slice(0, 10);

  const monthName = new Date(view.year, view.month).toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section id="calendar" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 flex items-center gap-2">
              <CalendarDays className="w-7 h-7 text-emerald-700" />
              Calendar of events
            </h2>
            <p className="mt-1 text-stone-700">Workshops, pickups, and volunteer days.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView((v) => ({ ...v, month: v.month === 0 ? 11 : v.month - 1, year: v.month === 0 ? v.year - 1 : v.year }))}
              className="p-2 rounded-md border border-stone-200 bg-white hover:bg-stone-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-3 py-2 text-sm font-medium text-stone-800 bg-stone-100 rounded-md border border-stone-200">
              {monthName}
            </div>
            <button
              onClick={() => setView((v) => ({ ...v, month: v.month === 11 ? 0 : v.month + 1, year: v.month === 11 ? v.year + 1 : v.year }))}
              className="p-2 rounded-md border border-stone-200 bg-white hover:bg-stone-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 text-xs font-medium text-stone-600">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d)=> (
            <div key={d} className="px-2 py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-px rounded-lg overflow-hidden border border-stone-200 bg-stone-200">
          {matrix.flat().map(({ date, inCurrentMonth }, idx) => {
            const key = fmt(date);
            const events = eventsByDate.get(key) || [];
            const isToday = fmt(date) === fmt(new Date());
            return (
              <div key={idx} className={`min-h-[92px] bg-white ${!inCurrentMonth ? 'bg-stone-50 text-stone-400' : ''}`}>
                <div className="px-2 py-1 flex items-center justify-between">
                  <div className={`text-[11px] font-medium ${isToday ? 'text-emerald-700' : 'text-stone-600'}`}>{date.getDate()}</div>
                  {isToday && <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 text-[10px]">Today</span>}
                </div>
                <div className="px-2 pb-2 flex flex-col gap-1">
                  {events.map((e, i) => (
                    <div key={i} className={`truncate rounded px-2 py-1 text-[11px] border ${typeStyles[e.type] || 'bg-stone-100 text-stone-700 border-stone-200'}`}>{e.title} • {e.time}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
