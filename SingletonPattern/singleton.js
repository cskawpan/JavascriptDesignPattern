var mySingleton = (function () { 

	// ค่า instance ที่เก็บไว้ใช้งาน
	var instance;
 
	//function ที่เป็นค่า instance ให้กับตัวแปล instance
	function init() 
	{
		//ตัวแปรแบบ private ซึ่งจะมีแต่ภายในที่เรียกใช้งานได้
		var privateVariable = "Im also private";
		var privateRandomNumber = Math.random();
		
		//method แบบ private ซึ่งจะมีแต่ภายในที่เรียกใช้งานได้
		function privateMethod()
		{
			console.log( "I am private method" );
		}
	 
		//class นี้จะ return เป็น object ที่อ้างอิง method และ ตัวแปร
		return {
			//method แบบ public ซึ่งภายนอกเรียกใช้งานได้
			publicMethod: function () {
				console.log( "The public can see me!" );
			},
			//ตัวแปรแบบ public ซึ่งภายนอกเรียกใช้งานได้
			publicProperty: "I am also public",
			//เรียกใช้งานตัวแปร private
			getRandomNumber: function() {
				return privateRandomNumber;
			}	
		};
	};
	
	//ส่วนของการ return ข้อมูลกลับของฟังชัน mySingleton
	return {
		//ส่วนนี้เมื่อมีการเรียกใช้งาน singleton จะทำการเช็คว่าค่า
		//instance ได้มีการกำหนดฟังชัน init ให้กับ instance หรือยัง ถ้ายังจะกำหนดให้ instance
		//ถ้ากำหนดแล้วจะใช้ค่า instance เดิมส่งให้
		getInstance: function () {
		  if ( !instance ) 
		  {
			instance = init();
		  }
		  return instance;
		}
	};
})();