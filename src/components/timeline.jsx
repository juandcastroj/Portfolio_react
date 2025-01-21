const timeline = [
    {
      name: 'Mechanical designer',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: 'Nov 2019',
      dateTime: '2019-11',
    },
    {
      name: 'Geek academy',
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: 'Aug 2020',
      dateTime: '2020-08',
    },
    {
      name: 'Bitheaders',
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: 'Jan 2021 ',
      dateTime: '2021-01',
    },
    {
      name: 'SessionForward',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: 'Jun 2021',
      dateTime: 'present',
    },
  ]

export default function Timeline () {

    return (
      <div id="timeline-section" className="mx-auto my-12 max-w-7xl px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-orange-500 dark:text-gray-200">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-400 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-green-900 dark:text-blue-300">{item.name}</p>
              <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
}