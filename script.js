function firstNonRepeatedChar(str) {
 // Write your code her
const charFrequency = {};
	for(let char Of str)
		{
			charFrequency[char] = charFrequency[char] + 1 || 1; 
			
		}
		for(let char Of str)
		{
			if(charFrequency[char] === 1){
				return char;
			}
			
		}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
