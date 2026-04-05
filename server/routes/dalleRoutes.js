import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Create OpenAI instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST route to generate image
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    // Generate image
    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024",
    });

    // Extract base64 image
    const image_base64 = result.data[0].b64_json;

    // Send response
    res.status(200).json({
      photo: image_base64,
    });

  } catch (error) {
    console.error("Error generating image:", error);

    res.status(500).json({
      message: error?.message || "Something went wrong",
    });
  }
});

export default router;