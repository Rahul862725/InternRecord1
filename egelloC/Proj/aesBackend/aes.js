const { findOneAndReplace } = require("./models/user");

const SubByte =
    [
        ["63", "7C", "77", "7B", "F2", "6B", "6F", "C5", "30", "01", "67", "2B", "FE", "D7",
            "AB", "76"],
        ["CA", "82", "C9", "7D", "FA", "59", "47", "F0", "AD", "D4", "A2", "AF", "9C", "A4", "72", "C0"],
        ["B7", "FD", "93", "26", "36", "3F", "F7", "CC", "34", "A5", "E5", "F1", "71", "D8",
            "31", "15"],
        ["04", "C7", "23", "C3", "18", "96", "05", "9A", "07", "12", "80", "E2", "EB", "27", "B2",
            "75"],
        ["09", "83", "2C", "1A", "1B", "6E", "5A", "A0", "52", "3B", "D6", "B3", "29", "E3", "2F", "84"],
        ["53", "D1", "00", "ED", "20", "FC", "B1", "5B", "6A", "CB", "BE", "39", "4A", "4C", "58", "CF"],
        ["D0", "EF", "AA", "FB", "43", "4D", "33", "85", "45", "F9", "02", "7F", "50", "3C", "9F", "A8"],
        ["51", "A3", "40", "8F", "92", "9D", "38", "F5", "BC", "B6", "DA", "21", "10", "FF", "F3", "D2"],
        ["CD", "0C", "13", "EC", "5F", "97", "44", "17", "C4", "A7", "7E", "3D", "64", "5D",
            "19", "73"],
        ["60", "81", "4F", "DC", "22", "2A", "90", "88", "46", "EE", "B8", "14", "DE", "5E", "0B", "DB"],
        ["E0", "32", "3A", "0A", "49", "06", "24", "5C", "C2", "D3", "AC", "62", "91", "95",
            "E4", "79"],
        ["E7", "C8", "37", "6D", "8D", "D5", "4E", "A9", "6C", "56", "F4", "EA", "65", "7A", "AE", "08"],
        ["BA", "78", "25", "2E", "1C", "A6", "B4", "C6", "E8", "DD", "74", "1F", "4B", "BD", "8B", "8A"],

        ["70", "3E", "B5", "66", "48", "03", "F6", "0E", "61", "35", "57", "B9", "86", "C1", "1D", "9E"],
        ["E1", "F8", "98", "11", "69", "D9", "8E", "94", "9B", "1E", "87", "E9", "CE", "55", "28", "DF"],
        ["8C", "A1", "89", "0D", "BF", "E6", "42", "68", "41", "99", "2D", "0F", "B0", "54",
            "BB", "16"]
    ];
const InvSubByte =
    [
        ["52", "09", "6A", "D5", "30", "36", "A5", "38", "BF", "40", "A3", "9E", "81", "F3", "D7", "FB"],
        ["7C", "E3", "39", "82", "9B", "2F", "FF", "87", "34", "8E", "43", "44", "C4", "DE", "E9", "CB"],
        ["54", "7B", "94", "32", "A6", "C2", "23", "3D", "EE", "4C", "95", "0B", "42", "FA", "C3", "4E"],
        ["08", "2E", "A1", "66", "28", "D9", "24", "B2", "76", "5B", "A2", "49", "6D", "8B",
            "D1", "25"],
        ["72", "F8", "F6", "64", "86", "68", "98", "16", "D4", "A4", "5C", "CC", "5D", "65",
            "B6", "92"],
        ["6C", "70", "48", "50", "FD", "ED", "B9", "DA", "5E", "15", "46", "57", "A7", "8D",
            "9D", "84"],
        ["90", "D8", "AB", "00", "8C", "BC", "D3", "0A", "F7", "E4", "58", "05", "B8", "B3", "45", "06"],
        ["D0", "2C", "1E", "8F", "CA", "3F", "0F", "02", "C1", "AF", "BD", "03", "01", "13", "8A", "6B"],
        ["3A", "91", "11", "41", "4F", "67", "DC", "EA", "97", "F2", "CF", "CE", "F0", "B4",
            "E6", "73"],
        ["96", "AC", "74", "22", "E7", "AD", "35", "85", "E2", "F9", "37", "E8", "1C", "75", "DF", "6E"],
        ["47", "F1", "1A", "71", "1D", "29", "C5", "89", "6F", "B7", "62", "0E", "AA", "18", "BE", "1B"],
        ["FC", "56", "3E", "4B", "C6", "D2", "79", "20", "9A", "DB", "C0", "FE", "78", "CD", "5A", "F4"],
        ["1F", "DD", "A8", "33", "88", "07", "C7", "31", "B1", "12", "10", "59", "27", "80", "EC", "5F"],
        ["60", "51", "7F", "A9", "19", "B5", "4A", "0D", "2D", "E5", "7A", "9F", "93", "C9", "9C", "EF"],
        ["A0", "E0", "3B", "4D", "AE", "2A", "F5", "B0", "C8", "EB", "BB", "3C", "83", "53", "99", "61"],
        ["17", "2B", "04", "7E", "BA", "77", "D6", "26", "E1", "69", "14", "63", "55", "21", "0C", "7D"]
    ];
const ETable =
    [
        ["01", "03", "05", "0F", "11", "33", "55", "FF", "1A", "2E", "72", "96", "A1", "F8", "13",
            "35"],

        ["5F", "E1", "38", "48", "D8", "73", "95", "A4", "F7", "02", "06", "0A", "1E", "22", "66", "AA"],
        ["E5", "34", "5C", "E4", "37", "59", "EB", "26", "6A", "BE", "D9", "70", "90", "AB",
            "E6", "31"],
        ["53", "F5", "04", "0C", "14", "3C", "44", "CC", "4F", "D1", "68", "B8", "D3", "6E", "B2", "CD"],
        ["4C", "D4", "67", "A9", "E0", "3B", "4D", "D7", "62", "A6", "F1", "08", "18", "28",
            "78", "88"],
        ["83", "9E", "B9", "D0", "6B", "BD", "DC", "7F", "81", "98", "B3", "CE", "49", "DB", "76", "9A"],
        ["B5", "C4", "57", "F9", "10", "30", "50", "F0", "0B", "1D", "27", "69", "BB", "D6", "61 ", "A3"],
        ["FE", "19", "2B", "7D", "87", "92", "AD", "EC", "2F", "71", "93", "AE", "E9", "20",
            "60", "A0"],
        ["FB", "16", "3A", "4E", "D2", "6D", "B7", "C2", "5D", "E7", "32", "56", "FA", "15", "3F", "41"],
        ["C3", "5E", "E2", "3D", "47", "C9", "40", "C0", "5B", "ED", "2C", "74", "9C", "BF", "DA", "75"],
        ["9F", "BA", "D5", "64", "AC", "EF", "2A", "7E", "82", "9D", "BC", "DF", "7A", "8E", "89", "80"],
        ["9B", "B6", "C1", "58", "E8", "23", "65", "AF", "EA", "25", "6F", "B1", "C8", "43",
            "C5", "54"],
        ["FC", "1F", "21", "63", "A5", "F4", "07", "09", "1B", "2D", "77", "99", "B0", "CB", "46", "CA"],
        ["45", "CF", "4A", "DE", "79", "8B", "86", "91", "A8", "E3", "3E", "42", "C6", "51", "F3", "0E"],
        ["12", "36", "5A", "EE", "29", "7B", "8D", "8C", "8F", "8A", "85", "94", "A7", "F2",
            "0D", "17"],
        ["39", "4B", "DD", "7C", "84", "97", "A2", "FD", "1C", "24", "6C", "B4", "C7", "52",
            "F6", "01"]

    ];
const LTable =
    [["00", "00", "19", "01", "32", "02", "1A", "C6", "4B", "C7", "1B", "68", "33", "EE",
        "DF", "03"],
    ["64", "04", "E0", "0E", "34", "8D", "81", "EF", "4C", "71", "08", "C8", "F8", "69", "1C", "C1"],
    ["7D", "C2", "1D", "B5", "F9", "B9", "27", "6A", "4D", "E4", "A6", "72", "9A", "C9", "09", "78"],
    ["65", "2F", "8A", "05", "21", "0F", "E1", "24", "12", "F0", "82", "45", "35", "93", "DA", "8E"],
    ["96", "8F", "DB", "BD", "36", "D0", "CE", "94", "13", "5C", "D2", "F1", "40", "46",
        "83", "38"],
    ["66", "DD", "FD", "30", "BF", "06", "8B", "62", "B3", "25", "E2", "98", "22", "88", "91",
        "10"],

    ["7E", "6E", "48", "C3", "A3", "B6", "1E", "42", "3A", "6B", "28", "54", "FA", "85", "3D", "BA"],
    ["2B", "79", "0A", "15", "9B", "9F", "5E", "CA", "4E", "D4", "AC", "E5", "F3", "73 ", "A7", "57"],
    ["AF", "58", "A8", "50", "F4", "EA", "D6", "74", "4F", "AE", "E9", "D5", "E7", "E6", "AD", "E8"],
    ["2C", "D7", "75", "7A", "EB", "16", "0B", "F5", "59", "CB", "5F", "B0", "9C", "A9", "51", "A0"],
    ["7F", "0C", "F6", "6F", "17", "C4", "49", "EC", "D8", "43", "1F", "2D", "A4", "76", "7B", "B7"],
    ["CC", "BB", "3E", "5A", "FB", "60", "B1", "86", "3B", "52", "A1", "6C", "AA", "55", "29", "9D"],
    ["97", "B2", "87", "90", "61", "BE", "DC", "FC", "BC", "95", "CF", "CD", "37", "3F", "5B", "D1"],
    ["53", "39", "84", "3C", "41", "A2", "6D", "47", "14", "2A", "9E", "5D", "56", "F2", "D3", "AB"],
    ["44", "11", "92", "D9", "23", "20", "2E", "89", "B4", "7C", "B8", "26", "77", "99", "E3", "A5"],
    ["67", "4A", "ED", "DE", "C5", "31", "FE", "18", "0D", "63", "8C", "80", "C0", "F7",
        "70", "07"]

    ];
const Constant =
    [
        ["02", "03", "01", "01"],
        ["01", "02", "03", "01"],
        ["01", "01", "02", "03"],
        ["03", "01", "01", "02"],
    ];
const InvConstant =
    [
        ["0E", "0B", "0D", "09"],
        ["09", "0E", "0B", "0D"],
        ["0D", "09", "0E", "0B"],
        ["0B", "0D", "09", "0E"]
    ];

const RCon = [
    "01", "02", "04", "08", "10", "20", "40", "80", "1B", "36"
];

let c=0
const binary = (n) => {
    
    let st = ""; 
  
    while (n >0) {
      let it =n%2
        st = String.fromCharCode( it + 48) + st; 
        
        n = Math.floor(n/2);
   
    }
    n = st.length;
    for (let i = 0; i < (8 - n); i++) {
        st = '0' + st;
    }

    return st;
}

const decimal = (st) => {
    let sum = 0, n = st.length; 
  
    for (let i = n - 1; i >= 0; i--) {
        sum +=Math.pow(2, (n - 1 - i)) * (st[i].charCodeAt(0) - 48);
    }
    
    return sum;
}

const HexaToBinary = (hex) => {
    if (hex == '0') return "0000"; else if (hex == '1') return "0001"; else if (hex == '2') return "0010"; else if (hex == '3') return "0011"; else if (hex == '4') return "0100"; else if (hex == '5') return "0101"; else if (hex == '6') return "0110"; else if (hex == '7') return "0111"; else if (hex == '8') return "1000"; else if (hex == '9')

        return "1001"; else if (hex == 'A') return "1010"; else if (hex == 'B') return "1011"; else if (hex == 'C') return "1100"; else if (hex == 'D') return "1101"; else if (hex == 'E') return "1110"; else if (hex == 'F') return "1111"; else
            return "1111";
}
const convertHex = (hex) => {
    if (hex == "0000") return "0";
    else if (hex == "0001") return "1";
    else if (hex == "0010") return "2";
    else if (hex == "0011") return "3";
    else if (hex == "0100") return "4";
    else if (hex == "0101") return "5";
    else if (hex == "0110") return "6";
    else if (hex == "0111") return "7";
    else if (hex == "1000") return "8";
    else if (hex == "1001") return "9";
    else if (hex == "1010") return "A";
    else if (hex == "1011") return "B";
    else if (hex == "1100")

        return "C";
    else if (hex == "1101") return "D";
    else if (hex == "1110") return "E";
    else if (hex == "1111") return "F";
    else
        return "F";
}
const prlet = (va) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            process.stdout.write(convertHex(va[i][j].substr(0, 4)) + convertHex(va[i][j].substr(4, 4)) + " ")
        }
        console.log(" ")

    }
    console.log("\n\n")

}

const dynamicBox = (state,key) => {
    let numberMap = new Map()
    let lookup = []
    let newSBOX =[]
    for(let i=0;i<16;i++)
    {
        for(let j=0;j<16;j++){
        lookup[i]=[]
        newSBOX[i] =[]
        }
        for(let j=0;j<16;j++)
        {
            lookup[i][j] =-1;
            newSBOX[i][j] = SubByte[i][j]
        }
    }
    let l=0,m=0;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            let dec = decimal(key[i][j])
            let k=0;
            while(k<16)
            {
                if(!numberMap.has(dec%256))
                {
                    lookup[l][m] = dec%256
                    numberMap[dec%256]++
                    if(m>=15)
                    {
                        m=-1
                        l++
                    }
                    m++
                    k++
                }
               dec++
            }
        }
    }

    for(let i=0;i<16;i++)
    {
        for(let j=0;j<16;j++)
        {
            
            let ii = Math.floor(lookup[i][j]/16)
            let jj = Math.floor(lookup[i][j]%16)
          
            let temp = newSBOX[ii][jj]
            newSBOX[ii][jj] = newSBOX[i][j]
            newSBOX[i][j] = temp
        }
    
    }

    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let st = state[i][j];
            let row = decimal(st.substr(0, 4)); 
            let col = decimal(st.substr(4, 4)); 
            st = newSBOX[row][col];
             
            state[i][j] = HexaToBinary(st[0]) + HexaToBinary(st[1]);
        
        }
    }
    return state
}
const decimalToHex = (num) =>{
    if(num<=9) return num.toString()
    else if(num==10) return "A"
    else if(num == 11) return "B"
    else if(num == 12) return "C"
    else if(num == 13) return "D"
    else if(num == 14) return "E"
    else if(num == 15) return "F"
}

const inverseDynamicBox = (state,key) => {
    let numberMap = new Map()
    let lookup = []
    let newSBOX =[]
    let invNewSBOX = []
    for(let i=0;i<16;i++)
    {
        for(let j=0;j<16;j++){
        lookup[i]=[]
        newSBOX[i] =[]
        invNewSBOX[i] = []
        }
        for(let j=0;j<16;j++)
        {
            lookup[i][j] =-1;
            newSBOX[i][j] = SubByte[i][j]
            
        }
    }
    let l=0,m=0;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            let dec = decimal(key[i][j])
            let k=0;
            while(k<16)
            {
                if(!numberMap.has(dec%256))
                {
                    lookup[l][m] = dec%256
                    numberMap[dec%256]++
                    if(m>=15)
                    {
                        m=-1
                        l++
                    }
                    m++
                    k++
                }
               dec++
            }
        }
    }

    for(let i=0;i<16;i++)
    {
        for(let j=0;j<16;j++)
        {
           
            let ii = Math.floor(lookup[i][j]/16)
            let jj = Math.floor(lookup[i][j]%16)
            let temp = newSBOX[ii][jj]
            newSBOX[ii][jj] = newSBOX[i][j]
            newSBOX[i][j] = temp
        }
     
    }

    for(let i=0;i<16;i++)
    {
        for(let j=0; j<16; j++)
        {   let st = newSBOX[i][j];
           
            let row = decimal(HexaToBinary(st[0])); 
            let col = decimal(HexaToBinary(st[1])); 
            let put = decimalToHex(i)+decimalToHex(j)
            
            invNewSBOX[row][col] = put
        }
      
    }
    
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let st = state[i][j];
            let row = decimal(st.substr(0, 4)); 
            let col = decimal(st.substr(4, 4)); 
            st = invNewSBOX[row][col];
   
            state[i][j] = HexaToBinary(st[0]) + HexaToBinary(st[1]);
            
        }
    }
    return state

     
    return state
}

const subByte = (state) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let st = state[i][j];
            let row = decimal(st.substr(0, 4)); 
            let col = decimal(st.substr(4, 4)); 
            st = SubByte[row][col];
            
            state[i][j] = HexaToBinary(st[0]) + HexaToBinary(st[1]);
            
        }
    }
    return state
}
const invSubByte = (state) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let st = state[i][j];

            let row = decimal(st.substr(0, 4)); 
            let col = decimal(st.substr(4, 4)); 
            st = InvSubByte[row][col];
            state[i][j] = HexaToBinary(st[0]) + HexaToBinary(st[1]);
        }
    }
    return state
}
const leftShift = (state) => {
    for (let i = 1; i < 4; i++) {
        let tr = [];
        for (let j = 0; j < i; j++) {
            tr.push(state[i][j]);
        }
        for (let j = 0; j < 4 - i; j++) {
            state[i][j] = state[i][j + i];
        }
        let k = 0;
        for (let j = 4 - i; j < 4; j++) {
            state[i][j] = tr[k]; k++;
        }
    }
    return state
}
const rightShift = (state) => {
   
    for (let i = 3; i > 0; i--) {
        let tr = [];
        for (let j = 3; j >= 4 - i; j--) {
            tr.push(state[i][j]);
        }
        for (let j = 3; j >= i; j--) {
            state[i][j] = state[i][j - i];
        }
        let k = 0;
        for (let j = i - 1; j >= 0; j--) {
            state[i][j] = tr[k]; k++;
        }
    }
 
    return state
}
const exor = (st1, st2) => {
    let str = "";
    for (let i = 0; i < st1.length; i++) {
        if (st1[i] === st2[i]) str += '0';
        else str += '1';
    }
    return str;
}

const multiplication = (st1, st2) => {
    let r1 = decimal(st1.substr(0, 4)); 
    let c1 = decimal(st1.substr(4, 4)); 
    let r2 = decimal(st2.substr(0, 4)); 
    let c2 = decimal(st2.substr(4, 4));
    if ((r1 == 0 && c1 == 0) || (r2 == 0 && c2 == 0)) {
        return "00000000";
    }

    let s1 = LTable[r1][c1]; let s2 = LTable[r2][c2]; 
    let final = "";

    if ((decimal(HexaToBinary(s1[0]) + HexaToBinary(s1[1])) + decimal(HexaToBinary(s2[0]) + HexaToBinary(s2[1]))) > 255) {
        let va = decimal(HexaToBinary(s1[0]) + HexaToBinary(s1[1])) + decimal(HexaToBinary(s2[0]) + HexaToBinary(s2[1])) - 255;
        final = binary(va);
    }
    else {

        final = binary(decimal(HexaToBinary(s1[0]) + HexaToBinary(s1[1])) + decimal(HexaToBinary(s2[0]) + HexaToBinary(s2[1])));
    }

    r1 = decimal(final.substr(0, 4)); 
    c1 = decimal(final.substr(4, 4));
     final = ETable[r1][c1];
    final = HexaToBinary(final[0]) + HexaToBinary(final[1]); 
    return final;
}


const mixColumn = (st1) => {
    let state = DimensionArray(4,4,0)
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            state[i][j] =st1[i][j]
        }
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let ex = "00000000"; 
            for (let k = 0; k < 4; k++) {
                let s1 = Constant[j][k]; 
                ex = exor(multiplication(HexaToBinary(s1[0]) + HexaToBinary(s1[1]), state[k][i]), ex);
            }
            st1[j][i] = ex;
        }
    }
    return st1
}



const invMixColumn = (st1) => {
    let state = DimensionArray(4,4,0)
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            state[i][j] =st1[i][j]
        }
    }
    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 4; j++) {
            let ex = "00000000"; 
            for (let k = 0; k < 4; k++) {
                let s1 = InvConstant[j][k];

                ex = exor(multiplication(HexaToBinary(s1[0]) + HexaToBinary(s1[1]), state[k][i]), ex);
                 
            }
            st1[j][i] = ex;
        }
    }
    return st1;
}

const giveT = (st) => {
    let st1 = st[0]; 
    for (let i = 0; i < 3; i++) {
        st[i] = st[i + 1];
    }
    st[3] = st1;
    for (let i = 0; i < 4; i++) {
        let row = decimal(st[i].substr(0, 4)); 
        let col = decimal(st[i].substr(4, 4)); 
        let str = SubByte[row][col];
        st[i] = HexaToBinary(str[0]) + HexaToBinary(str[1]);
    }
    st[0] = exor(st[0], HexaToBinary(RCon[c][0]) + HexaToBinary(RCon[c][1]));
    return st;
}

const invGiveT = (st) => {
    let st1 = st[0]; for (let i = 0; i < 3; i++) {
        st[i] = st[i + 1];
    }
    st[3] = st1;
    console.log(st)
    for (let i = 0; i < 4; i++) {
        let row = decimal(st[i].substr(0, 4)); let col = decimal(st[i].substr(4, 4)); 
        let str = InvSubByte[row][col];
        st[i] = HexaToBinary(str[0]) + HexaToBinary(str[1]);

    }
    st[0] = exor(st[0], HexaToBinary(RCon[c][0]) + HexaToBinary(RCon[c][1]));

    return st;
}
const keyGenration = (key1) => {
    let last = [];
    let key = key1.slice()
    for (let i = 0; i < 4; i++) {
        last.push(key[i][3]);
    }
    last = giveT(last);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++){
            last[j] = exor(key[j][i], last[j]);
        }
        for (let j = 0; j < 4; j++) {
            key[j][i] = last[j];
        }
    }
    return key;

}
 
const addRoundKey = (state, key) => {
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            state[i][j] = exor(state[i][j], key[i][j]);
        }
    }

     return state
}

const Round = (state, key) => {
    state = dynamicBox(state,key)
    state = subByte(state.slice()); 
 
    state = leftShift(state.slice()); 
 
    state = mixColumn(state.slice()); 
 
    state = addRoundKey(state.slice(), key.slice());
 
    return state
}
const invRound = (state, key,key1) => {
    state = rightShift(state.slice());
   
    state = invSubByte(state.slice()); 
    state = inverseDynamicBox(state,key1)
 
    state = addRoundKey(state.slice(), key.slice());
 
     state = invMixColumn(state.slice()); 
    
    return state

}

const Encrypt = (state, keys) => {
   console.log("Encryption")
 
   state = addRoundKey(state.slice(), keys[0]); 
 
    for (let i = 0; i < 9; i++) {
     
       state = Round(state.slice(), keys[i+1]);

    }
 
    state = dynamicBox(state,keys[10])
    state = subByte(state.slice());
    
    state = leftShift(state.slice());
   
    state = addRoundKey(state.slice(), keys[10]);
    
    return  state
}
const Decryption = (state, keys) => {
    console.log("Decrypt matrix\n\n")
 
    state = addRoundKey(state.slice(), keys[10]);
    
 
    for (let i = 0; i < 9; i++) {
 
        state = invRound(state.slice(), keys[9-i], keys[9-i+1]);
    }

    state = rightShift(state.slice());
 
    state = invSubByte(state.slice());
    state = inverseDynamicBox(state,keys[1])
 
    state =addRoundKey(state.slice(), keys[0]);
 
    return state;

}

const  DimensionArray =(a, b, it) =>{
    let arr = [];
  
  
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }
     
   if(it!=0){
 
    let arr1 = []
    for(let i=0;i<it;i++)
    {
        arr1[i]  = arr
    }
    return arr1;
     
}
    return arr;
}

const copyArray =(data )=>{
    let arr = DimensionArray(4,4,0)
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            arr[i][j] = data[i][j];
        }
    }
    return arr;
}
const getState = (data)=>{
   let state = DimensionArray(4,4,0)
   let k=0
   for( let i=0;i<4;i++)
   {
    for(let j=0;j<4;j++)
    {
        state[j][i] = binary(data[k].charCodeAt(0))
        k++
    }
   }
   return state

}

const getText = (data)=>{
    let text = ""
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            text+= String.fromCharCode(decimal(data[j][i]))
        }
    }
    return text
}
const aesEncy1 = (msg, key,iv) => {
 c=0
 
    console.log("come")
    let keyArr = DimensionArray(4,4,0)
    let k=0;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            keyArr[j][i] = binary(key[k].charCodeAt(0))
          
            k++;
        }
 
    }

    console.log("come")
    let keys = []
    iv=key
    keys.push(copyArray(keyArr))
     
    for( let i=1;i<11;i++)
    {
        keyGenration(keyArr.slice(0)) 
     
         keys.push(copyArray(keyArr))
          
         c++;
    }
   

    while(msg.length%16!=0)
    {
        msg+=' '
    }
    console.log(msg.length)
    let encData =""
    for(let i=0;i<msg.length/16;i++)
    {
        let data = msg.substr(i*16,16)
        console.log(data)
        console.log(data.length)
        let state1 = getState(data)
 
        let keys1 = new Array()
        keys1 = keys
        let state= Encrypt(state1.slice(), keys1.slice())
        encData+=getText(state)
        console.log("Data ", encData)
       
    }
    
    

    return encData
}

const aesDec1 = (msg, key,iv) => {
    c=0
 
    let keyArr = DimensionArray(4,4,0)
    let k=0;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            keyArr[j][i] = binary(key[k].charCodeAt(0))
            k++;
     
        }
    }
    let keys =  []
    keys.push(copyArray(keyArr))
    for( let i=1;i<11;i++)
    {
        keyArr = keyGenration(keyArr);
        keys.push(copyArray(keyArr))
         c++;
    }
    iv =key
    
    
    let decData =""
    for(let i=0;i<msg.length/16;i++)
    {
        let data = msg.substr(i*16,16)
        let state1 = getState(data)
         
        let state= Decryption(state1, keys)
        decData+=getText(state)
        
    }
 
  return decData
}
module.exports= { aesEncy1, aesDec1 }