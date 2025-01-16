import { Album } from "../models/album.model.js";

export const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    console.log("Error in getAllAlbums", error);
    next(error);
  }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const { albumId } = req.params;
    const album = await Album.findById(albumId).populate("songs");

    if (!album) {
      return res.status(404).json({ message: "Album not founded" });
    }

    res.status(200).json(album);
  } catch (error) {
    console.log("Error in getAlbumById", error);
    next(error);
  }
};
