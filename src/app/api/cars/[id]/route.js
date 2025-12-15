import dbConnect from "../../../lib/mongodb.js";
import cloudinary from "../../../lib/cloudinary.js";
import Car from "../../../models/Car.js";

import { NextResponse } from "next/server";
import { Readable } from "stream";

// Update a car by ID
export const PUT = async (req, { params }) => {
  try {
    await dbConnect();
    const { id } = params; // dynamic id from URL

    const formData = await req.formData();
    const name = formData.get("name");
    const location = formData.get("location");
    const tag = formData.get("tag");
    const rates = JSON.parse(formData.get("rates"));
    const imageFile = formData.get("image");

    let updateData = { name, location, tag, rates };

    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const streamUpload = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "cars" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          const readable = new Readable();
          readable.push(buffer);
          readable.push(null);
          readable.pipe(stream);
        });

      const result = await streamUpload();
      updateData.image = result.secure_url;
    }

    const updatedCar = await Car.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedCar) return NextResponse.json({ error: "Car not found" }, { status: 404 });

    return NextResponse.json(updatedCar);
  } catch (error) {
    console.error("PUT /api/cars/:id error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Delete a car by ID
export const DELETE = async (_, { params }) => {
  try {
    await dbConnect();
    const { id } = params;

    const deleted = await Car.findByIdAndDelete(id);
    if (!deleted) return NextResponse.json({ error: "Car not found" }, { status: 404 });

    return NextResponse.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/cars/:id error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
