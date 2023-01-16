export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeSentence(sentence: string) {
	return sentence.split(" ").map(capitalize).join(" ");
}
