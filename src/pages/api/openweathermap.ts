import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

//@ts-ignore
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		let lat: string | string[];
		let lon: string | string[];

		if (req.query.lat === 'undefined') {
			const response =  await axios(`https://api.openweathermap.org/geo/1.0/direct?q=new+york,ny,us&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
			lat = response.data[0].lat.toString();
			lon = response.data[0].lon.toString();
		} else {
			lat = req.query.lat;
			lon = req.query.lon;
		}

		const returned = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`);
		res.status(returned.status).json(returned.data);
	} catch (error) {
		res.status(400).json({error: 'error'});
	}
};
