import Image from "next/image";

function Dcard({ url, name, des }) {
  return (
    <div className="card place bg-base-100 image-full w-96 h-[15rem] shadow-sm hover:opacity-90  transition-all">
      <figure className="brightness-200 relative w-full h-full">
        <Image
          src={`/${url}.jpg`}
          alt="Shoes"
          fill
          className="object-cover"
          priority
        />
      </figure>
      <div className="card-body flex items-center justify-center text-center  hover:shadow-2xl transition-all">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-xl mt-10 font-semibold">{des}</p>
      </div>
    </div>
  );
}

export default Dcard;
