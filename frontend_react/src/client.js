import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "r2cfkij6",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skMxscWMDZYE3I4NNJdGhgQqJIibX82q1nfFZyb59K4oOs92WXwol0ui8kdxMGqCkGWhzT54gigmsf3ERVIaR0tRigT7NkHOoUZ4bqdf0oWwe2YrHKHLbwjIiZ45rrM1DYDCb1DDvl8Whi2tnKKKSDFwMJV0SbISesZ4mSKNxxCLvyOz8LOG",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
