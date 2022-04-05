/*Develop an algorithm which inverses the longest crescent sequence in unsorted array 
of integers (ecrire un algorithme qui inverse la plus longue sequence croissante dans
un tableau non trié);
input : T=[2,3,4,15,16,17,0,0,-4,5,6,7,8,9,10,1,2]
output : [2,3,4,15,16,17,0,0,10,9,8,7,6,5,-4,1,2]    
*/
function inverse(arr,i,j){
    var fin = (j+i)/2;
    var temp ;
    for(var deb=i;deb<fin;deb++){
        temp = arr[deb];
        arr[deb]=arr[j-(deb-i)];
        arr[j-(deb-i)]=temp;
    }
    return arr;
}

function global(arr){
    let cmpt = 0 ; // this is a variable used to count 
    arrLengthCrescentSequence = [] ; // this array is used to store the lentgh of the different crescent sequence found in the initial array 
    arrIndexCrescentSequence = [] ; // this array is used to store the beginning index of the crescent sequence in the initial array
    let iMaxDeb , iMaxFin;   // beginning and last index of the max sequence
    for(var i = 0 ; i< arr.length;i++){ // we loop throw the given array
        if(arr[i]<arr[i+1]){
            if(cmpt == 0 ){
                arrIndexCrescentSequence.push(i); // we store the beginning index of the sequence in the array
            }
            cmpt++; // we increment because we are still on an crescent sequence 
        }else{
            if(cmpt!=0){
            arrLengthCrescentSequence.push(cmpt); // we store the length of the sequence 
            }
            cmpt = 0 ; // the count is to 0 to begin a new counting 
        }
    }
    iMaxDeb=arrLengthCrescentSequence.indexOf(Math.max(...arrLengthCrescentSequence)); // we get the index of the biggest length of the sequences
    iMaxFin=arrLengthCrescentSequence.indexOf(Math.max(...arrLengthCrescentSequence))+1;
    return inverse(arr,arrIndexCrescentSequence[iMaxDeb],arrIndexCrescentSequence[iMaxFin]-1) ; 
}

console.log(global([2,3,4,15,16,17,0,0,-4,5,6,7,8,9,10,1,2]));
