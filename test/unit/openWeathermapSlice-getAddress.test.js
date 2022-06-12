import axios from 'axios';
import { getAddress } from '../../src/redux/reducers/openWeathermapSlice';

jest.mock('axios');

const gc = 'boston,ma,us';
const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${gc}&limit=1&appid=${process.env.NEXT_PUBLIC_APP_ID}`;

const response = {
	"data": [
		{
			"name": "Boston",
			"local_names": {
				"en": "Boston",
			},
			"lat": 42.3602534,
			"lon": -71.0582912,
			"country": "US",
			"state": "Massachusetts"
		}
	],
	"status": 200,
	"statusText": "OK",
	"headers": {
		"content-length": "540",
		"content-type": "application/json; charset=utf-8"
	},
	"config": {
		"transitional": {
			"silentJSONParsing": true,
			"forcedJSONParsing": true,
			"clarifyTimeoutError": false
		},
		"transformRequest": [
			null
		],
		"transformResponse": [
			null
		],
		"timeout": 0,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"maxContentLength": -1,
		"maxBodyLength": -1,
		"env": {
			"FormData": null
		},
		"headers": {
			"Accept": "application/json, text/plain, */*"
		},
		"method": "get",
		"url": `https://api.openweathermap.org/geo/1.0/direct?q=boston,ma,us&limit=1&appid=${process.env.NEXT_PUBLIC_APP_ID}`
	},
	"request": {}
};

describe('function getAddress() fetch geo latitude and longitude', () => {
	describe('when getAddress() API call is successful', () => {

		it('should return the location latitude and longitude', async () => {

			axios.get.mockResolvedValueOnce(response);

			const result = await getAddress(gc);

			const ll = {
				lat:response.data[0].lat,
				lon:response.data[0].lon,
			};

			expect(axios.get).toHaveBeenCalledWith(`${URL}`);
			expect(result).toEqual(ll);
		});
	});
});
