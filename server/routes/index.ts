import express from 'express'
import user from './userRoutes'
import auth from './authRoutes'

const router = express.Router()

router.get('/healthcheck', (_, res) => res.sendStatus(200))

export default router