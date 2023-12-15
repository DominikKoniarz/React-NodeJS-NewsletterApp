import express from "express";
import path from "path";

const DIST_PATH = path.join(process.cwd(), "..", "frontend", "dist", "assets");

const staticAssets = express.static(DIST_PATH);

export default staticAssets;
