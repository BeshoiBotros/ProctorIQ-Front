import type React from "react";

const AddExamModal: React.FC = () => {
  return (
    <dialog id="add_exam_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Exam</h3>
        <form className="py-2">
          <label className="input w-full">
            <div className="label text-black">Title</div>
            <input type="text" className="placeholder:text-gray-500" placeholder="Enter your title" />
          </label>
          <fieldset className="fieldset w-full mt-2">
            {/* <legend className="fieldset-legend">Description</legend> */}
            <div className="label text-black">Description (optional)</div>
            <textarea
              className="placeholder:text-gray-500 textarea h-24 w-full resize-none"
              placeholder="Enter your description"
            ></textarea>
          </fieldset>
          <label className="input w-full mt-2">
            <div className="label text-black">Start at</div>
            <input type="datetime-local" />
          </label>
          <label className="input w-full my-3">
            <div className="label text-black">End at</div>
            <input type="datetime-local" className="placeholder:text-gray-500" />
          </label>
          <label className="input w-full">
            <div className="label text-black">Duration</div>
            <input type="number" placeholder="Enter you Duration In Minutes" className="placeholder:text-gray-500" />
          </label>
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mt-3 w-full">
            <label className="label text-black">
              Active Status
              <input type="checkbox" defaultChecked className="toggle checked:text-gray-300 toggle-success checked:border-success checked:bg-success p-1" />
            </label>
          </fieldset>
          <div className="w-full flex justify-center p-2">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddExamModal;
