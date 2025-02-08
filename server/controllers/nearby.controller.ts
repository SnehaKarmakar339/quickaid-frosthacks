import { Request, Response } from "express";
import axios from "axios";

export const NearbyController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, location, filter } = req.body;
    const radius = 5000; // 5km
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      res.status(500).json({ error: "Google Maps API Key is required." });
      return;
    }

    if (!location) {
      res
        .status(400)
        .json({ error: "Location is required (latitude,longitude)." });
      return;
    }

    const googleMapsUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${filter}&key=${apiKey}`;

    const response = await axios.get(googleMapsUrl);

    const results = response.data.results.map((place: any) => ({
      name: place.name,
      description: place.types?.join(", ") || "No description available",
      address: place.vicinity || "No address available",
      phone: place.formatted_phone_number || "No phone available",
      link: `https://www.google.com/maps/search/?api=1&query=${
        place.geometry.location.lat
      },${place.geometry.location.lng}&query_place_id=${
        place.place_id
      }&query_name=${encodeURIComponent(place.name)}`,
    }));

    res.json(results);
  } catch (error) {
    console.error("Error fetching nearby places:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
