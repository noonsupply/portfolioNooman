import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { SimpleLayout } from '@/components/SimpleLayout'


export default function Speaking() {

  return (
    <SimpleLayout>
    <div className="dark: border-gray-100">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-0 lg:px-8" >
        <div className=" space-y-1 text-base text-zinc-600 dark:text-zinc-400 dark: border-gray-100 ">
          <h2 className="sr-only">Contact us</h2>

          <div className=" text-base text-zinc-600 dark:text-zinc-400 grid grid-cols-1 lg:grid-cols-3 dark: border-gray-100">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-teal-800 py-10 px-6 sm:px-10 xl:p-12">
            <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
              <svg
                  className="absolute inset-0 h-full w-full "
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block "
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Contact</h3>
              <p className="mt-6 max-w-3xl text-base text-indigo-50">{"Vous avez un projet ? N'hésitez pas à me contacter"}</p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only  text-zinc-200 dark:text-zinc-200">Téléphone</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                  <span className="ml-3">+33 (0)7 66 00 70 71</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                  <span className="ml-3">contact@noomanmiled.com</span>
                </dd>
              </dl>
              <ul role="list" className="mt-8 flex space-x-12">
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nooman-miled">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>                  </a>
                </li>
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" target="_blank" rel="noopener noreferrer" href="https://github.com/noonsupply">
                    <span className="sr-only">GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="items-center col-span-2">
    <div className="max-w-md mx-auto w-auto p-10 shadow-sm">
      <div className="text-center">
        <h1
          className="text-3xl font-semibold text-gray-700 dark:text-gray-200"
        >
          Contactez moi
        </h1>
        <p className="text-gray-400 dark:text-gray-400">
          Complétez le formulaire ci-dessous
        </p>
      </div>
      <div className="m-3">
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORM_KEY} />
          <input
            type="hidden"
            name="subject"
            value="New Submission from Web3Forms"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Nom & Prénom</label
            >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400"
              >Téléphone</label
            >
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+1 (555) 1234-567"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Votre Message</label
            >

            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-emerald-700 rounded-md focus:bg-emerald-500 focus:outline-none"
            >
              Envoyer
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
    </div>

</div>
          </div>
        </div>
      </div>
    </div>
</SimpleLayout>

  )
}

