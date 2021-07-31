const RomanConverter = {
    fromRoman: (roman) => {
      if(typeof roman !== "string") throw new TypeError("not a string");
      if(roman.length < 1) throw new Error('an empty string is not a valid input');
      roman = roman.toUpperCase();
      if(roman.search(/[^MDCLXVID]/g) != -1) throw new Error('invalid string');
      const map = {IV:4,IX:9,XL:40,XC:90,CD:400,CM:900,I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
      let finalValue = 0;
      for (let i = 0; i < roman.length; i++) {
        const twoLetter = map[roman[i]+roman[i+1]];
        const oneLetter = map[roman[i]];
        if (twoLetter != null) {
          finalValue += twoLetter; i++; 
        }
        else if (oneLetter != null) finalValue += oneLetter;
        if(finalValue > 3999) throw new RangeError("The writing of number above 3999 was never standardized, and it is not a currently supported feature, read more on");
      }
      return finalValue;
    },
    toRoman: (value) => {
      if(value === 0) return ("Nulla. The romans did not have a letter representation of the number 0 (zero), read more on ");
      if(typeof value !== "number") throw new TypeError("not a number");
      if(value % 1 !== 0) throw new RangeError("not an integer");
      if(value < 0) throw new RangeError("not an integer");
      if(value > 3999) return "The writing of number above 3999 was never standardized, and it is not a currently supported feature"
      const romanNumeralValueMap = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
      let romanNumeral = '';
      while (value > 0) {
        for (const letter in romanNumeralValueMap) {
          if (romanNumeralValueMap[letter] <= value) {
            romanNumeral += letter;
            value -= romanNumeralValueMap[letter];
            break;
          }
        }
      }
      return romanNumeral;
    }
  };

  console.log(RomanConverter.toRoman(30));
  console.log(RomanConverter.fromRoman("X"));
  