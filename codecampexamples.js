My FreeCodeCamp solutions, run with Node.js
--
Regex Check for Palindromes

function palindrome(str) {
  // Good luck!
  var backwards = "";
  var forwards = str.replace(/ /g, "");
  forwards = forwards.replace(".", "");
  forwards = forwards.replace(/,/g, "");
  forwards = forwards.replace(/-/g, "");
  forwards = forwards.replace(/_/g, "");
  forwards = forwards.replace(/-/g, "");
  forwards = forwards.replace(/\//g, "");
  forwards = forwards.replace(/\(|\)/g, ""); Strip out open and closed brackets. Good regex checker - http://regexper.com/#%2F%5C(%7C%5C)%2Fg
  forwards = forwards.toLowerCase();
  backwards = forwards.split("").reverse().join("");
  //return forwards;
  if (forwards == backwards) {
    return true;  
  } else {
    return false;
  }
  
  //return true;
}

palindrome("0_0 (: /-\ :) 0-0");
--
Find the Longest Word in a String

function findLongestWord(str) {
  var strArray = str.split(" ");
  var strLength = 0;
  for (var i = 0; i < strArray.length; i ++) {
    if (strArray[i].length > strLength) {
      strLength = strArray[i].length;
    }
  }
  return strLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
--
Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  var newArray = [0,0,0,0];
  var largest = 0;
  for (var i =0; i < arr.length; i++) {
    for (var t=0; t < arr[i].length; t ++) {
      if (largest < arr[i][t]) {
        largest = arr[i][t];
      }
      newArray[i] = largest;
    }
    largest = 0;
  }
  arr = newArray;
  
  /*var arrayNumber;
  for (var i=0; i < arr.length; i ++) {
    arrayNumber = Math.max.apply(null, arr[i]);
    //return arrayNumber;
    for (var t = 0; t < arr[i].length; t ++) {
        //return arr[i][t];
        if (arr[i][t] != arrayNumber) {
          //return t;
          arr[i].splice(t, 1);
        }
      }
  }*/
  return arr;
}

largestOfFour([[40, 35, 37, 39], [13, 27, 18, 26], [40, 35, 37, 39], [1000, 1001, 857, 1]]);
--
Confirm the Ending

function repeat(str, num) {
  // repeat after me
  var testArray = [];
  if (num >= 0) {
    for(var i = 0; i < num; i ++) {
      testArray.push(str);
    }
    str = testArray.join("");
  } else {
    str = "";    
  }
  
  return str;
}

repeat("abc", 3);
--
Truncate a string 

function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num == str.length || num > str.length) {
    return str; 
  }
  else if (num < 3) {
    //return str.length;
    str = str.slice(0, num) + "...";
  } else {
    str = str.slice(0, num - 3) + "...";
  }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
--
Chunky Monkey

function chunk(arr, size) {
            // Break it up.
            var testArray = [];
                for (var i = 0; i < arr.length; i + size) {
                    var testArray2 = arr.splice(i, size);
                    testArray.push(testArray2);
                }                 
              return testArray;              
            }

chunk(["a", "b", "c", "d"], 2);
--
Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var testArray = arr.splice(0,howMany);
  
  return arr;
}

slasher([1, 2, 3], 2);
--
Mutations

function mutation(arr) {
  var string1 = arr[0].toLowerCase();
  var check = arr[1].toLowerCase();
  for (var i=0;i<check.length;i++) {
   if(string1.indexOf(check[i]) == -1) {
     return false;
   }   
  }
  return true;
}

mutation(["hello", "hello"]);
--
Falsy Bouncer

function bouncer(arr) {  
  var filtered = arr.filter(beatIt);
  return filtered;

  function beatIt(value){
    return Boolean(value);
  }
}
bouncer([false, null, 0, NaN, undefined, ""]);
--
Seek and Destroy

function destroyer(arr) {
    // Remove all the values
    var args = (arguments.length === 1?[arguments[0]]:Array.apply(null, arguments));
    var arrayOriginal = args[0];
    args.shift();
    var arrayParam = args;
    var arr2 = arrayOriginal.filter(removeDup);

    function removeDup(value, index, array) {
        var killIt = true;
        for (var z = 0; z < arrayParam.length; z++) {
            if (value == arrayParam[z]) {
                killIt = false;
            } 
        }
        return killIt;
    }
    return arr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
--
Where do I belong

function where(arr, num) {
    // Find my place in this sorted array.
    //var number = 0;
    var arr2 = arr.sort(function(a,b) {
      return a - b;
    });
    //return arr2;
    var index = 0;
    for (var i=0;i<arr2.length;i++) {
        if (num > arr[i]) {
            index = i +1;
        }
    }
    return index;
}

where([40, 60], 50);
--
Caesars Cipher

function rot13(str) { // LBH QVQ VG!
    var array = str.split("");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charCodeAt(0);
    }
    for (var x = 0; x < array.length; x++) {
        if (array[x] >= 65 && array[x] <= 91) {
            if (array[x] >= 65 && array[x] <= 77) {
                array[x] = array[x] + 13;
            } else {
                array[x] = array[x] - 13;
            }
        }
    }
    
    var final = String.fromCharCode.apply(null, array);
    return final;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
--
JQUERY - 
Get JSON with the jQuery getJSON Method

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function(){
      // Only change code below this line.
		$.getJSON("/json/cats.json", function(json) {
			$(".message").html(JSON.stringify(json));
		});      
      // Only change code above this line.
    });
  });
</script>
--
Convert JSON Data to HTML

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
		$.getJSON("/json/cats.json", function(json) {

        var html = "";
        // Only change code below this line.
		json.forEach(function(val) {
			var keys = Object.keys(val);
			html += "<div class = 'cat'>";
			keys.forEach(function(key) {
			html += "<b>" + key + "</b>: " + val[key] + "<br>";
			});
			html += "</div><br>";
		});        
    // Only change code above this line.

    $(".message").html(html);
    });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
   </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
--
Prefilter JSON

<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        // Only change code below this line.
        
		json = json.filter(function(val) {
			return (val.id !== 1);
		}); 
        
        // Only change code above this line.

        json.forEach(function(val) {

          html += "<div class = 'cat'>"

          html += "<img src = '" + val.imageLink + "'>"

          html += "</div>"

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
--
Sum All Numbers in a Range

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);
--
Diff Two Arrays

function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
--
Roman Numeral Converter

function convertToRoman(num) {
  var numerals = [1,4,5,9,10,40,50,90,100,400,500,900,1000,5000];
  var symbols = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M','ZZ'];
  var arrNew = [];
  var str = "";
    while (num >= 1) {
    for(var i =0; i < numerals.length; i ++) {
      if (num <= numerals[i]) {
        if (num < numerals[i]) {
          arrNew.push(symbols[i-1]);
          num = num - numerals[i-1];
          break;
        } else {
          arrNew.push(symbols[i]);
          num = num - numerals[i];
          break;
        }
     }
  }
    }
  
  str = arrNew.join('');
  return str;
  //return num;
}

convertToRoman(1004);
--
Where art thou 

function whereAreYou(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  //console.log("source keys are " + keys)
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //console.log(obj);
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}


whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
--
Search and Replace

function myReplace(str, before, after) {
  var testUpper = upper_case(before);
  if (testUpper) {
    after = capitalizeFirstLetter(after);
    str = str.replace(before, after);     
  } else {
    str = str.replace(before, after);     
  }


  //return str;
  return str;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
--
Pig Latin

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    // Find how many consonants before the firs vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

translatePigLatin("consonant");
--
DNA Pairing

function pairElement(str) {
  var result = [];
   for (var i = 0; i < str.length; i ++)  {
    var inner = [];
    var second = '';
    inner.push(str[i]);
    switch(str[i]) {
      case 'G':
        second = 'C';
      break;
      case 'C': 
        second = 'G';
      break;
      case 'T':
        second = 'A';
      break;
      case 'A':
        second = 'T';
      break;
    }
    inner.push(second);
    result.push(inner);
    }
  //return str;
  return result;
}

pairElement("GCG");
--
Missing letters

function fearNotLetter(str) {
  // Create our variables.
  var firstCharacter = str.charCodeAt(0);
  var valueToReturn = '';
  var secondCharacter = '';

  // Function to find the missing letters
  var addCharacters = function(a, b) {
    while (a - 1 > b) {
      b++;
      valueToReturn += String.fromCharCode(b);
    }

    return valueToReturn;
  };

  // Check if letters are missing in between.
  for (var index = 1; index < str.length; index++) {
    secondCharacter = str.charCodeAt(index);

    // Check if the diference in code is greater than one.
    if (secondCharacter - firstCharacter > 1) {
      // Call function to missing letters
      addCharacters(secondCharacter, firstCharacter);
    }

    // Switch positions
    firstCharacter = str.charCodeAt(index);
  }

  // Check whether to return undefined or the missing letters.
  if (valueToReturn === '')
    return undefined;
  else
    return valueToReturn;
}

fearNotLetter("yz");
--
Boo who

function booWho(bool) {
  if (typeof(bool) === "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(null);
--
Sorted Union

function uniteUnique(arr1, arr2, arr3) {
  for (var arg = 1; arg < arguments.length; arg ++) {
    arr1.push.apply(arr1, arguments[arg]);
  }
  //The Array.from() method creates a new Array instance from an array-like or iterable object.
  //The Set object lets you store unique values of any type, whether primitive values or object references.
  return Array.from(new Set(arr1));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
--
Convert HTML Entities

function convertHTML(str) {
  for (var i = 0 ; i < str.length; i ++) {
    console.log(str[i]);
    switch (str[i]) {
      case '&':
        //str[i] = "&​amp;";
        str = str.replace(str[i], "&amp;");
        break;
      case '<':
        str = str.replace(str[i], "&lt;");
        break;
      case '>':
        str = str.replace(str[i], "&gt;"); 
        break;
      case '\"':
        str = str.replace(str[i], "&quot;"); 
        break;
      case '\'':
        str = str.replace(str[i], "&apos;"); 
        break;
    }
  }
  return str;
}

convertHTML("Dolce & Gabbana");
--
Spinal Tap Case

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //remove spaces and underscore and replace with @.
  
  str = str.replace(/(\s\b|^)([a-z0-9-_])/, function(m){ return m.toUpperCase(); });
//console.log(str);

  str = str.replace(/[\s_]/g, "");

//console.log(str);
  var splitArray = str.split(/(?=[A-Z])/);
  console.log(splitArray);

  for( var i = 0; i < splitArray.length; i ++) {
    splitArray[i] = splitArray[i].replace(/[@]/, "");
    splitArray[i] = splitArray[i].toLowerCase();
    if (i < (splitArray.length - 1)) {
      splitArray[i] += "-";
    }
  }

  var str2 = splitArray.join('');

return str2;

}

spinalCase('This Is Spinal Tap');
--
Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return result;
}

sumFibs(4);
--
Sum All Primes

function sumPrimes(num) {
  var sumPrime = 0;
  for (var i = 2; i <= num; i ++) {
    if (isPrime(i)) {
      sumPrime += i;
    }
  }

return sumPrime;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(10)
--
Smallest Common Multiple

function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    return range.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

smallestCommons([1, 5]) 
--
Finders Keepers

function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; })
--
Steamroller

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  console.log(flattenedArray);
}

steamrollArray([1, [2], [3, [[4]]]]);
--
Binary Agents

function binaryAgent(str) {
  var testString = '';
  str.split(' ').map(function(bin) {  //map wil iterate over an array, str.split produces an array.
    testString += String.fromCharCode(parseInt(bin, 2));
  });

  console.log(testString);
  //return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
--
Everything Be True

function truthCheck(collection, pre) {
  // Is everyone being true?
  var result = true;
  collection.map(function(item) {
if (!item.hasOwnProperty(pre)) {
  result = false;
  } else {
    if(!item[pre]) result = false;
  }

  });
console.log(result);
  
}

truthCheck([{"single": "yes"}], "single");

..







