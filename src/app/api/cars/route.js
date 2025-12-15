import dbConnect from "../../lib/mongodb.js";
import cloudinary from "../../lib/cloudinary.js";
import Car from "../../models/Car.js";

import { NextResponse } from "next/server";
import { Readable } from "stream";

export const GET = async () => {
  try {
    await dbConnect();
    const cars = await Car.find({});
    return NextResponse.json(cars);
  } catch (error) {
    console.error("GET /api/cars error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await dbConnect();

    const formData = await req.formData();
    const name = formData.get("name");
    const location = formData.get("location");
    const tag = formData.get("tag");
    const rates = JSON.parse(formData.get("rates"));
    const imageFile = formData.get("image");

    let imageUrl = "";

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
      imageUrl = result.secure_url;
    }

    const car = await Car.create({ name, location, tag, rates, image: imageUrl });
    return NextResponse.json(car, { status: 201 });
  } catch (error) {
    console.error("POST /api/cars error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
