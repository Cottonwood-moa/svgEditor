/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
function Test2() {
  return (
    <section className="body-font h-full w-full overflow-hidden border-2 bg-white text-gray-600">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">
            Pricing
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="mx-auto w-full overflow-auto lg:w-2/3">
          <table className="whitespace-no-wrap w-full table-auto text-left">
            <thead>
              <tr>
                <th className="title-font rounded-bl rounded-tl bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900">
                  Plan
                </th>
                <th className="title-font bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900">
                  Speed
                </th>
                <th className="title-font bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900">
                  Storage
                </th>
                <th className="title-font bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900">
                  Price
                </th>
                <th className="title-font w-10 rounded-br rounded-tr bg-gray-100 text-sm font-medium tracking-wider text-gray-900" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Start</td>
                <td className="px-4 py-3">5 Mb/s</td>
                <td className="px-4 py-3">15 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                <td className="w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  25 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $24
                </td>
                <td className="w-10 border-t-2 border-gray-200 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  Business
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  36 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $50
                </td>
                <td className="w-10 border-t-2 border-gray-200 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-b-2 border-t-2 border-gray-200 px-4 py-3">
                  Exclusive
                </td>
                <td className="border-b-2 border-t-2 border-gray-200 px-4 py-3">
                  48 Mb/s
                </td>
                <td className="border-b-2 border-t-2 border-gray-200 px-4 py-3">
                  120 GB
                </td>
                <td className="border-b-2 border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
                <td className="w-10 border-b-2 border-t-2 border-gray-200 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-auto mt-4 flex w-full pl-4 lg:w-2/3">
          <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default Test2;
