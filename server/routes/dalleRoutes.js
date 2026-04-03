import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// GET route
router.route('/').get(async (req, res) => {
  res.send("Hello from DALL-E!");
});

// POST route (FREE API)
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    res.status(200).json({ photo: imageUrl });

  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ message: "Failed to generate image" });
  }
});

export default router;