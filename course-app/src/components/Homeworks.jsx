import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { IoMdArrowDropdown } from 'react-icons/io'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Homeworks(homeworks) {
  const [modal, setModal] = useState(false)
  const [assignment, setAssignment] = useState({})

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75">
            <p className='pr-1'>Homeworks</p>
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
            {
              homeworks.homeworks.map((week, weekIndex)=>{
                return (
                  <div key={weekIndex}>
                    {
                      week.map((homework,index)=>{
                        return (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active ? 'bg-black text-white': 'text-black',
                                  'block px-4 py-2'
                                )}
                                onClick={() => {setModal(true);setAssignment(homework)}}
                              >
                                {homework.name}
                              </a>
                            )}
                          </Menu.Item>
                      )})
                    }
                  </div>
                )
              }
            )}
          </Menu.Items>
        </Transition>
      </Menu>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl hover:max-w-3xl transform overflow-hidden rounded-md bg-white hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 p-5 align-middle shadow-xl transition-all text-md hover:text-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-md font-mono font-medium leading-6 text-black uppercase"
                  >
                    Homework {assignment.name}
                  </Dialog.Title>
                  <div>
                    <p className="text-red-700 font-mono">{ assignment.due }</p>
                    <p className="font-mono py-5 text-start select-none whitespace-pre-line">
                      {assignment.prompt}
                    </p>
                  </div>
                  <a
                    href={assignment.link}
                    target="_blank"
                    className="inline-flex justify-center rounded-md hover:ring-1 ring-black bg-black text-white px-4 py-2 uppercase font-mono font-medium hover:bg-gradient-to-r hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black"
                  >
                    Submit &gt;&gt;
                  </a>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
