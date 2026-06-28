import { useState } from "react";
import {
  Trash2,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";

import {
  verifyWaste,
  deleteWaste,
} from "../../services/wasteService.js";

import ImageModal from "./ImageModal";

export default function WasteTable({
  records = [],
  refresh
}) {
  const [selectedImage, setSelectedImage] =
    useState("");

  return (
    <>
      <div className="glass-card rounded-3xl shadow-lg overflow-hidden">

        {/* Header */}

        <div className=" text-center px-8 py-6 border-b">

          <h2 className="text-3xl font-bold text-slate-800">
            Waste Records
          </h2>

          <p className="text-slate-500 mt-2">
            Complete list of submitted waste reports.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-green-600 text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Image
                </th>

                <th className="px-6 py-4 text-left">
                  Category
                </th>

                <th className="px-6 py-4 text-left">
                  Weight
                </th>

                <th className="px-6 py-4 text-left">
                  Latitude
                </th>

                <th className="px-6 py-4 text-left">
                  Longitude
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {records.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-20 text-slate-500"
                  >

                    No Waste Records Found

                  </td>

                </tr>

              ) : (

                records.map((item) => {

                  const imageUrl = item.image
                    ? `http://localhost:5000/uploads/${item.image}`
                    : null;

                  return (

                    <tr
                      key={item._id}
                      className="border-b hover:bg-slate-50 transition"
                    >

                      {/* Image */}

                      <td className="px-6 py-4">

                        {imageUrl ? (

                          <img
                            src={imageUrl}
                            alt=""
                            onClick={() =>
                              setSelectedImage(imageUrl)
                            }
                            className="w-20 h-20 rounded-2xl object-cover cursor-pointer hover:scale-105 transition"
                          />

                        ) : (

                          <div className="w-20 h-20 rounded-2xl bg-slate-200 flex items-center justify-center">

                            <ImageIcon
                              className="text-slate-500"
                              size={30}
                            />

                          </div>

                        )}

                      </td>

                      {/* Waste */}

                      <td className="px-6 py-4 font-semibold">

                        {item.wasteType}

                      </td>

                      {/* Weight */}

                      <td className="px-6 py-4">

                        {item.weight} kg

                      </td>

                      {/* Lat */}

                      <td className="px-6 py-4">

                        {Number(item.latitude).toFixed(4)}

                      </td>

                      {/* Long */}

                      <td className="px-6 py-4">

                        {Number(item.longitude).toFixed(4)}

                      </td>

                      {/* Status */}

                      <td className="px-6 py-4">

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            item.status === "Verified"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >

                          {item.status}

                        </span>

                      </td>

                      {/* Actions */}

                      <td className="px-6 py-4">

                        <div className="flex justify-center gap-3">

                          <button
                            onClick={async () => {
                              try {
                                await verifyWaste(item._id);
                                refresh();
                              } catch (err) {
                                console.log(err);
                              }
                            }}
                            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition"
                          >
                            <CheckCircle2 size={18} />
                          </button>

                          <button
                            onClick={async () => {
                              if (!window.confirm("Delete this waste record?")) return;

                              try {
                                await deleteWaste(item._id);
                                refresh();
                              } catch (err) {
                                console.log(err);
                              }
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                      </td>

                    </tr>

                  );

                })

              )}

            </tbody>

          </table>

        </div>

      </div>

      <ImageModal
        image={selectedImage}
        onClose={() =>
          setSelectedImage("")
        }
      />
    </>
  );
}