import Image from "next/image";
import { v2 as cloudinary } from "cloudinary";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// export default async function Home() {
//   return (

// )
//
// }

// import mountains from '../public/mountains.jpg'

export default async function Gallery1() {
  const getPics = () => {};
  const { resources } = await cloudinary.search
    .expression("photobooth3")
    .max_results(500)
    .execute();

  return (
    <Suspense fallback={<Loading />}>
      <h1
        className=" py-8
       font-bold text-4xl text-center text-blue-800"
      >
        Your Event Photos
      </h1>
      <div
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(4, 1fr)",
        //   gridTemplateRows: "repeat(4, 5vw)",
        //   gap: "15px",
        // }}
        className="w-full py-4 max-w-5xl mx-auto md:columns-2 lg:columns-3 gap-3"
      >
        {resources?.map((image: any) => {
          return (
            <>
              <article className="shadow-md hover:scale-110 p-2 rounded-2xl gap-5">
                <Image
                  alt="Event Photos"
                  title={image.public_id}
                  src={image.secure_url}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="h-auto gap-5 p-2 w-full object-cover rounded-2xl "
                />
              </article>
            </>
          );
        })}
      </div>
    </Suspense>
  );
}
function Loading() {
  return (
    <h2 text-center text-7xl font-bolder>
      🌀 Loading...
    </h2>
  );
}
