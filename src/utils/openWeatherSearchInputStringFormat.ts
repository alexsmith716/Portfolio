export default function formatString(string: string) {
	const isServer = typeof window === 'undefined';

	const row:string = string.toLowerCase().trim().replace(/\s\s+/g, ' ');
	const s:string[] = row.split(',');
	const cn:string = !isServer ? s[0].replace(/\s/g, ' ') : s[0].trim().replace(/\s/g, '+');

	const cityName:string = (`${cn}`).trim();
	const stateCode:string = (s[1]).trim();
	const countryCode:string = s[2] !== undefined ? String.fromCharCode(44)+s[2] : '';

	if(!isServer) {
		return cityName+','+String.fromCharCode(160)+stateCode+countryCode;
	}

	if(isServer) {
		return (cityName+','+String.fromCharCode(160)+stateCode+countryCode).replace(/\s/g, '');
	}
}
