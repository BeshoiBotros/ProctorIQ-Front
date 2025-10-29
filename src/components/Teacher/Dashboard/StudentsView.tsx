import { Search, EllipsisVertical, Plus } from "lucide-react";
import type React from "react";

const StudentsView: React.FC = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="flex mx-5">
        <div className="w-full shadow-md rounded-xl bg-primary-content p-4  overflow-x-auto">
          <h1 className="p-2 text-2xl font-bold">Students :</h1>
          <div className="flex justify-between">
            <form className="mb-2">
              <label className="input input-bordered input-bse-content">
                <Search className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search For Students: "
                  className="grow"
                />
              </label>
            </form>
            <div>
              <button className="btn btn-ghost">
                <Plus />
              </button>
            </div>
          </div>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto min-h-[240px]">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Birth Of Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hazem Abdelnasser</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="tel:+">0155020304</a>
                  </td>
                  <td>Al Sharqia</td>
                  <td>06-03-2001</td>
                  <td>
                    <div className="badge badge-success text-primary-content">
                      Active
                    </div>
                  </td>
                  <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-sm m-1"
                      >
                        <EllipsisVertical size={15} />
                      </div>
                      <ul className="dropdown-content menu bg-base-100 rounded-box z-1000 w-35 p-2 shadow-sm">
                        <li className="mb-2">
                          <button className="btn btn-primary text-neutral-content btn-sm">
                            View
                          </button>
                        </li>
                        <li className="mb-2">
                          <button className="btn btn-info text-neutral-content btn-sm">
                            Update
                          </button>
                        </li>
                        <li>
                          <button className="btn btn-error text-neutral-content btn-sm">
                            In-Active
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 min-w-[210px]">
            <div className="card bg-base-100 shadow shadow-xl border border-solid border-gray-300">
              <div className="card-body">
                <h3 className="card-title">Physics Exam</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Duration: </span> 90 min
                  </div>
                  <div>
                    <span className="font-semibold">Start Date:</span>{" "}
                    01-11-2025 08:30
                  </div>
                  <div>
                    <span className="font-semibold">End Date:</span> 01-11-2025
                    09:30
                  </div>
                  <div>
                    <span className="font-semibold">Status: </span>
                    <div className="badge badge-success text-primary-content ms-2">
                      Active
                    </div>
                  </div>
                </div>
                <div className="card-actions justify-start mt-4">
                  <button className="btn btn-primary btn-sm">details</button>
                </div>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsView;
