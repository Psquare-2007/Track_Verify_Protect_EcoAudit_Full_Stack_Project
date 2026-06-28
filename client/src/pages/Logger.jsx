import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addWaste } from "../services/wasteService";
import "./Background.css";
import FallingLeaves from "../components/FallingLeaves/FallingLeaves.jsx";

export default function Logger() {
  const [form, setForm] = useState({
    wasteType: "Plastic",
    weight: "",
    description: "  None",
    latitude: "",
    longitude: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setForm((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));

        toast.success("Location Verified");
      },
      () => {
        toast.error("Location Permission Denied");
      }
    );
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    setForm((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Number(form.weight) <= 0) {
      toast.error("Weight must be greater than 0 kg");
      return;
    }
    try {
      const formData = new FormData();

      formData.append("wasteType", form.wasteType);
      formData.append("weight", form.weight);
      formData.append("description", form.description);
      formData.append("latitude", form.latitude);
      formData.append("longitude", form.longitude);
      formData.append("image", form.image);

      await addWaste(formData);

      toast.success("Waste Record Saved Successfully");

      setForm({
        wasteType: "Plastic",
        weight: "",
        description: "  None",
        latitude: "",
        longitude: "",
        image: null,
      });

      setPreview("");

    } catch (err) {
      console.log(err);
      toast.error("Submission Failed");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="eco-background ">
        <FallingLeaves />
        <div className="eco-content min-h-screen pt-28 pb-20">

        <div className=" translate-y-10 max-w-7xl mx-auto px-6">

          <h1 className="text-center translate-x-30 text-4xl font-bold mb-10">
            Waste Logger
          </h1>

          <form
            onSubmit={handleSubmit}
            className="absolute -translate-x-17 translate-y-20 grid lg:grid-cols-2 gap-10"
          >

            <div className="
                translate-x-30
                glass-card
                relative
                p-8
                rounded-[32px]
                border
                border-white/30
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
                h-120
                overflow-hidden
                "
              >

              <label className="absolute translate-y-2 translate-x-3 block mb-2 ">
                Waste Type
              </label>

              <select
                name="wasteType"
                value={form.wasteType}
                onChange={handleChange}
                className="
                  absolute
                  translate-y-9
                  translate-x-12
                  w-[500px]                  
                  h-10
                  rounded-full
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-lg
                  px-6
                  shadow-md
                  outline-none
                  focus:ring-4
                  focus:ring-green-200
                  focus:border-green-500
                  transition-all
                  "
              >

                <option>Plastic</option>
                <option>Organic</option>
                <option>Paper</option>
                <option>Metal</option>
                <option>Glass</option>
                <option>E-Waste</option>

              </select>

              <label className="absolute  translate-x-3 translate-y-22 block mb-2">
                Weight (kg)
              </label>

              <input
                type="number"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                className="
                  translate-y-30
                  translate-x-12
                  w-[500px]
                  h-10
                  rounded-full
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-lg
                  px-6
                  shadow-md
                  outline-none
                  focus:ring-4
                  focus:ring-green-200
                  focus:border-green-500
                  transition-all
                  "
              />

              <label className="translate-x-70 translate-y-40.5 block mb-2">
                Enter Description...(Optional)
              </label>

              <input
                rows="5"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="
                  h-15
                  translate-y-30
                  translate-x-12
                  w-[500px]
                  rounded-[24px]
                  border
                  border-white/40
                  bg-white/60
                  backdrop-blur-lg
                  p-5
                  shadow-md
                  outline-none
                  focus:ring-4
                  focus:ring-green-200
                  focus:border-green-500
                  transition-all
                  "
              />
              <label className="translate-y-32 translate-x-4 block mb-3 font-medium">
                Upload Image
              </label>

              <div className="translate-x-4 translate-y-35 flex items-center gap-4">

                <label
                  htmlFor="imageUpload"
                  className="
                    cursor-pointer
                    translate-x-10
                    inline-flex
                    items-center
                    justify-center
                    w-[150px]
                    h-10
                    px-6
                    rounded-full
                    bg-gradient-to-r
                    from-green-600
                    to-emerald-600
                    text-white
                    font-semibold
                    shadow-lg
                    shadow-green-300/40
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-xl
                    "
                >
                  Choose Image
                </label>

                <span className="translate-x-17 text-red-500 font-bold">
                  {preview ? 
                  <div className = "text-green-700">Image Selected </div> : 
                  <div>No file chosen</div>}
                </span>

                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />

              </div>

               

              <button
                type="button"
                onClick={getLocation}
                className="
                  translate-y-41
                  translate-x-38
                  w-[310px]
                  h-10
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  "
              >
                Verify Location
              </button>

              <button
                type="submit"
                className="
                  translate-y-46
                  translate-x-38
                  w-[310px]
                  h-10
                  rounded-full
                  bg-gradient-to-r
                  from-green-600
                  to-emerald-500
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-green-300/40
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  "
              >
                Submit Record
              </button>

            </div>

            <div className="
              translate-x-70
              glass-card
              rounded-[32px]
              p-8
              border
              border-white/30
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              backdrop-blur-xl
              h-100
              overflow-hidden
              ">

              <h2 className="translate-y-7 text-3xl text-center font-bold mb-8">
                GPS Details
              </h2>

              <div className="text-center translate-y-12 space-y-6">

                <div className="bg-green rounded-xl p-5">

                  <p className="text-black">
                    Latitude
                  </p>

                  <div className="font-bold text-lg mt-2">

                    {form.latitude || "--"}

                  </div>

                </div>

                <div className="translate-y-15 bg-green rounded-xl p-5">

                  <p className="text-black">
                    Longitude
                  </p>

                  <div className="font-bold text-lg mt-2">

                    {form.longitude || "--"}

                  </div>

                </div>

                <div className="translate-y-25 bg-green rounded-xl p-5 ">

                  <h3 className="font-semibold text-blue-700">
                    Submission Status
                  </h3>

                  <p className="mt-2 text-black">
                    Fill the form, verify location and submit your waste report.
                  </p>

                </div>

              </div>

            </div>

          </form>

        </div>

      </div>
      </div>          
    </>
  );
}
