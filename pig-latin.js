function getPigLatin() {

  //get the str input by the user
  var str = document.getElementById("word").value;
  

  //your code goes here
	new_str ="";
	last_letters = "";
	pattern = (/([^a-zA-Z\d\s:])/);
	if (pattern.test(str)) {
		new_str = "Please input a legitimate word only."
	}
	else {
		if (str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u") {
			var new_str = str;
		}
		else
		{
			var store = "";
			var store = str[0];
			var str = str.slice(1, -1);
			var new_str = str + store + "ay";
		}


	}


  //change the HTML content of a <p> element with id="pig-latin-str": 
  document.getElementById("pig-latin-word").innerHTML = new_str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});

// 	if str.scan(/([^a-zA-Z\d\s:])/).empty?
// 		if str.start_with?("a", "e", "i", "o", "u")
// 			new_str = str
// 		else
// 			store = ""
// 			store += str[0]
// 			str = str[1..-1]
// 			new_str = str + store + "ay"
// 		end

// 	else
// 		b = str.scan(/([^a-zA-Z\d\s:])/)
// 		symbols = ""
// 		b.each do |i|
// 			symbols = symbols + i.join
// 		end
// 		b = b.join.chars
// 		b.each do |i| # i is a string
// 			str.slice! i
// 		end
		
// 		if str.start_with?("a", "e", "i", "o", "u")
// 			new_str = str
// 		else
// 			store = ""
// 			store += str[0]
// 			str = str[1..-1]
// 			new_str = str + store + "ay" + symbols
// 		end
// 	end
// 	p new_str
// end