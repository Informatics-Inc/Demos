const picker1 = new easepick.create({
  element: "#datepicker1",
  css: [
      "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"
  ],
  zIndex: 10
})
const picker2 = new easepick.create({
  element: "#datepicker2",
  css: [
      "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"
  ],
  zIndex: 10
})

const picker3 = new easepick.create({
  element: "#datepicker3",
  css: [
      "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"
  ],
  zIndex: 10,
  plugins: [
      "RangePlugin",
      "PresetPlugin"
  ]
})
const picker4 = new easepick.create({
  element: "#datepicker4",
  css: [
      "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"
  ],
  zIndex: 10,
  plugins: [
      "TimePlugin"
  ]
})
const DateTime = easepick.DateTime;
    const bookedDates = [
        '2023-01-02',
        ['2023-01-06', '2023-01-11'],
        '2023-01-18',
        '2023-01-19',
        '2023-01-20',
        '2023-01-25',
        '2023-01-28',
    ].map(d => {
        if (d instanceof Array) {
          const start = new DateTime(d[0], 'YYYY-MM-DD');
          const end = new DateTime(d[1], 'YYYY-MM-DD');

          return [start, end];
        }

        return new DateTime(d, 'YYYY-MM-DD');
    });
    const picker5 = new easepick.create({
      element: document.getElementById('datepicker5'),
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
      ],
      plugins: ['RangePlugin', 'LockPlugin'],
      RangePlugin: {
        tooltipNumber(num) {
          return num - 1;
        },
        locale: {
          one: 'night',
          other: 'nights',
        },
      },
      LockPlugin: {
        minDate: new Date(),
        minDays: 2,
        inseparable: true,
        filter(date, picked) {
          if (picked.length === 1) {
            const incl = date.isBefore(picked[0]) ? '[)' : '(]';
            return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
          }

          return date.inArray(bookedDates, '[)');
        },
      }
    });