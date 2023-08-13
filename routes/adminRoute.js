import { admin } from "../models/adminModel.js";
import express from "express";

const router = express.Router();

router.post("/admin/create", async (req, res) => {
  console.log(req.body);
  const newAdmin = req.body;
  try {
    const createNewAdmin = await admin.create(newAdmin);
    if (createNewAdmin)
      res.status(201).send({
        success: true,
        message: "ADMIN CREATED SUCCESSFUL.",
      });
  } catch (error) {
    console.log({
      success: false,
      message: "ADMIN CREATION FAILED.",
      error,
    });
  }
});

export default router;
