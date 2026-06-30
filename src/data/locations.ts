export type Location = {
  slug: string;
  city: string;
  blurb: string;
  lat: number;
  lng: number;
  address: string;
};

export const locations: Location[] = [
  {
    slug: "abbotsford",
    city: "Abbotsford",
    blurb:
      "From McCallum Road shops to Sumas Mountain estates, Abbotsford homeowners and businesses trust us for flooring and concrete coatings that handle Fraser Valley weather and daily use.",
    lat: 49.0504,
    lng: -122.3045,
    address: "Abbotsford, BC, Canada",
  },
  {
    slug: "surrey",
    city: "Surrey",
    blurb:
      "Whether it's a South Surrey custom home, a Newton warehouse, or a Cloverdale shop, we install premium flooring and concrete coatings across every Surrey neighbourhood.",
    lat: 49.1913,
    lng: -122.5045,
    address: "Surrey, BC, Canada",
  },
  {
    slug: "delta",
    city: "Delta",
    blurb:
      "From Tsawwassen waterfront homes to Annacis Island industrial facilities, our team brings premium flooring solutions throughout Delta and the surrounding peninsula.",
    lat: 49.0374,
    lng: -123.0724,
    address: "Delta, BC, Canada",
  },
  {
    slug: "langley",
    city: "Langley",
    blurb:
      "Langley City condos, Walnut Grove garages, and Aldergrove acreages — we deliver beautifully finished floors and durable concrete coatings throughout the Township and City of Langley.",
    lat: 49.1869,
    lng: -122.6620,
    address: "Langley, BC, Canada",
  },
  {
    slug: "chilliwack",
    city: "Chilliwack",
    blurb:
      "Serving Chilliwack, Sardis, and Promontory with garage epoxy, hardwood, vinyl plank, and commercial flooring — installed by locals who know the area.",
    lat: 49.1635,
    lng: -122.0903,
    address: "Chilliwack, BC, Canada",
  },
  {
    slug: "maple-ridge",
    city: "Maple Ridge",
    blurb:
      "From Silver Valley to downtown Maple Ridge, we handle everything from luxury hardwood installations to heavy-duty shop coatings.",
    lat: 49.2103,
    lng: -122.3045,
    address: "Maple Ridge, BC, Canada",
  },
  {
    slug: "mission",
    city: "Mission",
    blurb:
      "Mission homeowners and business owners count on us for clean, durable, beautifully finished flooring and concrete coating projects of every size.",
    lat: 49.1933,
    lng: -122.3045,
    address: "Mission, BC, Canada",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
