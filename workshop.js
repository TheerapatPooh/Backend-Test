//หาค่ามากที่สุดในอาเรย์
//เขียนฟังก์ชันที่รับค่าเป็นอาเรย์ของตัวเลข และ return ค่าที่มากที่สุดในอาเรย์นั้น
function findMax(arr) {
    return Math.max(...arr);
}

//หาค่าน้อยที่สุดในอาเรย์
//เขียนฟังก์ชันที่รับค่าเป็นอาเรย์ของตัวเลข และ return ค่าที่น้อยที่สุดในอาเรย์นั้น
function findMin(arr) {
    return Math.min(...arr);
}

//นับจำนวนตัวอักษรในสตริง
//เขียนฟังก์ชันที่รับสตริง และ return จำนวนนับของตัวอักษรแต่ละตัว
function countStrChar(str) {
    let count = {};
    for (let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    return count;
}

//ผลรวมของตัวเลขในอาเรย์
//เขียนฟังก์ชันที่รับค่าเป็นอาเรย์ของตัวเลข และ return ผลรวมของตัวเลขทั้งหมดในอาเรย์นั้น
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

//เช็คว่าเป็นจำนวนเฉพาะหรือไม่
//เขียนฟังก์ชันที่รับตัวเลข และตรวจสอบว่าตัวเลขนั้นเป็นจำนวนเฉพาะหรือไม่
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//แปลงคำเป็นตัวพิมพ์ใหญ่
//เขียนฟังก์ชันที่รับสตริง และ return คำที่แปลงเป็นตัวพิมพ์ใหญ่ทุกตัว
function toUpperCase(str) {
    return str.toUpperCase();
}

//แปลงคำเป็นตัวพิมพ์เล็ก
//เขียนฟังก์ชันที่รับสตริง และ return คำที่แปลงเป็นตัวพิมพ์เล็กทุกตัว
function toLowwerCase(str) {
    return str.toLowwerCase();
}

//เช็คว่าเลขที่รับมาเป็นบวกหรือลบ
//เขียนฟังก์ชันที่รับตัวเลข และ return "Positive" ถ้าเป็นบวก หรือ "Negative" ถ้าเป็นลบ
function checkSign(num) {
    return num >= 0 ? "Positive" : "Negative";
}

//แปลงฟาเรนไฮต์เป็นเซลเซียส
//เขียนฟังก์ชันที่รับค่าอุณหภูมิในหน่วยฟาเรนไฮต์ และ return ค่าในหน่วยเซลเซียส
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//แปลงเซลเซียสเป็นเคลวิน
//เขียนฟังก์ชันที่รับค่าอุณหภูมิในหน่วยเซลเซียส และ return ค่าในหน่วยเคลวิน
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

//หาจำนวนครั้งที่คำซ้ำกันในสตริง
//เขียนฟังก์ชันที่รับค่าเป็นสตริง และคำที่ต้องการนับจำนวนครั้งคำซ้ำในสตริงนั้น
function countWord(str, word) {
    return str.split(word).length - 1;
}

//สุ่มตัวเลขในช่วงที่กำหนด
//จงเขียนฟังก์ชันที่รับตัวเลขสองตัวเป็นค่าเริ่มต้นและค่าสุดท้าย จากนั้น return ค่าตัวเลขแบบสุ่มในช่วงที่กำหนด
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//เขียนฟังก์ชันที่รับค่าเป็นสตริงเวลาแบบ 12 ชั่วโมง และแปลงเป็นเวลาแบบ 24 ชั่วโมง
//input:"07:05:45PM" Output: "19:05:45"
function convertTo24Hour(time12h) {
    const [time, modifier] = time12h.split(/(AM|PM)/);
    let [hours, minutes, seconds] = time.split(':');
    
    if (modifier === 'PM' && hours !== '12') {
        hours = String(Number(hours) + 12);
    } else if (modifier === 'AM' && hours === '12') {
        hours = '00';
    }

    return `${hours}:${minutes}:${seconds}`;
}

//Quick Sort เป็นอัลกอริธึมที่ใช้แนวคิดการแบ่งอาเรย์ออกเป็นสองส่วน โดยเลือกตัวเลขหนึ่งตัวเป็นตัวหมุด (pivot)
// จากนั้นแบ่งอาเรย์ออกเป็นสองส่วนคือส่วนที่มีค่ามากกว่าหรือน้อยกว่าตัวหมุด ทำเช่นนี้จนกว่าอาเรย์ทั้งหมดจะถูกจัดเรียง
//Input: [64, 25, 12, 22, 11, 90] Output: [11, 12, 22, 25, 64, 90]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;  // ถ้าอาเรย์มีความยาว <= 1 ให้คืนค่ากลับทันที (เป็นกรณีฐาน)
    }

    const pivot = arr[arr.length - 1];  // เลือก pivot ตัวสุดท้าย
    const left = [];
    const right = [];

    // แยกตัวเลขที่น้อยกว่าและมากกว่า pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // เรียกฟังก์ชันตัวเองแบบ recursive แล้วรวมค่าจากซ้าย, pivot, และขวา
    return [...quickSort(left), pivot, ...quickSort(right)];
}


// Bubble Sort จัดเรียงอาเรย์โดยใช้ 
//เป็นอัลกอริธึมการเรียงลำดับที่มีแนวคิดง่าย ๆ โดยทำงานโดยการ "เปรียบเทียบ" ค่าตัวเลขในอาเรย์แต่ละคู่และ "สลับตำแหน่ง" 
//กันถ้าตัวหน้ามีค่ามากกว่าตัวหลัง กระบวนการนี้จะทำซ้ำไปเรื่อย ๆ จนกว่าอาเรย์ทั้งหมดจะถูกจัดเรียงอย่างถูกต้อง
 //Input: [64, 34, 25, 12, 22, 11, 90] Output: [11, 12, 22, 25, 34, 64, 90]
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

//เขียนฟังก์ชันเพื่อรับสตริงและนับจำนวนคำในสตริงนั้น
function countWords(str) {
    if (str === null || str === '') {
        return 0;
    }
    const words = str.split(/\s+/);
    return words.length;
}
//example
// const sentence = "This is an example sentence";
// console.log("จำนวนคำ: " + countWords(sentence));  // Output: 5


//Linear Search ในภาษา JavaScript:
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // คืนค่าตำแหน่งของค่าเป้าหมาย
        }
    }
    return -1;  // คืนค่า -1 ถ้าไม่พบค่าเป้าหมาย
}

// ทดสอบฟังก์ชัน
// const array = [10, 23, 45, 70, 11, 15];
// const target = 45;
// const index = linearSearch(array, target);
// console.log(index !== -1 ? `Found at index ${index}` : "Not found");  // Output: Found at index 2


//Binary Search:
//คำอธิบาย: Binary Search เป็นการค้นหาข้อมูลที่อาเรย์ต้องถูก "เรียงลำดับ" ก่อน โดยจะใช้การแบ่งอาเรย์ออกเป็นสองส่วนและเปรียบเทียบค่ากลาง (middle) 
//กับเป้าหมาย (target) ถ้าค่ากลางน้อยกว่าเป้าหมาย จะค้นหาต่อในครึ่งขวา ถ้าค่ากลางมากกว่า จะค้นหาต่อในครึ่งซ้าย ทำแบบนี้จนกว่าจะพบหรือไม่พบ
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;  // คืนค่าตำแหน่งของค่าเป้าหมาย
        } else if (arr[middle] < target) {
            left = middle + 1;  // ค้นหาต่อในครึ่งขวา
        } else {
            right = middle - 1;  // ค้นหาต่อในครึ่งซ้าย
        }
    }

    return -1;  // คืนค่า -1 ถ้าไม่พบค่าเป้าหมาย
}

// ทดสอบฟังก์ชัน
// const sortedArray = [10, 23, 45, 70, 80, 95];
// const target2 = 70;
// const index2 = binarySearch(sortedArray, target2);
// console.log(index2 !== -1 ? `Found at index ${index2}` : "Not found");  // Output: Found at index 3


//Arr 2d
//Output ::
//    1
//   1 2
//  1 2 3
// 1 2 3 4
//1 2 3 4 5
function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        
        // เติมช่องว่างด้านหน้า
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }
        
        // เติมตัวเลข
        for (let k = 1; k <= i; k++) {
            str += k + ' ';
        }
        
        console.log(str);
    }
}

// ทดสอบฟังก์ชัน
// printPyramid(5);


//3d
//Output:

// ชั้นที่ 1:
//     1
// ชั้นที่ 2:
//    1
//   1 2
// ชั้นที่ 3:
//   1
//  1 2
// 1 2 3

function print3DPyramid(levels) {
    for (let level = 1; level <= levels; level++) {
        console.log(`ชั้นที่ ${level}:`);
        
        for (let row = 1; row <= level; row++) {
            let str = '';
            
            // เติมช่องว่างด้านหน้าเพื่อจัดรูปแบบพีระมิด
            for (let space = 1; space <= levels - row; space++) {
                str += ' ';
            }
            
            // เติมตัวเลขในแต่ละแถว
            for (let num = 1; num <= row; num++) {
                str += num + ' ';
            }
            
            console.log(str.trim());
        }
        console.log(); // เว้นบรรทัดระหว่างชั้น
    }
}

// ทดสอบฟังก์ชัน
// print3DPyramid(5);