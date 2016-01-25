#Singleton Pattern
เป็นรูปแบบการกำหนดค่าที่ค่าเดียวในระบบ โดยหลักการทำงานเบื้องต้นของ singleton นั้นจะนำไปใช้ในการสร้าง instance class 
ขึ้นมาใช้งาน ซึ่ง instance นี้มีค่าเดียวในระบบ เมื่อมีการเรียกใช้งานจะเริ่มต้นโดยการตรวจสอบว่ามีการสร้าง instance ขึ้นมาใช้งาน
หรือยัง ถ้ายังไม่มีจะสร้างขึ้นมาใช้งาน และถ้ามีแล้วจะใช้ค่าเดิมส่งให้กับส่วนที่เรียกใช้งาน ตัว sigleton นั้นอาจจะนำไปใช้ในส่วนของค่าที่ไม่ค่อยมีการเปลี่ยนแปลงมาก 
และทุกส่วนสามารถเรียกใช้งานได้ เช่น ค่า config ของระบบ เป็นต้น
#Singleton ทำงานอย่างไร
จากไฟล์ singleton.js ทดสอบการทำงานโดยใช้คำสั่ง <br />
var singleA = mySingleton.getInstance(); <br />
var singleB = mySingleton.getInstance(); <br />
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true <br />
ผลลัพธ์ที่ได้จากจะเท่ากับ true เนื่องจากได้มีการ random ค่าตั้งแต่ singleA แล้วเมื่อมีการเรียกใช้งานที่ singleB จะใช้ค่าเดิมมากำหนดให้จึงทำให้ค่าที่ได้เท่ากัน
#อ้างอิง
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript