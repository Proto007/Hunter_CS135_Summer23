import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoMdArrowDropdown } from 'react-icons/io'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  return (
    <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75">
                <p className='pr-1'>Projects</p>
                <IoMdArrowDropdown/>
            </Menu.Button>
        </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute z-10 mt-2 w-full text-center text-sm p-1 font-mono origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none">
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={classNames(
                        active ? 'bg-black text-white': 'text-black',
                        'block px-4 py-2'
                    )}
                    target="_blank"
                    href="/Hunter_CS135_Summer23/#/Project_1"
                    >
                    Project 1
                    </a>
                )}
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}