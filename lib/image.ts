import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

const imageBuilder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return imageBuilder.image(source);
}
