"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function AdminPanel() {
  const { register, handleSubmit, control, reset, setValue } = useForm({
    defaultValues: { rates: [{ label: "", price: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "rates" });
  const [imageFile, setImageFile] = useState(null);
  const [cars, setCars] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false); // loader

  // Fetch existing cars on mount
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("location", data.location);
      formData.append("tag", data.tag);
      formData.append("rates", JSON.stringify(data.rates));
      if (imageFile) formData.append("image", imageFile);

      let url = "/api/cars";
      let method = "POST";

      if (editingId) {
        url = `/api/cars/${editingId}`;
        method = "PUT";
      }

      const res = await fetch(url, { method, body: formData });
      const result = await res.json();

      if (!res.ok) {
        alert("Error: " + result.error);
        return;
      }

      alert(`Car ${editingId ? "updated" : "added"} successfully!`);
      setImageFile(null);
      reset({ rates: [{ label: "", price: "" }] });
      setEditingId(null);
      fetchCars();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (car) => {
    setEditingId(car._id);
    setValue("name", car.name);
    setValue("location", car.location);
    setValue("tag", car.tag || "");
    reset({ rates: car.rates || [{ label: "", price: "" }] });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this car?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/cars/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        alert("Error: " + data.error);
        return;
      }
      setCars((prev) => prev.filter((car) => car._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete car");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      window.location.reload(); // refresh to show login
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 relative">
      {/* Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="text-white text-xl font-bold">Loading...</div>
        </div>
      )}

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black text-center flex-1">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Car Info */}
          <div className="space-y-3">
            <input
              className="w-full border text-black border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Car Name"
              {...register("name")}
            />
            <input
              className="w-full border text-black border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Location"
              {...register("location")}
            />
            <input
              className="w-full border text-black border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tag (Optional)"
              {...register("tag")}
            />
            <label className="block text-black font-medium">Upload Image</label>
            <input
              type="file"
              className="w-full border text-black border-gray-300 p-2 rounded-xl"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>

          {/* Rates Section */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">Rates</h2>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="flex gap-2 mb-2 items-center text-black bg-gray-50 p-3 rounded-xl shadow-sm"
              >
                <input
                  className="flex-1 border text-black border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none"
                  placeholder="Label"
                  {...register(`rates.${index}.label`)}
                />
                <input
                  className="flex-1 border text-black border-gray-300 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none"
                  placeholder="Price"
                  {...register(`rates.${index}.price`)}
                />
                <button
                  type="button"
                  className="text-red-500 font-bold text-lg text-black hover:text-red-600"
                  onClick={() => remove(index)}
                >
                  ❌
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-100 text-blue-700 text-black px-4 py-2 rounded-xl font-semibold hover:bg-blue-200 transition"
              onClick={() => append({ label: "", price: "" })}
            >
              + Add Rate
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r text-black from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            {editingId ? "Update Car" : "Add Car"}
          </button>
        </form>

        {/* Existing Cars */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-black mb-4">Existing Cars</h2>
          {cars.length === 0 && <p className="text-black">No cars added yet.</p>}
          <div className="space-y-4">
            {cars.map((car) => (
              <div
                key={car._id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <div>
                  <p className="font-semibold text-black">{car.name}</p>
                  <p className="text-black">{car.location}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-yellow-400 px-3 py-1 rounded-lg text-black hover:bg-yellow-500"
                    onClick={() => handleEdit(car)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600"
                    onClick={() => handleDelete(car._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
