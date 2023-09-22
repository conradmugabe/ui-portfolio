import Image from "next/image";

import { photoGallery } from "../data";

export function PhotoGallery() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 ">
      {photoGallery.map((photo) => (
        <div
          key={photo.alt}
          className="relative h-52 sm:h-56 md:h-60 lg:h-72 xl:h-80"
        >
          <Image
            src={photo.image}
            alt={photo.alt}
            className="object-cover"
            fill
          />
        </div>
      ))}
    </section>
  );
}
