movies = [
{
	title: "frozen",
	hasWatched: true,
	rating: 5 
},
{
	title: "breakign bad",
	hasWatched: true,
	rating: 5
},
{
	title: "batman",
	hasWatched: true ,
	rating: 5 
},
{
	title: "10,000bc",
	hasWatched: true,
	rating: 0
},
{	title: "the joker",
	hasWatched: false,
	rating: 5
}
]

funtcion buildString(movie){
var result = "you have "; 
if(movie.hasWatched == true){
		result += "watched ";
	}
	else{
		result += "not seen ";
	}
	result += "\"" + movie.title + " \" - ";
	result += movie.rating + " stars";
	 return result;
	

}

movies.forEach(function(movies){
	console.log(buildString(movies));
	});









C:\Users\cmerr\AppData\Local\Temp\PRODUCT_NAME_UNKNOWN_
CrashDumpPRODUCT_VERSION_MAJOR_UNKNOWN-PRODUCT_VERSION
_MINOR_UNKNOWN-2019-10-02--08-28-58_.dmp