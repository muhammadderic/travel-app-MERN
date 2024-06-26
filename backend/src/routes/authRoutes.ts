import express from "express";

import {
  userRegister,
  userLogin,
} from "../controllers/authController";

const router = express.Router();

/**
 * @route     POST /register
 * @desc      Register a new user
 * @access    Public
 * @body      { userName, email, password, address, phone, avatar, userType }
 * @response  201 Created - User registered successfully
 */
router.post("/register", userRegister);

/**
 * @route     POST /login
 * @desc      User log in
 * @access    Public
 * @body      { email, password }
 * @response  201 Created - User logged in successfully
 */
router.post("/login", userLogin);

/**
 * @route     GET /logout
 * @desc      User log out
 * @access    Private
 * @body      -
 * @response  201 Created - User logged out successfully
 */

export default router;