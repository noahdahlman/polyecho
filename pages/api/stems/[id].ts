import { withSentry } from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

import connectMongo from '../../../lib/mongoClient'
import { IStemDoc, Stem } from '../../../models/stem.model'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const {
		query: { id },
		body,
		method,
	} = req

	await connectMongo()

	switch (method) {
		case 'GET':
			try {
				const stem: IStemDoc | null = await Stem.findById(id)
				if (!stem) {
					return res.status(400).json({ success: false })
				}
				res.status(200).json({ success: true, data: stem })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		case 'PUT':
			try {
				// Update anything passed through,
				const stem: IStemDoc | null = await Stem.findByIdAndUpdate(id, body, {
					new: true,
					runValidators: true,
				})

				// Catch error
				if (!stem) {
					return res.status(400).json({ success: false, error: 'failed to update stem' })
				}

				res.status(200).json({ success: true, data: stem })
			} catch (e) {
				res.status(400).json({ success: false, error: e })
			}
			break

		case 'DELETE':
			try {
				const deletedStem = await Stem.deleteOne({ _id: id })
				if (!deletedStem) {
					return res.status(400).json({ success: false, error: 'failed to delete stem' })
				}

				// TODO: Delete from user's stems

				res.status(200).json({ success: true, data: deletedStem })
			} catch (e) {
				res.status(400).json({ success: false, error: e })
			}
			break

		default:
			res.status(400).json({ success: false, error: `HTTP method '${method}' is not supported` })
			break
	}
}

// Use Sentry as a logging tool when running production environments
export default process.env.NODE_ENV === 'production' ? withSentry(handler) : handler
