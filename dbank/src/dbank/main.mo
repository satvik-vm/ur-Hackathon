import Debug "mo:base/Debug";
import time "mo:base/Time";
import float "mo:base/Float";
import Array "mo:base/Array";
import Error "mo:base/Error";
import Principal "mo:base/Principal";


actor dBank{
	stable var currentValue: Float = 0;
	currentValue := 0;

	stable var startTime = time.now();
	// startTime := time.now();
	var endTime: Int = 0;
	stable var account: Text = "";
	stable var password: Text = "";


	var fd_num: Nat = 0;
	var fd_num_temp = 0;
	var num_of_fd = 10;	// total number of fd is 10
	let fd_amt: [var Float] = Array.init<Float>(num_of_fd, 0);
	let fd_end_time: [var Int] = Array.init<Int>(num_of_fd, 0);

	stable var name: Text = "";
	var age: Int = 0;

	let interestRateAccount = 1;	// 1% interest rate on account
	let interestRateFd = 5;		// 5% interst rate on FD

	public func constructor(__name: Text, __age: Int, __password: Text){
		var name_ans = setName(__name);
		var age_ans = setAge(__age); 
		var pass_ans = setPassword(__password);
		// var temp: async<$constructor__432> Principal = id();
		// account := Principal.toText(temp);
	};

	public func setName(__name : Text): async Int {
		if(name == ""){
			name := __name;
			return 0;
		}
		else{
			return -1;
		};
	};

	public query func getName(): async Text{
		return name;
	};

	public func setAge(__age: Int): async Int{
		if(age == 0){
			age := __age;
			return 0;
		}
		else{
			return -1;
		}
	};

	public query func getAge(): async Int{
		return age;
	};

	public func setPassword(__password: Text): async Int{
		if(password == ""){
			password := __password;
			return 0;
		}
		else return -1;
	};

	public query func getPassword(): async Text{
		return password;
	};

	public func deposit(amount: Float){
		try{
			currentValue += amount;
			Debug.print(debug_show(currentValue));
		}
		catch(err){
			Debug.print("error in deposit");
		}
		// return currentValue;
	};

	public func withdrawl(amount: Float): async Int{
		try{
			if(amount < currentValue){
				currentValue -= amount;
				Debug.print(debug_show(currentValue));
				return 0;
			}
			else{
				Debug.print("Insufficient funds");
				return -1;
			}
		}
		catch(err){
			Debug.print("error in withdrawl");
			return -2;
		}
	};

	public query func checkBalance(): async Float {
		return currentValue;
	};

	public func compound_interest(){
		let currentTimeNS = time.now();
		var startTime_temp = startTime;
		let timeElapsedS = (currentTimeNS - startTime_temp) / 1000000000;
		let timeElapsedMin = timeElapsedS / 60;
		currentValue *= (1 + (float.fromInt(interestRateAccount) / 100)) ** float.fromInt(timeElapsedMin);	// interest rate applied per minute
		startTime_temp := currentTimeNS;
	};

	public func fixed_deposit(amount: Float, timeFD: Int): async Int{
		var startFD = time.now();
		if(amount > currentValue){
			return -1;
		}
		else{
			endTime := startFD + (timeFD*60*1000000000);
			var amount_temp = amount * (1 + (float.fromInt(interestRateFd) / 100)) ** float.fromInt(timeFD);
			fd_amt[fd_num] := amount_temp;
			fd_end_time[fd_num] := endTime;
			var withdrawl_return = withdrawl(amount);
			fd_num += 1;
			fd_num_temp := fd_num;
			return 0;
		}
	};

	public query func check_fd(): async Int{
		return fd_num;
	};

	public shared (message) func whoami() : async Principal {
    	return message.caller;
  	};

	public func id() : async Principal {
    	return await whoami();
  	};

	public func withdraw_fd(): async Int{
		var i: Nat = 0;
		var num: Nat = 0;
		var temp = fd_num_temp;
		while(i < temp){
			if(fd_end_time[i] <= time.now() and fd_end_time[i] != 0){
				deposit(fd_amt[i]);
				fd_amt[i] := 0;
				fd_end_time[i] := 0;
				num += 1;
				fd_num -= 1;
			}
			else{
				Debug.print(debug_show(fd_end_time[i]));
				Debug.print(debug_show(time.now()));
			};
			i += 1;
		};
		return num;
	};
};