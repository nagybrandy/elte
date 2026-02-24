let bevásárlólista = {"tojás" : 3, 
                      "liszt" : 1, 
                      "zacskó" : 15, 
                      "sajt" : {
                        "trappista" : 2,
                        "cheddar" : 3
                      }, 
                      "tej" : ["piros", "kék"]
                    }

bevásárlólista.sajt.trappista += 1;
console.log(bevásárlólista)
