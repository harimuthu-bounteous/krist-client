import { ProductImage } from "@/types/Product";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(srcImg: string) {
  // const res = await fetch(srcImg);

  // if (!res.ok) {
  //   throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
  // }

  // const buffer = await res.arrayBuffer();

  // const {
  //   base64,
  //   metadata: { height, width },
  // } = await getPlaiceholder(Buffer.from(buffer), { size: 10 });

  // return { base64, img: { height, width, url: srcImg } };

  const base64 = await fetch(srcImg).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString("base64");
  });

  return base64;
}

// export async function addBlurredBataUrls(images: ProductImage[]): Promise<[]> {
//   const base64Promises = images.map((photo) => getBase64(photo.Url));

//   const base64Results = await Promise.all(base64Promises);

//   const photosWithBlur: [] = images.map((photo, index) => {
//     photo.blurredDataUrl = base64Results[i]
//     return photo;
//   })

//   return photosWithBlur;
// }
