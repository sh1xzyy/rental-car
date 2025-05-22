export const selectingAddress = (address: string, position: number) => {
	return address.split(' ')[position].replace(',', '')
}
