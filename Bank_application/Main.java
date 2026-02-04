import java.util.*;

interface BankOperations {
    void deposit(double amount);
    void withdraw(double amount);
    double calculateInterest(int tenure);
    void checkBalance();
}

abstract class Account implements BankOperations {

    private int accountId;
    private String holderName;
    private String accountType;
    private String purpose;
    protected double balance;

    public Account(int accountId, String holderName,
                   String accountType, String purpose, double balance) {
        this.accountId = accountId;
        this.holderName = holderName;
        this.accountType = accountType;
        this.purpose = purpose;
        this.balance = balance;
    }

    // Encapsulation
    public int getAccountId() { return accountId; }
    public String getHolderName() { return holderName; }
    public String getAccountType() { return accountType; }
    public String getPurpose() { return purpose; }

    protected double getInterestRate(int tenure) {
        if (tenure == 1) return 0.01;
        else if (tenure == 2) return 0.03;
        else if (tenure == 3) return 0.05;
        else return 0.07;
    }

    public void checkBalance() {
        System.out.println("Balance: Rs." + balance);
    }

    public abstract double calculateInterest(int tenure);
}


class SavingsAccount extends Account {

    public SavingsAccount(int id, String name, String purpose, double balance) {
        super(id, name, "Savings", purpose, balance);
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Rs. " + amount + " deposited");
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Rs. " + amount + " withdrawn");
        } else {
            System.out.println("Insufficient balance");
        }
    }

    public double calculateInterest(int tenure) {
        return balance * getInterestRate(tenure);
    }
}


class FixedDepositAccount extends Account {

    public FixedDepositAccount(int id, String name, String purpose, double balance) {
        super(id, name, "Fixed Deposit", purpose, balance);
    }

    public void deposit(double amount) {
        System.out.println("Deposit not allowed in FD");
    }

    public void withdraw(double amount) {
        System.out.println("Withdrawal not allowed before maturity");
    }

    public double calculateInterest(int tenure) {
        return balance * getInterestRate(tenure) * tenure;
    }
}



class Bank {

    private ArrayList<Account> accounts = new ArrayList<>();

    // Create Account (with duplicate ID check)
    public void createAccount(Account account) {

        if (findAccount(account.getAccountId()) != null) {
            System.out.println("Account creation failed!");
            System.out.println("Account ID already exists.");
            return;
        }

        accounts.add(account);
        System.out.println("Account created successfully. ID: "
                + account.getAccountId());
    }

    public void deleteAccount(int accountId) {
        Account acc = findAccount(accountId);
        if (acc != null) {
            accounts.remove(acc);
            System.out.println("Account deleted successfully.");
        } else {
            System.out.println("Account not found.");
        }
    }

    public Account findAccount(int accountId) {
        for (Account acc : accounts) {
            if (acc.getAccountId() == accountId)
                return acc;
        }
        return null;
    }


    // Display Account
    public void displayAccount(int accountId) {
        Account acc = findAccount(accountId);
        if (acc != null) {
            System.out.println("ID: " + acc.getAccountId());
            System.out.println("Name: " + acc.getHolderName());
            System.out.println("Type: " + acc.getAccountType());
            System.out.println("Purpose: " + acc.getPurpose());
        } else {
            System.out.println("Account not found.");
        }
    }
}



public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Bank bank = new Bank();
        int choice;

        do {
            System.out.println("\n========= BANKING APPLICATION =========");
            System.out.println("1. Create Bank Account");
            System.out.println("2. Delete Bank Account");
            System.out.println("3. Deposit Amount");
            System.out.println("4. Withdraw Amount");
            System.out.println("5. Check Balance");
            System.out.println("6. Calculate Interest");
            System.out.println("7. Display Account");
            System.out.println("8. Exit");
            System.out.print("Enter your choice: ");

            choice = sc.nextInt();

            switch (choice) {

                case 1:
                    System.out.print("Enter Account ID: ");
                    int id = sc.nextInt();

                    System.out.print("Enter Name: ");
                    sc.nextLine(); // consume newline
                    String name = sc.nextLine();

                    System.out.print("Enter Account Purpose: ");
                    String purpose = sc.nextLine();

                    System.out.print("Enter Initial Balance: ");
                    double bal = sc.nextDouble();

                    System.out.print("Account Type (1-Savings, 2-Fixed Deposit): ");
                    int type = sc.nextInt();

                    Account acc;
                    if (type == 1) {
                        acc = new SavingsAccount(id, name, purpose, bal);
                    } else {
                        acc = new FixedDepositAccount(id, name, purpose, bal);
                    }

                    bank.createAccount(acc);
                    break;

                case 2:
                    System.out.print("Enter Account ID to delete: ");
                    int delId = sc.nextInt();
                    bank.deleteAccount(delId);
                    break;

                case 3:
                    System.out.print("Enter Account ID: ");
                    int depId = sc.nextInt();
                    Account depAcc = bank.findAccount(depId);

                    if (depAcc != null) {
                        System.out.print("Enter Deposit Amount: ");
                        double amt = sc.nextDouble();
                        depAcc.deposit(amt);
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;

                case 4:
                    System.out.print("Enter Account ID: ");
                    int witId = sc.nextInt();
                    Account witAcc = bank.findAccount(witId);

                    if (witAcc != null) {
                        System.out.print("Enter Withdrawal Amount: ");
                        double amt = sc.nextDouble();
                        witAcc.withdraw(amt);
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;

                case 5:
                    System.out.print("Enter Account ID: ");
                    int balId = sc.nextInt();
                    Account balAcc = bank.findAccount(balId);

                    if (balAcc != null) {
                        balAcc.checkBalance();
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;

                case 6:
                    System.out.print("Enter Account ID: ");
                    int intId = sc.nextInt();
                    Account intAcc = bank.findAccount(intId);

                    if (intAcc != null) {
                        System.out.print("Enter tenure (months): ");
                        int months = sc.nextInt();
                        System.out.println("Interest: Rs." +
                                intAcc.calculateInterest(months));
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;

                case 7:
                    System.out.print("Enter Account ID: ");
                    int disId=sc.nextInt();
                    bank.displayAccount(disId);
                    break;

                case 8:
                    System.out.println("Thank you for using Banking Application!");
                    break;

                default:
                    System.out.println("Invalid choice! Try again.");
            }

        } while (choice != 7);

        sc.close();
    }
}

