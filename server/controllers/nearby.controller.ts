import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const NearbyController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract request parameters
    const { name, filter, location } = req.body;

    if (!location) {
      res.status(400).json({ error: "Location is required (latitude,longitude)." });
      return;
    }

    // Google Places API URL
    const googleMapsUrl = ``;

    // API Request Parameters
    const params = {
      location, // Latitude,Longitude (e.g., "37.7749,-122.4194")
      radius: 5000, // 5 km search radius
      keyword: name, // Search by name if provided
      type: filter || "hospital", // Default type if not provided
      key: process.env.GOOGLE_MAPS_API_KEY, // Google Maps API Key
    };

    // Make request to Google Places API
    const response = await axios.get(googleMapsUrl, { params });

    // Extract necessary details from response
    const results = response.data.results.map((place: any) => ({
      name: place.name,
      description: place.types?.join(", ") || "No description available",
      address: place.vicinity || "No address available",
      phone: place.formatted_phone_number || "No phone available",
    }));

    // Send response to client
    res.json(results);
  } catch (error) {
    console.error("Error fetching nearby places:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
