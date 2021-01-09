// Napisati funkciju koja prima string i vraća najveći broj uzastopno istih znakova utom stringu. Napisati funkciju `isti_znakovi`
function istiZnakovi(string1){
    let duzina = string1.length     
    let najveci_broj = 0
    let brojac = 0
    for (let i=0;i<duzina; i++){
        if(string1.charAt(i) == string1.charAt(i+1)) {   //Metoda charAt () vraća znak s navedenim indeksom u nizu.
            brojac++
        }
        else{
            if(brojac > najveci_broj) {
                najveci_broj=brojac+1
            }
            brojac = 0
        }    

    }
    return najveci_broj
}

console.log(istiZnakovi("baaaccd")) // → 3
console.log(istiZnakovi("ba2dll")) // → 2
