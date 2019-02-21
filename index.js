class BankAccount{
    constructor(balance, interestRate){
      this.balance = balance;
      this.interestRate = interestRate;
    }
    addInterest(){
      let compoundedInterest = this.balance / this.interestRate;
      this.balance += compoundedInterest;
      console.log(`This account has a $${this.balance} balance with interest.`); 
    }
  }
  
  class BankAccountWithFee extends BankAccount{
    constructor(balance, interestRate, fee){
      super(balance, interestRate);
      this.fee = fee;
    }
    applyFee(){
      this.balance -= this.fee;
      console.log(`$${this.balance} is your balance with interest after fees.`)
    }
  }
  
  let checking = new BankAccount(3000, 10);
  checking.addInterest();
  
  let savings = new BankAccountWithFee(1000, 5, 200);
  savings.addInterest();
  savings.applyFee();
  
  let nestEgg = new BankAccountWithFee(20000, 4, 800);
  nestEgg.addInterest();
  nestEgg.applyFee();