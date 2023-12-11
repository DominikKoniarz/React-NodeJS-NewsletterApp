import express from "express";
import path from "path";

const STATIC_ASSETS_PATH = path.join(
	process.cwd(),
	"..",
	"frontend",
	"dist",
	"assets"
);

const staticAssets = express.static(STATIC_ASSETS_PATH);

export default staticAssets;
