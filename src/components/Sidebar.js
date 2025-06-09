import {
  HomeIcon,
  FolderIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Produtos', href: '#', icon: FolderIcon, current: true },
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="eMutua Digital"
          src="https://emutuadigital.com/wp-content/uploads/2020/12/logo-emutua.svg"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-white"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}