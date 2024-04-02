/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useNavigate } from 'react-router-dom';

function Root() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
            효성 중공업 과제 화면 구현 샘플
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 md:w-1/3">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
              <div className="mb-3 flex items-center">
                <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="title-font text-lg font-medium text-gray-900">
                  Antv X6
                </h2>
              </div>
              <div className="flex-grow">
                <p className="mb-2 text-lg font-bold">기능</p>
                <p className="mb-1 text-base leading-relaxed ">
                  - go.js 와 비슷한 다양한 기능 제공
                </p>
                <p className="mb-1 text-base leading-relaxed ">
                  - node, link, minimap, pan, zoom, redo, undo, rotate, dnd 등
                  필요한 기능들이 대부분 준비되어 있음.
                </p>
                <p className="mb-1 text-base leading-relaxed ">
                  - 자체 svg 생성 및 svg 파일 읽어서 diagram에 제공 가능함.
                </p>
                <p className="mb-1 text-base leading-relaxed ">
                  - 문서 정리 잘 되어있고 example이 상세히 구현되어 있음.
                </p>
                <div className="my-4 w-full border-b-2" />
                <p className="mb-2 text-lg font-bold">고려사항</p>
                <p className="mb-1 text-base leading-relaxed ">
                  - 자체 라이브러리 exportSvg 기능에 현재 결함이 있음 (svg
                  파일이 화면에 제대로 표시가 안됨)
                </p>
                <a className="mt-3 inline-flex items-center text-indigo-500">
                  보기
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
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
              <div className="mb-3 flex items-center">
                <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h2 className="title-font text-lg font-medium text-gray-900">
                  The Catalyzer
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 inline-flex items-center text-indigo-500">
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
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
              <div className="mb-3 flex items-center">
                <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <h2 className="title-font text-lg font-medium text-gray-900">
                  Neptune
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 inline-flex items-center text-indigo-500">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Root;
