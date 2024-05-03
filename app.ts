                      //boolean & bigint
            


let isMyNameKabir: Boolean = true;
let isDone: boolean = true;
let hasStarted: boolean = false;

hasStarted = false
//console.log(hasStarted)

function isDivisibleBy4And8(a: number): boolean {
    if (a % 4 == 0 || a % 6 == 0)
        return true
    
    else return false
}

//console.log(isDivisibleBy4And8(6));

 let bigNumber = (Number as any).MAX_SAFE_INTEGER
//let bigNumber: bigint = 9007199254740992n
//console.log(bigNumber);

// let anotherBigNumber = BigInt("90071992547409925")
//onsole.log(anotherBigNumber);

                       // Any & Unkown
let isFavNum:any = 6;
isFavNum="Kabir"
isFavNum=true
console.log(isFavNum)