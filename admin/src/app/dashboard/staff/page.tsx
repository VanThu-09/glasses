"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
export default function StaffPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="mt-2 flex flex-col gap-10">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search for the tool you like"
              className="h-10 w-full rounded-l  border-2 border-stroke bg-white px-3 text-black shadow-default "
            />
            <button
              type="submit"
              className="rounded-r bg-sky-500 px-2 py-0 text-white  md:px-3 md:py-1"
            >
              Search
            </button>
          </div>
          <select
            id="pricingType"
            name="pricingType"
            className="h-10 rounded border-2 border-stroke bg-white px-2 py-0 tracking-wider text-black shadow-default  md:px-3 md:py-1"
          >
            <option value="all">All</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="phoneNumber">Phone Number</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div className=" rounded-sm border border-stroke bg-white shadow-default">
          <div className=" items-center justify-between px-4 py-6 md:px-6 xl:px-7.5">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold text-black ">
                Staff List
              </h4>
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn-info text-white py-2 px-4 flex justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Thêm
              </button>
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-90 text-black  bg-white bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg mt-10">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">User Form</h2>
                      <button onClick={() => setIsOpen(false)} className="text-red-500">✖</button>
                    </div>
                    <div className="space-y-4 gap-2 grid">
                      <div className="flex flex-col">
                        <label className="font-medium">Email</label>
                        <input type="email" placeholder="Email" className="border px-2 py-1 bg-white rounded-md" />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium">Password</label>
                        <input type="password" placeholder="Password" className="border bg-white px-2 py-1 rounded-md" />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium">Name</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder="First Name" className="border bg-white px-2 py-1 rounded-md w-1/2" />
                          <input type="text" placeholder="Last Name" className="border bg-white px-2 py-1 rounded-md w-1/2" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4  text-black  sm:flex-row ">
                        <p className="w-32 shrink-0 font-medium text-black  ">
                          Birthday
                        </p>
                        <input type="date" className="border px-2 py-1 rounded-md w-full sm:w-1/2 text-black bg-white" />
                      </div>
                      <div className="flex flex-col gap-1 sm:flex-row">
                        <p className="w-32 shrink-0 font-medium text-black  ">
                          Gender
                        </p>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-5 w-5 cursor-pointer text-black  "
                            id="Male"

                          />
                          <label
                            htmlFor="Male"
                            className="ml-2 flex cursor-pointer gap-2 text-black  "
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-5 w-5 cursor-pointer text-black  "
                            id="Female"

                          />
                          <label
                            htmlFor="Female"
                            className="ml-2 flex cursor-pointer gap-2 text-black  "
                          >
                            Female
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-5 w-5 cursor-pointer text-black  "
                            id="Other"

                          />
                          <label
                            htmlFor="Other"
                            className="ml-2 flex cursor-pointer gap-2 text-black "
                          >
                            Other
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium">Phone</label>
                        <input type="text" placeholder="Phone number" className="border bg-white px-2 py-1 rounded-md" />
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="/images/user/user-06.png" alt="Avatar" className="h-16 w-16 rounded-full mb-2" />
                        <input type="file" className="text-sm" />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button onClick={() => setIsOpen(false)} className="bg-gray-300 px-3 py-1 rounded mr-2">Cancel</button>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-6 border-t border-stroke px-4 py-4 text-black sm:grid-cols-8 md:px-6 2xl:px-7.5">
              <div className="col-span-2 flex items-center">
                <p className="font-medium">User name</p>
              </div>
              <div className="col-span-1 hidden items-center sm:flex">
                <p className="font-medium">Role</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="font-medium">Gender</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="font-medium">City</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="font-medium">Phone number</p>
              </div>
              <div className="col-span-2 flex items-center">
                <p className="font-medium">Controller</p>
              </div>
            </div>
            <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative drop-shadow-2 p-3">
                    <Image
                      src={"/images/user/user-06.png"}
                      width={60}
                      height={60}
                      alt="profile"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm text-black ">
                    Thu Van
                  </p>
                </div>
              </div>
              <div className="col-span-1 hidden items-center sm:flex">
                <p className="text-sm text-black ">
                  Admin
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black ">
                  Other
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black ">
                  HoaiDuc
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black text-meta-3">
                  0981726JQK
                </p>
              </div>
              <div className="col-span-2 flex items-center gap-1">
                <div className="dropdown dropdown-bottom dropdown-start">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn  btn-success m-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] w-52 rounded-box bg-white p-2 shadow"
                  >
                    <li>
                      <button className="text-black" onClick={() => (document.getElementById('edit_profile_modal') as HTMLDialogElement).showModal()}>
                        Edit profile
                      </button>
                      <dialog id="edit_profile_modal" className="modal grid justify-center items-center">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Edit profile</h3>
                          <p className="py-4">Press ESC key or click the button below to close</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </li>

                    <li>
                      <button className="text-black" onClick={() => (document.getElementById('edit_role_modal') as HTMLDialogElement).showModal()}>
                        Edit role
                      </button>
                      <dialog id="edit_role_modal" className="modal grid justify-center pt-28 items-center">
                        <div className="modal-box w-60">
                          <h3 className="font-bold text-xl">Edit role</h3>
                          <div className="flex justify-between items-center py-4">
                            <p className="text-lg">Admin</p>
                            <input type="checkbox" defaultChecked className="toggle" />
                          </div>
                          <div className="flex justify-between items-center py-4">
                            <p className="text-lg">Staff</p>
                            <input type="checkbox" defaultChecked className="toggle" />
                          </div>
                          <div className="flex justify-between items-center py-4">
                            <p className="text-lg">User</p>
                            <input type="checkbox" defaultChecked className="toggle" />
                          </div>
                          <button name="btn-role" className="bg-cyan-500 w-48 p-2 mt-3 rounded-md text-white">Submit</button>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </li>
                    <li className="">
                      <button className="text-black" onClick={() => (document.getElementById('change_password_modal') as HTMLDialogElement).showModal()}>
                        Change password
                      </button>
                      <dialog id="change_password_modal" className="modal grid justify-center items-center">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Change password</h3>
                          <p className="py-4">Press ESC key or click the button below to close</p >
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}