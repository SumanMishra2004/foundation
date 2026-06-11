import createImageUrlBuilder from '@sanity/image-url';
import { client, type SanityImage } from './sanity';

const imageBuilder = createImageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return imageBuilder.image(source);
}
