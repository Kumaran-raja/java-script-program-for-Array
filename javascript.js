//1.array create and initial

let arr;
arr=[1,2,3,4,5,7];
result(arr);
function result(arr){
    for(let i=0;i<arr.length;i++){
        console.log("value is:",arr[i]);
    }
}


//2.maximum and minimum

let arr1=[1,2,4,5,6,9,3];
max_min(arr1);
function max_min(arr){
    let sort1=arr1.sort();
    console.log("minimum value is:",arr1[0]);
    console.log("maximum value is:",arr1[arr1.length-1]);
}


//3.checking array element
let arr2=[1,2,3,4,5,7];
let check=10;
check_value(arr2,check)
function check_value(arr2,check){
    for(let i=0;i<arr2.length;i++){
        if(arr[i]==check){
            console.log("Element is available")
            break;
        }else{
            console.log("Element cannot available")
        }
    }
}


//4.sort and reverse

let arr3=[3,6,2,8,1];
console.log("reverse array is :",arr3.reverse());
console.log("Sorted array is :",arr3.sort());

//5.equality of array

let arr_list1=["Apple","Orange","hello"];
let arr_list2=["hello","Apple","orange"];
let sort_arr1=arr_list1.sort();
let sort_arr2=arr_list2.sort();
let flag=0;
if(arr_list1.length!=arr_list2.length){
    console.log("Both arrays are not Equal");

}else{
    for(let i=0;i<arr_list1.length;i++){
        if(sort_arr1[i]!=sort_arr2[i]){
            flag=1;
        }
    }
    if(flag==0){
        console.log("Both arrays are Equal")
    }else{
        console.log("Both arrays are not Equal")
    }
}

//date:24/07/2024
 //1.merging the array
     let arr=[1,2,3,4,5];
     let arr2=[6,7,8,9,10]
     console.log(...arr,...arr2)

    //2.Array manipulate with Slice 
    let arr3=[1,2,3,4,5,6,7,8,9,0];
    console.log(arr3.slice(2,7))

    //3.array spreading

    const numbers = [1, 2, 3];
    console.log(...numbers);
    const solution= [...numbers, 4, 5, 6];
    console.log(solution);

    //4.checking element using includes

    const ser = [1, 2, 3, 4, 5];
    console.log(ser.includes(3)); // true
    console.log(ser.includes(6));

     //5.array with given length

     let length = 5;
    let newArray = Array.from({ length: length }, (v, i) => i + 1);
    console.log(newArray);

    let len = 5;
    let array = [];
    for (let i = 0; i < len; i++) {
    array.push(i * 2);
    }
    console.log(array);
